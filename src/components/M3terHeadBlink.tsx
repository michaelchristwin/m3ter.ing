import { Component, createSignal, onCleanup, onMount, Show } from "solid-js";
import seedrandom from "seedrandom";
import { M3terHead } from "m3ters-solid";

type M3terHeadProps = {
  displayTime: number;
  hiddenTime: number;
  backgroundColor: string;
  index: number;
};

const M3terHeadBlink: Component<M3terHeadProps> = (props) => {
  const [randomNum, setRandomNum] = createSignal<number | null>(null);
  const [visible, setVisible] = createSignal(false);

  let displayTimeout: NodeJS.Timeout;
  let hiddenTimeout: NodeJS.Timeout;

  const generateRandom = () => {
    const rng = seedrandom();
    const num = Math.floor(rng() * 100);
    setRandomNum(num);
  };

  const startCycle = () => {
    setVisible(false); // Ensure we're hidden first

    // Short timeout to ensure proper transition
    setTimeout(() => {
      generateRandom(); // Generate new random number
      setVisible(true); // Show with new avatar

      displayTimeout = setTimeout(() => {
        setVisible(false); // Hide after display time

        hiddenTimeout = setTimeout(() => {
          startCycle(); // Restart the cycle
        }, props.hiddenTime * 1000);
      }, props.displayTime * 1000);
    }, 50);
  };

  onMount(() => {
    startCycle();
  });

  onCleanup(() => {
    clearTimeout(displayTimeout);
    clearTimeout(hiddenTimeout);
  });

  return (
    <div
      class="item flex justify-center items-center"
      style={{ "--i": props.index, "background-color": props.backgroundColor }}
    >
      <Show when={randomNum() !== null}>
        <div
          class="p-4"
          style={{
            opacity: visible() ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <M3terHead seed={String(randomNum())} size={150} />
        </div>
      </Show>
    </div>
  );
};

export default M3terHeadBlink;
