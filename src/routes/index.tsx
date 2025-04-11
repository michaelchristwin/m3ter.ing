import { Title } from "@solidjs/meta";
import { lazy } from "solid-js";
import BlurHashImage from "~/components/BlurHashImage";
import styles from "~/styles/parallax.module.css";
const Navbar = lazy(() => import("~/components/Navbar"));
const MetricBottom = lazy(() => import("~/components/MetricBottom"));
const MetricTop = lazy(() => import("~/components/MetricTop"));
const AnimatedCounter = lazy(() => import("~/components/AnimatedCounter"));
const M3terHeadBlink = lazy(() => import("~/components/M3terHeadBlink"));
const Carousel = lazy(() => import("~/components/Carousel"));
const Footer = lazy(() => import("~/components/Footer"));
const HardwareSection = lazy(() => import("~/components/HardwareSection"));
import blurHashes from "~/blurhashes.json";
import AppsSection from "~/components/AppsSection";

function Index() {
  return (
    <div class={`${styles.index} bg-gray-50`}>
      <Navbar />
      <Title>Home</Title>
      <section class={styles.parallax_wrapper}>
        <p
          class={`jello-stone font-[600] w-fit mx-auto text-white text-[clamp(60px,15vw,240px)] leading-[50%]`}
        >
          M3tering
        </p>
      </section>

      <div
        class={`space-y-[100px] relative z-1 w-full bg-gray-50 lg:rounded-t-[150px] md:rounded-t-[100px] rounded-t-[50px] lg:px-[90px] px-[40px] xl:text-[25px] lg:text-[24px] md:text-[23px] text-[20px]`}
      >
        <section class={`mb-[100px] w-full mx-auto`}>
          <h1
            class={`text-center font-semibold text-[clamp(60px,15vw,150px)] caveat`}
          >
            Protocol V2
          </h1>
          <div class="relative max-w-full w-full mx-auto mt-[90px] shadow-xl">
            <img
              loading={`lazy`}
              src={`/images/infra.webp`}
              alt="Energy Infrastructure design"
              class="object-cover w-full h-auto"
            />
          </div>

          <p
            class={`text-center lg:text-[28px] md:text-[28px] text-[22px] font-[600] leading-relaxed`}
          >
            Energy Infrastructure Reimagined
          </p>
          <p
            class={`text-[16px] text-neutral-500 text-center leading-relaxed mt-[10px]`}
          >
            Decentralised, Democratized and Solarpunk at its core
          </p>
        </section>
        <section class="w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-[40px] gap-[30px]">
          <BlurHashImage
            src={`/images/ethcity.webp`}
            alt="ETH City"
            class={` w-full h-0`}
            imageClass={`rounded-2xl`}
            hash={blurHashes["ethcity.webp"]}
            aspectRatio={1 / 1}
          />
          <div class="w-full h-auto">
            <div class="space-y-4">
              <p>
                The M3tering Protocol is shifting energy infrastructure from
                centralized monopolies to a shared, open economy on Ethereum.
              </p>
              <p>
                Whether it's a neighborhood solar farm or a shared battery
                network, the protocol enables the energy assets to be tokenized
                and transformed into liquid assets onchain that anyone can own,
                trade, and earn from permissionlessly.
              </p>
              <p>
                Using the protocol, communities choose how their power is
                produced, allowing them to accelerate local clean energy
                adoption.
              </p>
              <p>
                This is more than infrastructure; it's a solarpunk movement to
                democratize both ownership and access to energy.
              </p>
              <p>
                It's literally and figuratively{" "}
                <i class="font-bold">power to the people</i>.
              </p>
            </div>
          </div>
        </section>

        <section class={`h-fit w-full mb-[100px]`}>
          <div class="h-fit py-12">
            <div class="space-y-[50px]">
              <h2
                class={`text-center font-semibold lg:text-[30px] md:text-[28px] text-[25px]`}
              >
                Real Environmental Impact; Real Economic Value
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Top row: 2 cards */}
                <div class="bg-white rounded-lg shadow-sm h-64 flex items-center justify-center text-center">
                  <div class="w-full h-full">
                    <video
                      src="/images/m3terhead.webm"
                      autoplay
                      muted
                      loop
                      playsinline
                      class="w-full h-full object-contain"
                    ></video>
                  </div>
                </div>

                <MetricTop image={`/images/metrics/panel.webp`}>
                  <div
                    class={`block text-center space-y-[5px] w-full z-2 text-white`}
                  >
                    <AnimatedCounter to={10000} />
                    <p class={`font-[600] text-[20px]`}>
                      kWh of electricity generated
                    </p>
                  </div>
                </MetricTop>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Bottom row: 3 cards */}
                <MetricBottom image={`/images/metrics/wind.webp`}>
                  <div
                    class={`block text-center space-y-[5px] w-full z-2 text-white`}
                  >
                    <AnimatedCounter to={4000} />
                    <p class={`font-[600] text-[20px]`}>
                      Tonnes of CO₂ prevented
                    </p>
                  </div>
                </MetricBottom>

                <MetricBottom image={`/images/metrics/revenue.webp`}>
                  <div
                    class={`block text-center space-y-[5px] w-full z-2 text-white`}
                  >
                    <AnimatedCounter to={30000} />
                    <p class={`font-[600] text-[20px]`}>Revenue generated</p>
                  </div>
                </MetricBottom>

                <MetricBottom image={`/images/metrics/ecovillages.webp`}>
                  <div
                    class={`block text-center space-y-[5px] w-full z-2 text-white`}
                  >
                    <AnimatedCounter to={6} />
                    <p class={`font-[600] text-[20px]`}>Ecovillages</p>
                  </div>
                </MetricBottom>
              </div>
            </div>
          </div>
        </section>
        <section class={`pb-[100px] h-fit w-full space-y-[70px]`}>
          <h2
            class={`text-center font-semibold lg:text-[30px] md:text-[28px] text-[25px]`}
          >
            Let's build your project next
          </h2>
          <Carousel />
        </section>
        <section class={`w-full flex justify-center items-center`}>
          <div class="users-color-container">
            <span class="item" style="--i: 1"></span>
            <M3terHeadBlink
              backgroundColor="#fe7419"
              index={2}
              displayTime={10}
              hiddenTime={5}
            />
            <span class="item" style="--i: 3"></span>
            <M3terHeadBlink
              displayTime={8}
              hiddenTime={4}
              backgroundColor="#8071A8"
              index={4}
            />
            <M3terHeadBlink
              backgroundColor="#fad058"
              displayTime={6}
              hiddenTime={3}
              index={10}
            />

            <span class="item" style="--i: 11"></span>
            <M3terHeadBlink
              backgroundColor="#edafb0"
              index={12}
              displayTime={7}
              hiddenTime={7}
            />

            <span class="item" style="--i: 5"></span>

            <span class="item" style="--i: 9"></span>
            <M3terHeadBlink
              backgroundColor="#71c266"
              index={8}
              displayTime={9}
              hiddenTime={4}
            />
            <span class="item" style="--i: 7"></span>
            <M3terHeadBlink
              backgroundColor="#6bd6eb"
              index={6}
              displayTime={5}
              hiddenTime={5}
            />
          </div>
        </section>

        {/** Hardware section */}
        <HardwareSection />
        <AppsSection />
      </div>

      <Footer />
    </div>
  );
}

export default Index;
