import { createSignal, onMount, onCleanup } from "solid-js";
import SolarBg from "~/assets/solarbg-ghiblify.png";

// Add this component to your project
const ParallaxBackground = () => {
  const [scrollPosition, setScrollPosition] = createSignal(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial position
  });

  onCleanup(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      class="fixed top-0 left-0 w-full h-screen z-[-1]"
      style={{
        "background-image": `url('${SolarBg}')`,
        "background-size": "cover",
        "background-position": `center ${50 + scrollPosition() * 0.1}%`,
        transform: `translateY(${scrollPosition() * 0.5}px)`,
        transition: "transform 0.1s ease-out",
      }}
    />
  );
};
export default ParallaxBackground;
