/* eslint-disable react-refresh/only-export-components */
// NavContext.tsx
import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
  memo,
} from "react";

// Define explicit types for better TypeScript support
type NavStateContextType = boolean;
type NavToggleContextType = () => void;

// Create separate contexts with proper typing
const NavStateContext = createContext<NavStateContextType | undefined>(undefined);
const NavToggleContext = createContext<NavToggleContextType | undefined>(undefined);

// Memoized provider component to prevent unnecessary re-renders
export const NavProvider = memo(({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  // Stable toggle reference with useCallback
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
});

NavProvider.displayName = 'NavProvider';


export const useNavCollapsed = (): boolean => {
  const context = useContext(NavStateContext);
  if (context === undefined) {
    throw new Error("useNavCollapsed must be used within a NavProvider");
  }
  return context;
};

export const useNavToggle = (): NavToggleContextType => {
  const context = useContext(NavToggleContext);
  if (context === undefined) {
    throw new Error("useNavToggle must be used within a NavProvider");
  }
  return context;
};

