import { useEffect } from "react";

export function useClickOutside(
  refs: React.RefObject<HTMLElement>[],
  onOutsideClickOrEscape: () => void
) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const isInside = refs.some(ref => ref.current?.contains(e.target as Node));
      if (!isInside) {
        onOutsideClickOrEscape();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onOutsideClickOrEscape();
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [refs, onOutsideClickOrEscape]);
}
