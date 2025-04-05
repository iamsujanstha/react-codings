import React from "react";
import { NavContext } from "../providers/NavController";

export const useNav = () => {
  const context = React.useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within a NavController");
  }
  return context;
};