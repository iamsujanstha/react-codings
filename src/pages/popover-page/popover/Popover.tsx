import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "../../../hooks/useClickOutside";

type PopoverContextType = {
  isOpen: boolean;
  togglePopover: () => void;
  contentRef: React.RefObject<HTMLDivElement>;
  triggerRef: React.RefObject<HTMLButtonElement>;
};

const PopoverContext = createContext<PopoverContextType | null>(null);

const Popover = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const togglePopover = useCallback(() => setIsOpen((prev) => !prev), []);

  // Positioning logic
  useEffect(() => {
    if (!isOpen) return;

    const positionPopover = () => {
      const trigger = triggerRef.current;
      const content = contentRef.current;
      if (!trigger || !content) return;

      const { bottom, left, top } = trigger.getBoundingClientRect();
      const contentHeight = content.offsetHeight;

      let computedTop = bottom;
      if (bottom + contentHeight > window.innerHeight) {
        computedTop = top - contentHeight;
      }

      Object.assign(content.style, {
        position: "absolute",
        top: `${computedTop}px`,
        left: `${left}px`,
        zIndex: 1000,
      });
    };

    /* using requestAnimationFrame ensures:
        ✅ positionPopover() runs after the DOM is rendered and layout is stable. 
    */

    // Delay to next paint to ensure layout is stable
    const id = requestAnimationFrame(positionPopover);
    return () => cancelAnimationFrame(id);
  }, [isOpen]);

  useClickOutside([contentRef, triggerRef], () => {
    if (isOpen) setIsOpen(false);
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <PopoverContext.Provider
      value={{ isOpen, togglePopover, triggerRef, contentRef }}
    >
      <div className="relative">{children}</div>
    </PopoverContext.Provider>
  );
};

const Action = ({ children }: { children: ReactNode }) => {
  const ctx = useContext(PopoverContext);
  if (!ctx) throw new Error("Popover.Action must be used inside Popover");

  return (
    <button
      ref={ctx.triggerRef}
      onClick={ctx.togglePopover}
      className="rounded bg-slate-700 px-3 py-1 text-white"
    >
      {children}
    </button>
  );
};

const Content = ({ children }: { children: ReactNode }) => {
  const ctx = useContext(PopoverContext);
  if (!ctx || !ctx.isOpen) return null;

  return createPortal(
    <div
      ref={ctx.contentRef}
      className="bg-blue-950 text-white p-3 rounded shadow-lg transition-all"
    >
      {children}
    </div>,
    document.body
  );
};

// Compound component assignment
Popover.Action = Action;
Popover.Content = Content;

export default Popover;
