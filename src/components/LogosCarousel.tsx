import { Component, For, onMount, createSignal, onCleanup } from "solid-js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { companyicons } from "~/assets/images/companies";
import { ResponsiveImage } from "@responsive-image/solid";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

type LogosCarouselProps = {
  scroller: HTMLElement;
};

const LogosCarousel: Component<LogosCarouselProps> = (props) => {
  const [cardRefs, setCardRefs] = createSignal<HTMLDivElement[]>([]);
  let ctx: gsap.Context;
  let lenis: Lenis;

  const setCardRef = (el: HTMLDivElement, index: number) => {
    if (el) {
      const current = cardRefs();
      current[index] = el;
      setCardRefs([...current]);
    }
  };
  onMount(() => {
    lenis = new Lenis({
      wrapper: props.scroller,
      autoRaf: true,
    });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });
    gsap.ticker.lagSmoothing(0);
    const elements = cardRefs();
    const container = elements[0].parentElement;
    ctx = gsap.context(() => {
      gsap.from(elements, {
        scale: 0.6,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          toggleActions: "play none none reverse",
          scroller: props.scroller,
        },
      });
    });
    ScrollTrigger.refresh();
  });

  onCleanup(() => {
    ctx.revert();
    lenis.destroy();
  });

  return (
    <div class="grid sm:grid-cols-7 grid-cols-1 w-full sm:h-full h-[100vh] card-grid">
      <For each={companyicons}>
        {(icon, i) => (
          <div
            ref={(el) => setCardRef(el, i())}
            class="sm:w-full w-[220px] mx-auto h-auto sm:aspect-[2.5/3] aspect-[3/1.5] flex justify-center items-center p-3 lg:rounded-2xl rounded-xl bg-[#faf9f6]"
            style={{
              "box-shadow": "-1rem 0 3rem rgb(0 0 0 / 0.25)",
            }}
          >
            <ResponsiveImage
              src={icon}
              alt={`Card ${i()}`}
              class="max-w-full max-h-full transition-all duration-300 ease-in-out object-contain"
            />
          </div>
        )}
      </For>
    </div>
  );
};

export default LogosCarousel;
