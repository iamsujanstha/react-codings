import React, { useCallback, useMemo } from "react";
import { useState } from "react";


const NavContext = React.createContext({
  collapsed: false,
  toggle: () => { }
});

const NavController = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = useCallback(() => setCollapsed((prev) => !prev), [])

  const value = useMemo(() => ({ collapsed, toggle }), [collapsed, toggle]);

  return (
    <NavContext.Provider value={value}>
      {children}
    </NavContext.Provider>
  )
}

export default NavController;

export { NavContext }