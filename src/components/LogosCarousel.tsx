import { Component, For } from "solid-js";
import { companyicons } from "~/assets/images/companies";
import { ResponsiveImage } from "@responsive-image/solid";

const LogosCarousel: Component = () => {
  return (
    <div class="grid sm:grid-cols-7 grid-cols-1 w-full sm:h-full h-[100vh] card-grid">
      <For each={companyicons}>
        {(icon, i) => (
          <div
            class="sm:w-full w-[220px] mx-auto sm:aspect-[2.5/3] aspect-[3/1.5] flex justify-center items-center p-3 lg:rounded-2xl rounded-xl bg-[#faf9f6] logoCard"
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
