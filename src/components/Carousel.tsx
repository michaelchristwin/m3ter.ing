import { Component } from "solid-js";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL + "/companies";

const Carousel: Component = () => {
  return (
    <div class="carousel">
      <ul class="carousel__list">
        <li class="carousel__item" data-pos="-2">
          <div class="image-container">
            <img
              loading={`lazy`}
              src={`${IMAGE_URL}/arkreen.webp`}
              alt="Arkreen"
              class="carousel-image object-cover"
            />
          </div>
        </li>
        <li class="carousel__item" data-pos="-1">
          <div class="image-container">
            <img
              loading={`lazy`}
              src={`${IMAGE_URL}/switch-electric.webp`}
              alt="Switch Electric"
              class="carousel-image object-cover"
            />
          </div>
        </li>
        <li class="carousel__item" data-pos="0">
          <div class="image-container">
            <div class={`image-container`}>
              <img
                loading={`lazy`}
                src={`${IMAGE_URL}/project.webp`}
                alt="Your Project Here"
                class={`carousel-image object-cover`}
              />
            </div>
          </div>
        </li>
        <li class="carousel__item" data-pos="1">
          <div class="image-container">
            <img
              loading={`lazy`}
              src={`${IMAGE_URL}/solar-foundation.webp`}
              alt="Solar Foundation"
              class="carousel-image object-cover"
            />
          </div>
        </li>
        <li class="carousel__item" data-pos="2">
          <div class="image-container">
            <img
              loading={`lazy`}
              src={`${IMAGE_URL}/tas.webp`}
              alt="TAS"
              class="carousel-image object-cover"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
