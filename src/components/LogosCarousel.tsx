import { Component, For, onMount, createSignal, onCleanup } from "solid-js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { companyicons } from "~/assets/images/companies";
import { ResponsiveImage } from "@responsive-image/solid";

gsap.registerPlugin(ScrollTrigger);

type LogosCarouselProps = {
  scroller: HTMLElement;
};

const LogosCarousel: Component<LogosCarouselProps> = (props) => {
  const [cardRefs, setCardRefs] = createSignal<HTMLDivElement[]>([]);
  let ctx: gsap.Context;

  const setCardRef = (el: HTMLDivElement, index: number) => {
    if (el) {
      const current = cardRefs();
      current[index] = el;
      setCardRefs([...current]);
    }
  };

  onMount(() => {
    const elements = cardRefs();
    const container = elements[0].parentElement;
    ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        {
          scale: 0.6,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            toggleActions: "play none none reverse",
            scroller: props.scroller,
            //markers: true,
          },
          opacity: 1,
          scale: 1,
          duration: 2,
          stagger: 0.1, // Add staggered animation for better visual effect
          ease: "power3.out",
        }
      );
    });
    ScrollTrigger.refresh();
  });

  onCleanup(() => {
    ctx.revert();
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
