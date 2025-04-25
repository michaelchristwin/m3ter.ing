import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CircleAnimation: React.FC = () => {
  const holdRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      if (!holdRef.current) return;
      ScrollTrigger.create({
        trigger: holdRef.current,
        animation: gsap.fromTo(".resize", { scale: 1 }, { scale: 10 }),
        anticipatePin: 1,
        pin: true,
        start: "center center",
        end: "bottom top",
        scrub: 1,
      });
    },
    { scope: holdRef }
  );

  return (
    <section className="hold" ref={holdRef}>
      <div className="resize"></div>
    </section>
  );
};
export default CircleAnimation;
