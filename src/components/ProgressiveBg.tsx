import { createSignal, onCleanup, onMount } from "solid-js";

type ProgressiveBgProps = {
  src: string;
  placeholder: string;
  class?: string;
  style?: string;
  children?: any;
};

export default function ProgressiveBg(props: ProgressiveBgProps) {
  const [isInView, setIsInView] = createSignal(false);
  const [loaded, setLoaded] = createSignal(false);
  let wrapperRef!: HTMLDivElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (wrapperRef) observer.observe(wrapperRef);
    onCleanup(() => observer.disconnect());
  });

  return (
    <div
      ref={wrapperRef!}
      class={`relative overflow-hidden ${props.class || ""}`}
      style={props.style}
    >
      {/* Placeholder layer */}
      <div
        class="absolute inset-0 bg-cover bg-center blur-lg scale-105 transition-opacity duration-500"
        style={{
          "background-image": `url(${props.placeholder})`,
          opacity: loaded() ? 0 : 1,
        }}
      />
      {/* Actual image layer */}
      {isInView() && (
        <div
          class="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{
            "background-image": `url(${props.src})`,
            opacity: loaded() ? 1 : 0,
          }}
          onLoad={() => setLoaded(true)}
        />
      )}
      {/* Content Layer */}
      <div class="relative z-10">{props.children}</div>
    </div>
  );
}
