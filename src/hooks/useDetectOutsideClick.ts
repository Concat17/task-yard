import { useCallback, useEffect, useRef } from "react";

export function useDetectClickOutside(args: {
  onTriggered: (e: Event) => void;
}) {
  const { onTriggered } = args;

  const ref = useRef<HTMLDivElement>(null);

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (ref && ref.current) {
        if (!ref.current.contains(e.target as Node)) {
          onTriggered?.(e);
        }
      }
    },
    [onTriggered]
  );

  useEffect(() => {
    document.addEventListener("mousedown", clickListener);
    return () => {
      document.removeEventListener("mousedown", clickListener);
    };
  }, [clickListener, onTriggered, ref]);

  return ref;
}
