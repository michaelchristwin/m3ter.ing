import { decode } from "blurhash";
import { Component, onMount, createSignal } from "solid-js";

type BlurHashImageProps = {
  hash: string;
  src: string;
  alt: string;
  aspectRatio?: number; // Optional aspect ratio (width/height)
  class?: string;
  imageClass?: string;
  width?: number;
  height?: number;
  srcSet?: string;
  sizes?: string;
};

const BlurHashImage: Component<BlurHashImageProps> = (props) => {
  let canvasRef!: HTMLCanvasElement;
  let containerRef!: HTMLDivElement;
  const [imageLoaded, setImageLoaded] = createSignal(false);

  const defaultAspectRatio = 16 / 9;
  const aspectRatio = props.aspectRatio || defaultAspectRatio;
  const paddingBottom = `${(1 / aspectRatio) * 100}%`;

  onMount(() => {
    if (!canvasRef || !props.hash) return;

    const pixels = decode(props.hash, 32, 32);
    const ctx = canvasRef.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.createImageData(32, 32);
    imageData.data.set(pixels);
    ctx.putImageData(imageData, 0, 0);
  });

  const handleImageLoad = () => setImageLoaded(true);

  return (
    <div
      ref={containerRef}
      class={`relative w-full ${props.class || ""}`}
      style={{ "padding-bottom": paddingBottom }}
    >
      <div class="absolute inset-0 overflow-hidden">
        <canvas
          ref={canvasRef}
          width="32"
          height="32"
          class="w-full h-full object-cover blur-xl transition-opacity duration-300"
          style={{ opacity: imageLoaded() ? "0" : "1" }}
        />
        <img
          src={props.src}
          alt={props.alt || ""}
          width={props.width}
          height={props.height}
          srcset={props.srcSet}
          sizes={props.sizes}
          class={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            props.imageClass || ""
          }`}
          style={{ opacity: imageLoaded() ? "1" : "0" }}
          loading="lazy"
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
};

export default BlurHashImage;
