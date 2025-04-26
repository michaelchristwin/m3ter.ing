import type { Route } from "./+types/home";
import React, { useEffect } from "react";

import Navbar from "~/components/Navbar";
import "~/styles/parallax.css";
import Footer from "~/components/Footer";
import LogosCarousel from "~/components/LogosCarousel";
import Metric from "~/components/Metric";
import Counter from "~/components/Counter";
import { ETHCity, Infrastructure } from "~/assets/images";
import {
  EcoVillages,
  Panel,
  Revenue,
  WindTurbine,
} from "~/assets/images/metrics";
import Applications from "~/components/Applications";
import { useFadeInOnScroll } from "~/hooks/useFadeInOnScroll";
// import TextAnimation from "~/components/TextAnimation";
// import CircleAnimation from "~/components/CircleAnimation";
// import HorizontalScroll from "~/components/HorizontalScroll";
import M3terheads from "~/components/M3terheads";
import Marquee from "~/components/Marquee";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to the M3tering Protocol" },
  ];
}

export default function Home() {
  useFadeInOnScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallax = document.getElementById("parallax_bg");
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="index" className="bg-gray-50">
      <Navbar />
      <div className={`hero`}>
        <div className={`parallax_bg`} id="parallax_bg"></div>
        <p
          className={`jello-stone font-[600] w-fit mx-auto text-white text-[clamp(60px,15vw,240px)] leading-[50%] fade-in-block`}
        >
          M3tering
        </p>
      </div>

      <div
        className={`space-y-[100px] relative z-1 w-full bg-gray-50 lg:rounded-t-[150px] md:rounded-t-[100px] rounded-t-[50px] lg:px-[90px] px-[40px] xl:text-[25px] lg:text-[24px] md:text-[23px] text-[20px]`}
      >
        <section className={`mb-[100px] w-full mx-auto`}>
          <h1
            className={`text-center font-semibold text-[clamp(60px,15vw,150px)] caveat fade-in-block`}
          >
            Protocol V2
          </h1>
          <picture>
            {Object.entries(Infrastructure.sources).map(([type, srcset]) => (
              <source key={type} type={`image/${type}`} srcSet={srcset} />
            ))}
            <img
              src={Infrastructure.img.src}
              width={Infrastructure.img.w}
              height={Infrastructure.img.h}
              alt="Energy infrastructure design"
              sizes={"100w"}
              className="w-full"
            />
          </picture>

          <p
            className={`text-center lg:text-[28px] md:text-[28px] text-[22px] font-[600] leading-relaxed fade-in-block`}
          >
            Energy Infrastructure Reimagined
          </p>
          <p
            className={`text-[16px] text-neutral-500 text-center leading-relaxed mt-[10px] fade-in-block`}
          >
            Decentralised, Democratized and Solarpunk at its core
          </p>
        </section>

        <section className="w-full grid sm:grid-cols-2 grid-cols-1 lg:gap-[40px] gap-[30px]">
          <picture>
            {Object.entries(ETHCity.sources).map(([type, srcset]) => (
              <source key={type} type={`image/${type}`} srcSet={srcset} />
            ))}
            <img
              src={ETHCity.img.src}
              height={ETHCity.img.h}
              width={ETHCity.img.w}
              alt="ETHCity"
              sizes="(min-width: 640px) 50vw, 100vw"
              className="rounded-[1rem] w-full"
            />
          </picture>

          <div className="w-full h-auto">
            <div className="space-y-4">
              <p className="fade-in-block">
                The M3tering Protocol is shifting energy infrastructure from
                centralized monopolies to a shared, open economy on Ethereum.
              </p>
              <p className="fade-in-block">
                Whether it's a neighborhood solar farm or a shared battery
                network, the protocol enables the energy assets to be tokenized
                and transformed into liquid assets onchain that anyone can own,
                trade, and earn from permissionlessly.
              </p>
              <p className="fade-in-block">
                Using the protocol, communities choose how their power is
                produced, allowing them to accelerate local clean energy
                adoption.
              </p>
              <p className="fade-in-block">
                This is more than infrastructure; it's a solarpunk movement to
                democratize both ownership and access to energy.
              </p>
              <p className="fade-in-block">
                It's literally and figuratively{" "}
                <i className="font-bold">power to the people</i>.
              </p>
            </div>
          </div>
        </section>

        <section className={`h-fit w-full mb-[100px]`}>
          <div className="h-fit py-12">
            <div className="space-y-[50px]">
              <h2
                className={`text-center font-semibold lg:text-[30px] md:text-[28px] text-[25px] fade-in-block`}
              >
                Real Environmental Impact; Real Economic Value
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Top row: 2 cards */}
                <div className="bg-white rounded-lg shadow-sm h-64 flex items-center justify-center text-center">
                  <div className="w-full h-full">
                    <video
                      src="/videos/m3terhead.webm"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-contain"
                    ></video>
                  </div>
                </div>

                <Metric image={Panel.img.src}>
                  <div
                    className={`block text-center space-y-[5px] w-full z-2 text-white`}
                  >
                    <Counter from={0} to={10000} />
                    <p className={`font-[600] text-[20px]`}>
                      kWh of electricity generated
                    </p>
                  </div>
                </Metric>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Bottom row: 3 cards */}
                <Metric image={WindTurbine.img.src}>
                  <div
                    className={`block text-center space-y-[5px] w-full z-2 text-white`}
                  >
                    <Counter from={0} to={4000} />
                    <p className={`font-[600] text-[20px]`}>
                      Tonnes of CO₂ prevented
                    </p>
                  </div>
                </Metric>

                <Metric image={Revenue.img.src}>
                  <div
                    className={`block text-center space-y-[5px] w-full z-2 text-white`}
                  >
                    <Counter from={0} to={30000} prefix="$" />
                    <p className={`font-[600] text-[20px]`}>
                      Revenue generated
                    </p>
                  </div>
                </Metric>

                <Metric image={EcoVillages.img.src}>
                  <div
                    className={`block text-center space-y-[5px] w-full z-2 text-white`}
                  >
                    <Counter from={0} to={6} />
                    <p className={`font-[600] text-[20px]`}>Ecovillages</p>
                  </div>
                </Metric>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`mb-[100px] sm:h-[400px] h-fit w-full space-y-[70px]`}
        >
          <h2
            className={`text-center font-semibold lg:text-[30px] md:text-[28px] text-[25px] fade-in-block`}
          >
            Let's build your project next
          </h2>

          <LogosCarousel />
        </section>
        <section className={`w-full flex justify-center items-center`}>
          <div className="users-color-container">
            <span
              className="item"
              style={{ "--i": 1 } as React.CSSProperties}
            ></span>
            <M3terheads
              backgroundColor="#fe7419"
              index={2}
              displayTime={10}
              hiddenTime={5}
            />
            <span
              className="item"
              style={{ "--i": 3 } as React.CSSProperties}
            ></span>
            <M3terheads
              displayTime={8}
              hiddenTime={4}
              backgroundColor="#8071A8"
              index={4}
            />
            <M3terheads
              backgroundColor="#fad058"
              displayTime={6}
              hiddenTime={3}
              index={10}
            />

            <span
              className="item"
              style={{ "--i": 11 } as React.CSSProperties}
            ></span>
            <M3terheads
              backgroundColor="#edafb0"
              index={12}
              displayTime={7}
              hiddenTime={7}
            />

            <span
              className="item"
              style={{ "--i": 5 } as React.CSSProperties}
            ></span>

            <span
              className="item"
              style={{ "--i": 9 } as React.CSSProperties}
            ></span>
            <M3terheads
              backgroundColor="#71c266"
              index={8}
              displayTime={9}
              hiddenTime={4}
            />
            <span
              className="item"
              style={{ "--i": 7 } as React.CSSProperties}
            ></span>
            <M3terheads
              backgroundColor="#6bd6eb"
              index={6}
              displayTime={5}
              hiddenTime={5}
            />
          </div>
        </section>

        {/** Hardware section */}
        {/* <HardwareSection /> */}
        <Applications />
        {/* <ScrollMarquee /> */}
        <Marquee />
        {/* <TextAnimation />
        <CircleAnimation />
        <HorizontalScroll /> */}
      </div>

      <Footer />
    </div>
  );
}
