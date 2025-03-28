import { Component } from "solid-js";

interface CardProps {
  image: string;
}

const Card: Component<CardProps> = ({ image }) => {
  return (
    <div class={`shadow-lg card p-3`}>
      <div class={`w-[150px] h-[150px] mx-auto`}>
        <img
          src={image}
          alt={`Company Logo`}
          class={`w-full h-full object-contain mx-auto`}
        />
      </div>
    </div>
  );
};

export default Card;
