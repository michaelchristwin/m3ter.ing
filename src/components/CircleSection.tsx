import { Component, onCleanup, onMount } from "solid-js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CircleSection: Component = () => {
  let ctx: gsap.Context;
  let holdRef!: HTMLElement;
  onMount(() => {
    ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: holdRef,
        animation: gsap.fromTo(".resize", { scale: 1 }, { scale: 10 }),
        anticipatePin: 1,
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
    <section class="hold" ref={(el) => (holdRef = el)}>
      <div class="resize"></div>
    </section>
  );
};
export default CircleSection;
