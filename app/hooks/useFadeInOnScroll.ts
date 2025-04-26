import { useEffect } from "react";

type UseFadeInOnScrollOptions = {
  selector?: string;
  threshold?: number;
  once?: boolean;
};

export const useFadeInOnScroll = ({
  selector = ".fade-in-block",
  threshold = 0.1,
  once = true,
}: UseFadeInOnScrollOptions = {}) => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            el.classList.add("visible");
            if (once) observer.unobserve(el);
          }
        });
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold, once]);
};
