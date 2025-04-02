import { Component } from "solid-js";
import {
  TAS,
  SolarFoundation,
  SwitchElectric,
  Arkreen,
} from "~/assets/companies";

const Carousel: Component = () => {
  return (
    <div class="carousel">
      <ul class="carousel__list">
        <li class="carousel__item" data-pos="-2">
          <div class="image-container">
            <img
              src={Arkreen}
              alt="Arkreen"
              class="carousel-image object-contain"
            />
          </div>
        </li>
        <li class="carousel__item" data-pos="-1">
          <div class="image-container">
            <img
              src={SwitchElectric}
              alt="Switch Electric"
              class="carousel-image object-contain"
            />
          </div>
        </li>
        <li class="carousel__item" data-pos="0">
          <div class="image-container">
            <p
              class={`caveat font-[600] text-[clamp(30px,5vw,60px)] text-center`}
            >
              Your Project Here
            </p>
          </div>
        </li>
        <li class="carousel__item" data-pos="1">
          <div class="image-container">
            <img
              src={SolarFoundation}
              alt="Solar Foundation"
              class="carousel-image object-cover"
            />
          </div>
        </li>
        <li class="carousel__item" data-pos="2">
          <div class="image-container">
            <img src={TAS} alt="TAS" class="carousel-image object-cover" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
