import { Component, onCleanup, onMount } from "solid-js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageComponent from "./ImageComponent";
import "~/styles/scroll-marquee.css";

gsap.registerPlugin(ScrollTrigger);

type ScrollMarqueeProps = {
  scroller: HTMLElement;
};
const ScrollMarquee: Component<ScrollMarqueeProps> = (props) => {
  let section2Ref!: HTMLDivElement;
  let ctx: gsap.Context;

  onMount(() => {
    ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: props.scroller,
          trigger: section2Ref,
          invalidateOnRefresh: true,
          // markers: true,a
          start: "0% 0%",
          end: "120% 0%",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(
        ".images .right",
        {
          marginTop: "0",
          duration: 2.5,
        },
        0
      );
      tl.to(
        ".images .left",
        {
          marginTop: "150%",
          duration: 1,
        },
        0
      );
    }, section2Ref);
    ScrollTrigger.refresh();
  });

  onCleanup(() => {
    ctx.revert();
  });

  return (
    <div class="container wrapper">
      <div class="section_2" ref={(el) => (section2Ref = el)}>
        <div class="flexo">
          <div class="content space-y-2.5">
            <div>
              <h2 class="text-center font-semibold lg:text-[30px] md:text-[28px] text-[25px]">
                The Metering Hardware
              </h2>
              <p class="text-center text-base sm:text-lg font-medium mt-2">
                Maxwell 1.0.7
              </p>
            </div>
            <div class="w-full grid grid-cols-1 gap-7 h-fit">
              <div class="w-full space-y-3">
                <p>
                  Designed specifically to bridge the gap between distributed
                  energy resources (such as rooftop solar assets) and the web3.0
                  economy. Its data is crucial for accurate tracking,
                  verification, and billing of the energy transactions within
                  the protocol.
                </p>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="w-full space-y-3">
                  <h3 class="text-lg sm:text-xl font-bold">Security</h3>
                  <p>
                    Utilizes ED25519 elliptical curve digital signatures to
                    ensure data integrity. Keys are stored on a tamper-resistant
                    crypto chip that self-destructs if accessed externally.
                    These security measures prevent unauthorized access and
                    tampering, guaranteeing accurate and trustworthy data.
                  </p>
                </div>
                <div class="w-full space-y-3">
                  <h3 class="text-lg sm:text-xl font-bold">Network</h3>
                  <p>
                    Operates wirelessly via LoRaWAN (LongFi), a long-range,
                    low-power protocol designed for IoT with range up to 3 km.
                    Ideal for remote installations where traditional wireless
                    communication is limited or costly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="images" id="images">
            <div class="left">
              <ImageComponent
                class="img"
                alt="Meter Case 1"
                sizes="calc(50vw / 4)"
                imagePathName="/images/hardware/meter_case1"
              />

              <ImageComponent
                class="img"
                alt="Meter Case 2"
                sizes="calc(50vw / 4)"
                imagePathName="/images/hardware/meter_case2"
              />
              <ImageComponent
                class="img"
                alt="Board overview"
                sizes="calc(50vw / 4)"
                imagePathName="/images/hardware/board_overview"
              />
              <ImageComponent
                class="img"
                alt="Exterior Design"
                sizes="calc(50vw / 4)"
                imagePathName="/images/hardware/exterior_design"
              />
              <ImageComponent
                class="img"
                alt="PCB Design"
                sizes="calc(50vw / 4)"
                imagePathName="/images/hardware/pcb_design"
              />
            </div>
            <div class="right">
              <ImageComponent
                class="img"
                alt="PCB Design"
                sizes="calc(50vw / 4)"
                imagePathName="/images/hardware/pcb_design"
              />

              <ImageComponent
                class="img"
                alt="Exterior Design"
                sizes="calc(50vw / 4)"
                imagePathName="/images/hardware/exterior_design"
              />
              <ImageComponent
                class="img"
                alt="Board overview"
                sizes="calc(50vw / 4)"
                imagePathName="/images/hardware/board_overview"
              />
              <ImageComponent
                class="img"
                alt="Meter Case 2"
                sizes="calc(50vw / 4)"
                imagePathName="/images/hardware/meter_case2"
              />
              <ImageComponent
                class="img"
                alt="Meter Case 1"
                sizes="calc(50vw / 4)"
                imagePathName="/images/hardware/meter_case1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScrollMarquee;
