import { Component, For } from "solid-js";
import "~/styles/flickity.css";
import "~/modules/flickity.pkgd.min.js";
import { Companies } from "~/assets/companies";

const Carousel: Component = () => {
  return (
    <div class="carousel" data-flickity='{ "wrapAround": true }'>
      <For each={Companies}>
        {(img) => (
          <div class="carousel-cell">
            <div class={`w-[150px] h-[150px] mx-auto`}>
              <img
                src={img}
                alt={`Company Logo`}
                class={`w-full h-full object-contain mx-auto`}
              />
            </div>
          </div>
        )}
      </For>
    </div>
  );
};
export default Carousel;
