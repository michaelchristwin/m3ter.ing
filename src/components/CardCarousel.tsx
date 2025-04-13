import { Component, For } from "solid-js";

const cards = [
  { image: "/images/companies/tas.webp" },
  { image: "/images/companies/solar-foundation.webp" },
  { image: "/images/companies/tas.webp" },
  { image: "/images/companies/project.webp" },
  { image: "/images/companies/switch-electric.webp" },
  { image: "/images/companies/arkreen.webp" },
  { image: "/images/companies/switch-electric.webp" },
];

const CardCarousel: Component = () => {
  return (
    <div
      class={`grid sm:grid-cols-7 grid-cols-1 w-full sm:h-full h-[100vh] card-grid`}
    >
      <For each={cards}>
        {(card, i) => (
          <div
            class="sm:w-full w-[220px] mx-auto h-auto sm:aspect-[2.5/3] aspect-[3/1.5] flex justify-center items-center p-3 lg:rounded-2xl rounded-xl bg-[#faf9f6]"
            style={{ "box-shadow": `-1rem 0 3rem rgb(0 0 0 / 0.25)` }}
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

export default CardCarousel;
