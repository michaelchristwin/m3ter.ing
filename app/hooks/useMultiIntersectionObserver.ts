import React, { useEffect, useRef, useState } from "react";

type VisibilityMap = { [key: number]: boolean };

export function useMultiIntersectionObserver<T extends HTMLElement>(
  count: number,
  options: IntersectionObserverInit
): [React.RefObject<T | null>[], VisibilityMap] {
  const refs = useRef<React.RefObject<T | null>[]>([]);
  const [visibility, setVisibility] = useState<VisibilityMap>({});

  if (refs.current.length !== count) {
    refs.current = Array(count)
      .fill(null)
      .map(() => React.createRef<T>());
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setVisibility((prev) => {
        const updated = { ...prev };
        for (const entry of entries) {
          const index = refs.current.findIndex(
            (r) => r.current === entry.target
          );
          if (index !== -1) {
            updated[index] = entry.isIntersecting;
          }
        }
        return updated;
      });
    }, options);

    refs.current.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [count, options]);

  return [refs.current, visibility];
}
