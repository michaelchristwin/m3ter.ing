import { useFadeInOnScroll } from "~/hooks/useFadeInOnScroll";
import type { Route } from "./+types/animations";
// import CircleAnimation from "~/components/CircleAnimation";
// import HorizontalScroll from "~/components/HorizontalScroll";
// import TextAnimation from "~/components/TextAnimation";
import HeroScrollAnimation from "~/components/hero-text-scroll-animation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Animations" },
    { name: "description", content: "Welcome to Animations testing ground" },
  ];
}

function Animations() {
  useFadeInOnScroll();
  return (
    <div className={`w-full`}>
      <HeroScrollAnimation />
    </div>
  );
}
export default Animations;
