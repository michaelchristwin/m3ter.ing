import { Component, onCleanup, onMount } from "solid-js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TextSectionProps = {
  scroller: HTMLElement;
};
const TextSection: Component<TextSectionProps> = (props) => {
  let wrapperRef!: HTMLDivElement;
  let ctx: gsap.Context;

  onMount(() => {
    ctx = gsap.context(() => {
      gsap.to(".frontend", {
        scrollTrigger: {
          trigger: ".landing",
          scroller: props.scroller,
          start: "center center",
          scrub: 0.5,
        },
        xPercent: 25,
      });

      gsap.to(".developer", {
        scrollTrigger: {
          trigger: ".landing",
          scroller: props.scroller,
          start: "center center",
          scrub: 0.5,
        },
        xPercent: -25,
      });

      gsap.to(".intro", {
        scrollTrigger: {
          trigger: ".intro",
          scroller: props.scroller,
          pin: true,
          start: "center center",
        },
      });

      gsap.to(".textL", {
        scrollTrigger: {
          trigger: ".textL",
          scroller: props.scroller,
          id: "textleft",
          start: "top center",
        },
        opacity: 1,
        duration: 1,
      });

      gsap.to(".textR", {
        scrollTrigger: {
          trigger: ".textR",
          scroller: props.scroller,
          id: "textright",
          start: "top 20%",
        },
        opacity: 1,
        duration: 1,
      });
    }, wrapperRef);
    ScrollTrigger.normalizeScroll();
  });

  onCleanup(() => {
    ctx.revert();
  });
  return (
    <div id="wrapper" ref={wrapperRef}>
      <div class="section landing">
        <div class="landing-text frontend font-extrabold text-[100px]">
          Frontend
        </div>
        <div class="landing-text developer font-extrabold text-[100px]">
          Developer
        </div>
      </div>

      <div class="section intro">
        <div class="background-text hello">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1418 483"
            fill="none"
          >
            <path
              d="M403.058 473.48V462.69L379.589 456.343C354.218 449.361 349.778 444.919 349.778 391.605V126.938C349.778 74.2589 354.218 69.1814 379.589 62.1998L403.058 55.8528V45.0631H210.869V55.8528L234.337 62.1998C259.709 69.1814 264.149 74.2589 264.149 126.938V230.393H59.9087V126.938C59.9087 74.2589 64.3487 69.1814 89.7202 62.1998L113.189 55.8528V45.0631H-79V55.8528L-55.5314 62.1998C-30.1599 69.1814 -25.7199 74.2589 -25.7199 126.938V391.605C-25.7199 444.919 -30.1599 449.361 -55.5314 456.343L-79 462.69V473.48H113.189V462.69L89.7202 456.343C64.3487 449.361 59.9087 444.919 59.9087 391.605V262.128H264.149V391.605C264.149 444.919 259.709 449.361 234.337 456.343L210.869 462.69V473.48H403.058Z"
              fill="#517664"
              fill-opacity="0.15"
            />
            <path
              d="M695.191 408.106L688.214 398.586C670.454 411.28 642.545 423.339 609.562 423.339C526.471 423.339 483.339 359.87 483.974 282.438H693.288C693.922 278.629 693.923 273.552 693.923 269.109C693.923 208.179 647.62 152.961 574.042 152.961C478.265 152.961 424.985 239.279 424.985 324.327C424.985 418.896 483.974 481.731 565.797 481.731C624.785 481.731 660.305 448.092 695.191 408.106ZM483.974 258.319C487.145 220.873 510.614 180.252 558.82 180.252C594.34 180.252 620.98 205.64 620.98 231.662C620.98 254.511 603.22 258.319 569.602 258.319H483.974Z"
              fill="#517664"
              fill-opacity="0.15"
            />
            <path
              d="M888.738 473.48V464.594L869.075 458.882C846.875 453.17 843.069 449.361 843.069 403.664V3.17345L839.263 0L720.652 15.2326V24.753L742.852 29.8305C765.686 34.2733 769.492 38.7162 769.492 84.4139V403.664C769.492 449.361 765.686 453.17 743.486 458.882L723.823 464.594V473.48H888.738Z"
              fill="#517664"
              fill-opacity="0.15"
            />
            <path
              d="M1071.86 473.48V464.594L1052.2 458.882C1030 453.17 1026.19 449.361 1026.19 403.664V3.17345L1022.39 0L903.777 15.2326V24.753L925.977 29.8305C948.812 34.2733 952.617 38.7162 952.617 84.4139V403.664C952.617 449.361 948.812 453.17 926.611 458.882L906.949 464.594V473.48H1071.86Z"
              fill="#517664"
              fill-opacity="0.15"
            />
            <path
              d="M1418 310.999C1418 218.968 1362.18 152.326 1260.7 152.326C1154.77 152.326 1095.15 232.297 1095.15 324.962C1095.15 420.8 1153.5 483 1251.18 483C1351.4 483 1418 408.741 1418 310.999ZM1337.45 346.541C1337.45 404.298 1319.69 459.516 1263.87 459.516C1196 459.516 1175.07 343.368 1175.07 289.419C1175.07 231.028 1192.19 176.444 1245.47 176.444C1315.25 176.444 1337.45 293.227 1337.45 346.541Z"
              fill="#517664"
              fill-opacity="0.15"
            />
          </svg>
        </div>
        <div class="intro-text">
          <h3 class="top-[35%] left-0 textL">M3tering Protocol</h3>
          <h3 class="top-[65%] right-0 textR">
            Certified Salesforce Commerce Cloud developer with a passion for art
            and design.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TextSection;
