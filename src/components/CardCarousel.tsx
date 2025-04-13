import { Component, For } from "solid-js";

const cards = [
  { image: "/images/companies/tas.webp" },
  { image: "/images/companies/solar-foundation.webp" },
  { image: "/images/companies/project.webp" },
  { image: "/images/companies/switch-electric.webp" },
  { image: "/images/companies/arkreen.webp" },
];

const CardCarousel: Component = () => {
  return (
    <div
      class={`grid grid-cols-5 w-full xl:h-[350px] lg:h-[300px] md:h-[250px] h-[200px] card-grid`}
    >
      <For each={cards}>
        {(card, i) => (
          <div
            class="w-full h-full flex justify-center items-center p-3 rounded-2xl bg-[#faf9f6]"
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
