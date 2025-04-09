import { createSignal, onCleanup, onMount } from "solid-js";

type ProgressiveImageProps = {
  src: string;
  placeholder: string;
  alt?: string;
  class?: string;
};

export default function ProgressiveImage(props: ProgressiveImageProps) {
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
    >
      {/* Blurred placeholder */}
      <img
        src={props.placeholder}
        alt={props.alt}
        class="w-full h-auto blur-lg scale-105 absolute top-0 left-0 transition-opacity duration-500"
        style={{ opacity: loaded() ? 0 : 1 }}
      />
      {/* Full image */}
      {isInView() && (
        <img
          src={props.src}
          alt={props.alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          class="w-full h-auto transition-opacity duration-500"
          style={{ opacity: loaded() ? 1 : 0 }}
        />
      )}
    </div>
  );
}
