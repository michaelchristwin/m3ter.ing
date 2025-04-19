import { Component, For, onMount, createSignal, onCleanup } from "solid-js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type LogosCarouselProps = {
  scroller: HTMLElement;
};

const logos = [
  { image: "/images/companies/logo.webp" },
  { image: "/images/companies/tas.webp" },
  { image: "/images/companies/solar-foundation.webp" },
  { image: "/images/companies/project.webp" },
  { image: "/images/companies/switch-electric.webp" },
  { image: "/images/companies/arkreen.webp" },
  { image: "/images/companies/powerledger.webp" },
];

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
            // markers: true,
          },
          opacity: 1,
          scale: 1,
          duration: 2,
          stagger: 0.1, // Add staggered animation for better visual effect
          ease: "power3.out",
        }
      );
    }, container as Element);
    ScrollTrigger.refresh();
  });

  onCleanup(() => {
    ctx.revert();
  });

  return (
    <div class="grid sm:grid-cols-7 grid-cols-1 w-full sm:h-full h-[100vh] card-grid">
      <For each={logos}>
        {(card, i) => (
          <div
            ref={(el) => setCardRef(el, i())}
            class="sm:w-full w-[220px] mx-auto h-auto sm:aspect-[2.5/3] aspect-[3/1.5] flex justify-center items-center p-3 lg:rounded-2xl rounded-xl bg-[#faf9f6]"
            style={{
              "box-shadow": "-1rem 0 3rem rgb(0 0 0 / 0.25)",
            }}
          >
            <img
              loading="lazy"
              src={card.image}
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
