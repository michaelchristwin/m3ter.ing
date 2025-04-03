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
    generateRandom();
    setVisible(true); // Fade in
    displayTimeout = setTimeout(() => {
      setVisible(false); // Fade out
      hiddenTimeout = setTimeout(() => {
        startCycle(); // Restart the cycle
      }, props.hiddenTime * 1000);
    }, props.displayTime * 1000);
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
      class={`item flex justify-center items-center`}
      style={{ "--i": props.index, "background-color": props.backgroundColor }}
    >
      <Show when={randomNum() !== null}>
        <div
          style={{
            opacity: visible() ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <M3terHead seed={String(randomNum())} size={100} />
        </div>
      </Show>
    </div>
  );
};

export default M3terHeadBlink;
