import { Component, onCleanup, onMount } from "solid-js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TextSection: Component = () => {
  let wrapperRef!: HTMLDivElement;
  let ctx: gsap.Context;

  onMount(() => {
    ctx = gsap.context(() => {
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
    }, wrapperRef);
  });

  onCleanup(() => {
    ctx.revert();
  });
  return (
    <div ref={(el) => (wrapperRef = el)} class={`w-full`}>
      <div class="section landing">
        <div class="landing-text frontend font-extrabold text-[100px]">
          Frontend
        </div>
        <div class="landing-text developer font-extrabold text-[100px]">
          Developer
        </div>
      </div>
    </div>
  );
};

export default TextSection;
