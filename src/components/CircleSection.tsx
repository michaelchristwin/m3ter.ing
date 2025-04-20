import { Component, onCleanup, onMount } from "solid-js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type CircleSectionProps = {
  scroller: HTMLElement;
};
const CircleSection: Component<CircleSectionProps> = (props) => {
  let ctx: gsap.Context;
  let holdRef!: HTMLElement;
  onMount(() => {
    ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: holdRef,
        scroller: props.scroller,
        animation: gsap.fromTo(".resize", { scale: 1 }, { scale: 10 }),
        pin: true,
        start: "center center",
        end: "bottom top",
        scrub: 1,
      });
    }, holdRef);
  });
  onCleanup(() => {
    ctx.revert();
  });
  return (
    <section class="hold" ref={holdRef}>
      <div class="resize"></div>
    </section>
  );
};
export default CircleSection;
