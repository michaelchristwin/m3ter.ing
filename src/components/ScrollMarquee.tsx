import { Component, onCleanup, onMount } from "solid-js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "~/styles/scroll-marquee.css";
// import { hardwareimages } from "~/assets/images/hardware";
// import { ResponsiveImage } from "@responsive-image/solid";

const ScrollMarquee: Component = () => {
  let section2Ref!: HTMLDivElement;
  let ctx: gsap.Context;

  onMount(() => {
    ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section2Ref,
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

          duration: 1,
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
    });
    ScrollTrigger.refresh();
  });

  onCleanup(() => {
    ctx.revert();
  });

  return (
    // <section class="w-full my-[100px]">
    //   <div
    //     class="section_2 sm:h-[100vh] h-fit"
    //     ref={(el) => (section2Ref = el)}
    //   >
    //     <div class="marquee-container justify-between">
    //       <div class="w-[45%] space-y-2.5">
    //         <div>
    //           <h2 class="text-center font-semibold lg:text-[30px] md:text-[28px] text-[25px]">
    //             The Metering Hardware
    //           </h2>
    //           <p class="text-center text-base sm:text-lg font-medium mt-2">
    //             Maxwell 1.0.7
    //           </p>
    //         </div>
    //         <div class="w-full grid grid-cols-1 gap-7 h-fit">
    //           <div class="w-full space-y-3">
    //             <p>
    //               Designed specifically to bridge the gap between distributed
    //               energy resources (such as rooftop solar assets) and the web3.0
    //               economy. Its data is crucial for accurate tracking,
    //               verification, and billing of the energy transactions within
    //               the protocol.
    //             </p>
    //           </div>

    //           <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    //             <div class="w-full space-y-3">
    //               <h3 class="text-lg sm:text-xl font-bold">Security</h3>
    //               <p>
    //                 Utilizes ED25519 elliptical curve digital signatures to
    //                 ensure data integrity. Keys are stored on a tamper-resistant
    //                 crypto chip that self-destructs if accessed externally.
    //                 These security measures prevent unauthorized access and
    //                 tampering, guaranteeing accurate and trustworthy data.
    //               </p>
    //             </div>
    //             <div class="w-full space-y-3">
    //               <h3 class="text-lg sm:text-xl font-bold">Network</h3>
    //               <p>
    //                 Operates wirelessly via LoRaWAN (LongFi), a long-range,
    //                 low-power protocol designed for IoT with range up to 3 km.
    //                 Ideal for remote installations where traditional wireless
    //                 communication is limited or costly.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="images w-[45%] justify-between" id="images">
    //         <div class="left">
    //           <For each={hardwareimages}>
    //             {(img, i) => (
    //               <ResponsiveImage
    //                 class="rounded-[16px]"
    //                 alt={`Hardware image ${i()} left`}
    //                 sizes="calc(50vw / 4)"
    //                 src={img}
    //               />
    //             )}
    //           </For>
    //         </div>
    //         {/*Right*/}
    //         <div class="right">
    //           <For each={[...hardwareimages].reverse()}>
    //             {(img, i) => (
    //               <ResponsiveImage
    //                 class="rounded-[16px]"
    //                 alt={`Hardware image ${i()} right`}
    //                 sizes="calc(50vw / 4)"
    //                 src={img}
    //               />
    //             )}
    //           </For>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div class="container wrapper">
      <div class="section_1"></div>
      <div class="section_2" ref={section2Ref}>
        <div class="cont-flex">
          <div class="content">
            <h1>Photography art</h1>
            <p>
              Photography is the art, application, and practice of creating
              images by recording light, either electronically by means of an
              image sensor, or chemically by means of a light-sensitive material
              such as photographic film.
            </p>
          </div>
          <div class="images">
            <div class="left">
              <div class="img"></div>
              <div class="img"></div>
              <div class="img"></div>
              <div class="img"></div>
              <div class="img"></div>
            </div>
            <div class="right">
              <div class="img"></div>
              <div class="img"></div>
              <div class="img"></div>
              <div class="img"></div>
              <div class="img"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="section_3"></div>
    </div>
  );
};
export default ScrollMarquee;
