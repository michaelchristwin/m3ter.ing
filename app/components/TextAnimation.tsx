import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const TextAnimation: React.FC = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!wrapper.current) return;
      gsap.to(".frontend", {
        scrollTrigger: {
          trigger: ".landing",

          start: "center center",
          scrub: 0.5,
        },
        xPercent: 25,
      });
      gsap.to(".developer", {
        scrollTrigger: {
          trigger: ".landing",
          start: "center center",
          scrub: 0.5,
        },
        xPercent: -25,
      });
    },
    { scope: wrapper }
  );
  return (
    <div ref={wrapper} className={`w-full`}>
      <div className="section landing">
        <div className="landing-text frontend font-extrabold text-[100px]">
          Frontend
        </div>
        <div className="landing-text developer font-extrabold text-[100px]">
          Developer
        </div>
      </div>
    </div>
  );
};

export default TextAnimation;
