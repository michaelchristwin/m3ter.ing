import { useEffect, useRef, useState } from "react";

const TextAnimation: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const frontendRef = useRef<HTMLDivElement>(null);
  const developerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const windowCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;

      // Calculate offset from element's center to viewport center
      // This ensures the animation starts when the element enters viewport
      const scrollPosition = windowCenter - elementCenter;

      setScrollY(scrollPosition);
    };

    // Initial calculation
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const moveAmount = scrollY * 0.1; // adjust multiplier to control speed

    if (frontendRef.current) {
      frontendRef.current.style.transform = `translateX(${moveAmount}px)`;
    }

    if (developerRef.current) {
      developerRef.current.style.transform = `translateX(${-moveAmount}px)`;
    }
  }, [scrollY]);

  return (
    <div ref={wrapperRef} className="w-full">
      <section className="landing relative h-[100vh] flex items-center justify-center overflow-hidden">
        <h1
          ref={frontendRef}
          className="landing-text frontend font-extrabold text-[clamp(40px,10vw,100px)]"
        >
          Frontend
        </h1>
        <h1
          ref={developerRef}
          className="landing-text developer font-extrabold text-[clamp(40px,10vw,100px)] absolute"
        >
          Developer
        </h1>
      </section>
    </div>
  );
};

export default TextAnimation;
