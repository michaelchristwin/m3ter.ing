import { Component } from "solid-js";
import { clientOnly } from "@solidjs/start";
import { Meta, Title } from "@solidjs/meta";
const TextSection = clientOnly(() => import("~/components/TextSection"));
const CircleSection = clientOnly(() => import("~/components/CircleSection"));
const HorizontalScroll = clientOnly(
  () => import("~/components/HorizontalScroll")
);

const Page: Component = () => {
  let scrollerRef!: HTMLDivElement;
  return (
    <div
      ref={(el) => (scrollerRef = el)}
      class="h-[100vh] overflow-y-scroll block w-full m-0 p-0 relative"
    >
      <Title>Animations</Title>
      <Meta property="description" content="We test animations here" />
      <TextSection scroller={scrollerRef} />
      <CircleSection scroller={scrollerRef} />
      <HorizontalScroll scroller={scrollerRef} />
    </div>
  );
};

export default Page;
