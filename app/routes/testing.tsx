import type { Route } from "./+types/testing";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Testing" },
    { name: "description", content: "Welcome to Mike's testing ground" },
  ];
}

function Testing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  // Create animations linked to scroll progress
  const oneX = useTransform(scrollYProgress, [0.25, 0.5], ["0%", "-110%"]);
  const twoY = useTransform(scrollYProgress, [0.5, 0.75], ["0%", "-110%"]);
  const threeX = useTransform(scrollYProgress, [0.75, 1], ["0%", "110%"]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      {/* Static Section */}
      <div className="h-screen flex justify-center items-center">
        <h1>Scroll below</h1>
      </div>

      {/* Pinned Scroll Animation */}
      <div className="sticky top-0 h-screen overflow-hidden bg-orange-400 flex justify-center items-center">
        <h1 className="absolute">The animation is finished</h1>

        {/* Layers */}
        <motion.div
          style={{ x: oneX }}
          className="one absolute inset-0 bg-blue-400 z-10 flex justify-center items-center"
        >
          <h1>One</h1>
        </motion.div>

        <motion.div
          style={{ y: twoY }}
          className="two absolute inset-0 bg-[#f08080] z-9 flex justify-center items-center"
        >
          <h1>Two</h1>
        </motion.div>

        <motion.div
          style={{ x: threeX }}
          className="three absolute inset-0 bg-[#e0ffff] z-8 flex justify-center items-center"
        >
          <h1>Three</h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Testing;
