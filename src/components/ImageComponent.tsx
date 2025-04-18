import { Component, JSX, splitProps } from "solid-js";

type ImageProps = JSX.ImgHTMLAttributes<HTMLImageElement> & {
  imagePathName: string;
};

const ImageComponent: Component<ImageProps> = (props) => {
  const [local, imageProps] = splitProps(props, ["imagePathName"]);

  return (
    <img
      {...imageProps}
      decoding={"async"}
      src={`${local.imagePathName}-768w.webp`}
      loading="lazy"
      srcSet={`${local.imagePathName}-320w.webp 320w,
    ${local.imagePathName}-480w.webp 480w,
    ${local.imagePathName}-768w.webp 768w,
    ${local.imagePathName}-1024w.webp 1024w,
    ${local.imagePathName}-1440w.webp 1440w`}
    />
  );
};

export default ImageComponent;
