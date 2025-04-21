import { Component, onCleanup, onMount } from "solid-js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TextSectionProps = {
  scroller: HTMLElement;
};
const TextSection: Component<TextSectionProps> = (props) => {
  let wrapperRef!: HTMLDivElement;
  let ctx: gsap.Context;

  onMount(() => {
    ctx = gsap.context(() => {
      gsap.to(".frontend", {
        scrollTrigger: {
          trigger: ".landing",
          scroller: props.scroller,
          start: "center center",
          scrub: 0.5,
        },
        xPercent: 25,
      });

      gsap.to(".developer", {
        scrollTrigger: {
          trigger: ".landing",
          scroller: props.scroller,
          start: "center center",
          scrub: 0.5,
        },
        xPercent: -25,
      });

      gsap.to(".intro", {
        scrollTrigger: {
          trigger: ".intro",
          scroller: props.scroller,
          pin: true,
          start: "center center",
        },
      });

      gsap.to(".textL", {
        scrollTrigger: {
          trigger: ".textL",
          scroller: props.scroller,
          id: "textleft",
          start: "top center",
        },
        opacity: 1,
        duration: 1,
      });

      gsap.to(".textR", {
        scrollTrigger: {
          trigger: ".textR",
          scroller: props.scroller,
          id: "textright",
          start: "top 20%",
        },
        opacity: 1,
        duration: 1,
      });
    }, wrapperRef);
    ScrollTrigger.normalizeScroll();
  });

  onCleanup(() => {
    ctx.revert();
  });
  return (
    <div id="wrapper" ref={wrapperRef}>
      <div class="section landing">
        <div class="landing-text frontend font-extrabold text-[100px]">
          Frontend
        </div>
        <div class="landing-text developer font-extrabold text-[100px]">
          Developer
        </div>
      </div>

      <div class="section intro">
        <div class="intro-text">
          <h3 class="top-[35%] left-0 textL">M3tering Protocol</h3>
          <h3 class="top-[65%] right-0 textR">
            Certified Salesforce Commerce Cloud developer with a passion for art
            and design.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TextSection;
