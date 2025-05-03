import { useNavCollapsed, useNavToggle } from "../contexts/nav-context";

export const useNav = (): { collapsed: boolean; toggle: () => void } => {
  return {
    collapsed: useNavCollapsed(),
    toggle: useNavToggle(),
  };
};