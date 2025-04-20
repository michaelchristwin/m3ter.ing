import { A } from "@solidjs/router";
import { ImageData } from "@responsive-image/core";
import { Component, createSignal, For, onMount } from "solid-js";
//@ts-expect-error"Could not find a declaration file for module '../../node_modules/colorthief/dist/color-thief.mjs'."
import ColorThief from "../../node_modules/colorthief/dist/color-thief.mjs";
import { Solaxy, WattAFrame, XCharge } from "~/assets/images/applications";

type AppElementProps = {
  class: string;
  imgSrc: ImageData;
  href: string;
  name: string;
};

type AppDataType = {
  name: string;
  href: string;
  imgSrc: ImageData;
};

const AppsData: AppDataType[] = [
  {
    name: "XCharge",
    href: "https://xcharge.m3ter.ing/",
    imgSrc: XCharge,
  },
  {
    name: "Watt-A-Frame",
    href: "https://watt-a-frame.vercel.app/",
    imgSrc: WattAFrame,
  },
  {
    name: "Solaxy",
    href: "https://asset.m3ter.ing/",
    imgSrc: Solaxy,
  },
  {
    name: "XCharge",
    href: "https://xcharge.m3ter.ing/",
    imgSrc: XCharge,
  },
  {
    name: "Watt-A-Frame",
    href: "https://watt-a-frame.vercel.app/",
    imgSrc: WattAFrame,
  },
  {
    name: "Solaxy",
    href: "https://asset.m3ter.ing/",
    imgSrc: Solaxy,
  },
];

const AppsSection: Component = () => {
  return (
    <section class="activity-container mb-[100px] text-[20px] font-semibold">
      <For each={AppsData}>
        {(item, i) => (
          <AppElement
            name={item.name}
            imgSrc={item.imgSrc}
            href={item.href}
            class={`img-${i()}`}
          />
        )}
      </For>
    </section>
  );
};

export default AppsSection;

const AppElement: Component<AppElementProps> = (props) => {
  const [gradientColor, setGradientColor] = createSignal("transparent");
  const [_isLoaded, setIsLoaded] = createSignal(false);

  onMount(() => {
    if (props.imgSrc) {
      const colorThief = new ColorThief();
      const img = new Image();
      img.crossOrigin = "Anonymous";

      img.onload = () => {
        try {
          // Get dominant color
          const color = colorThief.getColor(img);
          setGradientColor(`rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.85)`);
          setIsLoaded(true);
        } catch (e) {
          console.error("Color extraction failed:", e);
          // Use fallback color if extraction fails
          setGradientColor("rgba(0, 0, 0, 0.5)");
          setIsLoaded(true);
        }
      };

      img.src = props.imgSrc.imageUrlFor(768) as string;
    } else {
      // No background image, use fallback
      setGradientColor("rgba(0, 0, 0, 0.5)");
      setIsLoaded(true);
    }
  });
  return (
    <A
      href={props.href}
      aria-label={`Open ${props.name}`}
      class={`${props.class} app-container`}
      target="_blank"
      style={{
        "background-image": `url(${props.imgSrc.imageUrlFor(768)})`,
        "background-size": "cover",
        "background-position": "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        class={`overlay`}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background: `linear-gradient(to bottom, transparent, ${gradientColor()})`,
          // opacity: isLoaded() ? "1" : "0",
          // transition: "opacity 0.3s ease",
        }}
      >
        <p>{props.name}</p>
      </div>
    </A>
  );
};
