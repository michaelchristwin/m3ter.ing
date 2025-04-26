import type { Route } from "./+types/animations";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// import CircleAnimation from "~/components/CircleAnimation";
// import HorizontalScroll from "~/components/HorizontalScroll";
// import TextAnimation from "~/components/TextAnimation";
import HeroScrollAnimation from "~/components/hero-text-scroll-animation";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Animations" },
    { name: "description", content: "Welcome to Animations testing ground" },
  ];
}

function Animations() {
  const scroller = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!scroller.current) return;
      ScrollTrigger.defaults({
        scroller: scroller.current,
        markers: true,
      });
    },
    { scope: scroller }
  );

  return (
    <div ref={scroller} className={`w-full`}>
      <HeroScrollAnimation />
    </div>
  );
}
export default Animations;
