import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, placeholder, responsive } from "@cloudinary/react";

const cld = new Cloudinary({
  cloud: { cloudName: import.meta.env.VITE_CLOUDNAME },
});

interface ImageProps {
  image_name: string;
  transformation?: string;
  className?: string;
  alt: string;
}

function Image({ image_name, transformation, className, alt }: ImageProps) {
  const img = cld
    .image(image_name)
    .format("webp") // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality("auto")
    .addTransformation(transformation || "");

  return (
    <AdvancedImage
      cldImg={img}
      alt={alt}
      style={{ maxWidth: "100%" }}
      className={className}
      plugins={[
        responsive({ steps: [200, 320, 480, 768, 1024] }),
        placeholder(),
      ]}
    ></AdvancedImage>
  );
}

export default Image;

export function createImageURL({ image_name }: { image_name: string }) {
  const img = cld.image(image_name).format("auto").quality("auto");

  return img.toURL();
}
