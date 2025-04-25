import type { Route } from "./+types/animations";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import CircleAnimation from "~/components/CircleAnimation";
import HorizontalScroll from "~/components/HorizontalScroll";
import TextAnimation from "~/components/TextAnimation";
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
    <div
      ref={scroller}
      className={`w-full overflow-x-hidden overflow-y-auto h-[100vh]`}
    >
      <TextAnimation />
      <CircleAnimation />
      <HorizontalScroll />
    </div>
  );
}
export default Animations;
