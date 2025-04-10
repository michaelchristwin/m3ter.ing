import { Component, createSignal, onCleanup, onMount } from "solid-js";

type ProgressiveImageProps = {
  src: string;
  placeholder: string;
  alt?: string;
  class?: string;
};

const ProgressiveImage: Component<ProgressiveImageProps> = (props) => {
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
    <div ref={wrapperRef!} class={`relative ${props.class || ""}`}>
      {isInView() && !loaded() && (
        <div class="absolute inset-0 bg-white animate-pulse z-10"></div>
      )}
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
          class="absolute inset-0 object-contain w-full h-full transition-opacity duration-500"
          style={{ opacity: loaded() ? 1 : 0 }}
        />
      )}
    </div>
  );
};
export default ProgressiveImage;
