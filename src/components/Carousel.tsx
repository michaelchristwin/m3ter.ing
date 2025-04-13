import { Component, For } from "solid-js";

const cards = [
  { image: "/images/companies/tas.webp" },
  { image: "/images/companies/solar-foundation.webp" },
  { image: "/images/companies/project.webp" },
  { image: "/images/companies/switch-electric.webp" },
  { image: "/images/companies/arkreen.webp" },
];

const Carousel: Component = () => {
  const centerIndex = 2;

  const getCardStyle = (index: number) => {
    const position = index - centerIndex;
    const isCenter = position === 0;

    const zIndex = 10 - Math.abs(position);

    const scale = isCenter ? 1 : 0.85;

    const translateX = position * 60 + "%";

    const opacity = 1 - Math.abs(position) * 0.2;

    return {
      transform: `translateX(${translateX}) scale(${scale})`,
      zIndex: zIndex,
      opacity: opacity,
      height: isCenter ? "300px" : "250px",
    };
  };

  return (
    <div class="flex w-full items-center relative h-[350px]">
      <ul class="flex list-none relative inset-0 w-full h-full justify-center perspective-[500]">
        <For each={cards}>
          {(card, i) => (
            <li
              class="flex items-center justify-center bg-gray-50 rounded-xl shadow-lg absolute overflow-hidden ease-in-out duration-300 transition-all w-[calc(100%/5)]"
              style={{
                "z-index": getCardStyle(i()).zIndex,
                ...getCardStyle(i()),
              }}
            >
              <div class="w-full h-full flex justify-center items-center p-3">
                <img
                  loading="lazy"
                  src={card.image}
                  alt={`Card ${i()}`}
                  class="max-w-full max-h-full transition-all duration-300 ease-in-out object-contain"
                />
              </div>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default Carousel;
