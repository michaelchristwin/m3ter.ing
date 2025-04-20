import { CountUp } from "countup.js";
import { Component, createEffect, onCleanup, onMount } from "solid-js";

const AnimatedCounter: Component<{ to: number; prefix?: string }> = (props) => {
  let spanElement!: HTMLSpanElement;
  let countUpAnim: CountUp;
  let observer: IntersectionObserver;
  let isVisible = false;

  async function initCountUp() {
    const countupModule = await import("countup.js");
    countUpAnim = new countupModule.CountUp(spanElement, props.to, {
      duration: 2.5,
      useEasing: true,
      useGrouping: true,
    });
  }

  // Set up the intersection observer to handle animation based on visibility
  const setupObserver = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When element comes into view
          if (entry.isIntersecting && !isVisible && countUpAnim) {
            isVisible = true;
            countUpAnim.reset();
            countUpAnim.start();
          }

          // When element goes out of view
          if (!entry.isIntersecting && isVisible) {
            isVisible = false;
          }
        });
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: "0px", // Can be adjusted to trigger animation earlier/later
      }
    );

    if (spanElement) {
      observer.observe(spanElement);
    }
  };

  createEffect(() => {
    // This will re-run when props.to changes
    if (countUpAnim) {
      countUpAnim.update(props.to);
      if (isVisible) {
        countUpAnim.start();
      }
    }
  });

  onMount(async () => {
    await initCountUp();
    setupObserver();
  });

  onCleanup(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return (
    <span
      ref={spanElement}
      class={`font-mono font-extrabold xl:text-[60px] lg:text-[50px] md:text-[35px] text-[60px] text-white`}
    >
      {props.prefix} 0
    </span>
  );
};

export default AnimatedCounter;
