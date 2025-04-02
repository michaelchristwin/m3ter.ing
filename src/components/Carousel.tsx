import { Component } from "solid-js";
// import {
//   TAS,
//   SolarFoundation,
//   SwitchElectric,
//   Arkreen,
// } from "~/assets/companies";

const Carousel: Component = () => {
  return (
    <div class="carousel">
      <ul class="carousel__list">
        <li class="carousel__item" data-pos="-2">
          1
        </li>
        <li class="carousel__item" data-pos="-1">
          2
        </li>
        <li class="carousel__item" data-pos="0">
          3
        </li>
        <li class="carousel__item" data-pos="1">
          4
        </li>
        <li class="carousel__item" data-pos="2">
          5
        </li>
      </ul>
    </div>
  );
};
export default Carousel;
