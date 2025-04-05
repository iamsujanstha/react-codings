// NavContext.tsx
import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
} from "react";

// Separate contexts for state and updater
const NavStateContext = createContext<boolean | undefined>(undefined);
const NavToggleContext = createContext<(() => void) | undefined>(undefined);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = useCallback(() => {
    setCollapsed(prev => !prev);
  }, []);

  return (
    <NavStateContext.Provider value={collapsed}>
      <NavToggleContext.Provider value={toggle}>
        {children}
      </NavToggleContext.Provider>
    </NavStateContext.Provider>
  );
};

// Custom hooks (encapsulate usage and provide better DX)
const useNavCollapsed = () => {
  const context = useContext(NavStateContext);
  if (context === undefined) {
    throw new Error("useNavCollapsed must be used within a NavProvider");
  }
  return context;
};

const useNavToggle = () => {
  const context = useContext(NavToggleContext);
  if (context === undefined) {
    throw new Error("useNavToggle must be used within a NavProvider");
  }
  return context;
};


export { useNavCollapsed, useNavToggle };