import { Component } from "solid-js";

const StackedCards: Component = () => {
  return <section class={`flex p-[3rem]`}></section>;
};
export default StackedCards;

const Card: Component = () => {
  return (
    <article
      class={`flex flex-col relative h-[350px] w-[400px] min-w-[250px] p-[1.5rem] rounded-[16px]`}
    >
      <header></header>
    </article>
  );
};
