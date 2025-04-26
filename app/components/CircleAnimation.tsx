import { useEffect, useRef } from "react";

const CircleAnimation: React.FC = () => {
  const holdRef = useRef<HTMLElement>(null);
  const resizeRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!holdRef.current || !resizeRef.current) return;

      const rect = holdRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate progress between center and bottom
      const totalScroll = viewportHeight / 2 + rect.height;
      const scrolled = viewportHeight / 2 - rect.top;
      const progress = Math.min(Math.max(scrolled / totalScroll, 0), 1); // clamp between 0 and 1

      const scale = 1 + progress * 9; // from 1 to 10

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        resizeRef.current!.style.transform = `scale(${scale})`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={holdRef}
      className="h-screen bg-orange-500 flex justify-center items-center"
    >
      <div
        ref={resizeRef}
        className="w-[100px] h-[100px] rounded-full bg-teal-600 will-change-transform"
      ></div>
    </section>
  );
};

export default CircleAnimation;
