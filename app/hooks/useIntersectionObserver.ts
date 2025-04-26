import { useEffect, useRef, useState } from "react";

type Args = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export function useIntersectionObserver<T extends Element>({
  root = null,
  rootMargin = "0px",
  threshold = 0,
}: Args) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref.current, root, rootMargin, threshold]);

  return { ref, isIntersecting };
}
