import { Title } from "@solidjs/meta";
import AnimatedCounter from "~/components/AnimatedCounter";
import AppCard from "~/components/AppCard";
import Carousel from "~/components/Carousel";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import styles from "~/styles/parallax.module.css";
import M3terHeadBlink from "~/components/M3terHeadBlink";
import MetricTop from "~/components/MetricTop";
import MetricBottom from "~/components/MetricBottom";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

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
        class={`space-y-[100px] relative z-1 w-full bg-gray-50 lg:rounded-t-[150px] md:rounded-t-[100px] rounded-t-[50px] lg:px-[90px] px-[40px]`}
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
              src={`${IMAGE_URL}/infra.webp`}
              alt="Energy Infrastructure design"
              class="object-cover w-full h-auto"
            />
          </div>
          <h4
            class={`text-center lg:text-[28px] md:text-[28px] text-[22px] font-[600] leading-relaxed`}
          >
            Energy Infrastructure Reimagined
          </h4>
          <p
            class={`text-[16px] text-neutral-500 text-center leading-relaxed mt-[10px]`}
          >
            Decentralised, Democratized and Solarpunk at its core
          </p>
        </section>
        <section class="w-full grid lg:grid-cols-2 grid-cols-1   lg:gap-[40px] gap-[30px]">
          <div class="relative w-full h-0 pb-[100%]">
            <img
              loading={`lazy`}
              src={`${IMAGE_URL}/ethcity.webp`}
              alt="ETH City"
              class="absolute inset-0 object-cover w-full h-full rounded-2xl"
            />
          </div>
          <div class="w-full h-auto">
            <div class="space-y-4 xl:text-[25px] lg:text-[24px] md:text-[23px] text-[20px]">
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
              <h3
                class={`text-center font-semibold lg:text-[30px] md:text-[28px] text-[25px]`}
              >
                Real Environmental Impact; Real Economic Value
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Top row: 2 cards */}
                <div class="bg-white rounded-lg shadow-sm lg:p-7 md:p-5 p-4 h-64 flex items-end text-center">
                  {/* First card content would go here */}
                  <div class={`block text-start space-y-[8px]`}>
                    <p class={`font-[600] text-[25px]`}>100% EVM compatible</p>
                    <p class={`text-neutral-500 text-[17px]`}>
                      Use the existing EVM ecosystem to your advantage.
                    </p>
                  </div>
                </div>

                <MetricTop image={`${IMAGE_URL}/metrics/panel.webp`}>
                  <div class={`block text-center space-y-[5px] w-full z-2`}>
                    <AnimatedCounter to={10000} />
                    <p class={`font-[600] text-[20px]`}>kWh</p>
                    <p class={`text-white text-[17px]`}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </MetricTop>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Bottom row: 3 cards */}
                <MetricBottom image={`${IMAGE_URL}/metrics/wind.webp`}>
                  <div class={`block text-center space-y-[5px] w-full z-2`}>
                    <AnimatedCounter to={4000} />
                    <p class={`font-[600] text-[20px]`}>
                      Tonnes of CO₂ prevented
                    </p>
                  </div>
                </MetricBottom>

                <MetricBottom image={`${IMAGE_URL}/metrics/revenue.webp`}>
                  <div class={`block text-center space-y-[5px] w-full z-2`}>
                    <AnimatedCounter to={30000} />
                    <p class={`font-[600] text-[20px]`}>Revenue generated</p>
                  </div>
                </MetricBottom>

                <MetricBottom image={`${IMAGE_URL}/metrics/ecovillages.webp`}>
                  <div class={`block text-center space-y-[5px] w-full z-2`}>
                    <AnimatedCounter to={6} />
                    <p class={`font-[600] text-[20px]`}>Ecovillages</p>
                  </div>
                </MetricBottom>
              </div>
            </div>
          </div>
        </section>
        <section class={`pb-[100px] h-fit w-full space-y-[70px]`}>
          <h3
            class={`text-center font-semibold lg:text-[30px] md:text-[28px] text-[25px]`}
          >
            Let's build your project next
          </h3>
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
        <section
          class={`w-full flex flex-wrap my-[100px] justify-center gap-[30px] items-center h-fit`}
        >
          <AppCard />
          <AppCard />
          <AppCard />
          <AppCard />
        </section>
        <section class="w-full py-16 md:py-20 lg:py-24 space-y-8 md:space-y-12 lg:space-y-16 px-4">
          <div>
            <h3 class="text-center font-semibold text-xl sm:text-2xl md:text-2xl lg:text-3xl">
              The Metering Hardware
            </h3>
            <p class="text-center text-base sm:text-lg font-medium mt-2">
              Maxwell 1.0.7
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-8">
            <div class="w-full h-auto">
              <img
                src={`${IMAGE_URL}/hardware/Switch_case_model_v13_1.webp`}
                alt="Hardware design model"
                loading="lazy"
                class="object-cover w-full h-full rounded"
              />
            </div>

            <div class="w-full grid grid-cols-1 gap-7 h-fit">
              <div class="w-full space-y-3">
                <p class="text-sm sm:text-base md:text-base lg:text-lg">
                  Designed specifically to bridge the gap between distributed
                  energy resources (such as rooftop solar assets) and the web3.0
                  economy. Its data is crucial for accurate tracking,
                  verification, and billing of the energy transactions within
                  the protocol.
                </p>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="w-full space-y-3">
                  <h4 class="text-lg sm:text-xl font-bold">Security</h4>
                  <p class="text-sm sm:text-base lg:text-lg">
                    Utilizes ED25519 elliptical curve digital signatures to
                    ensure data integrity. Keys are stored on a tamper-resistant
                    crypto chip that self-destructs if accessed externally.
                    These security measures prevent unauthorized access and
                    tampering, guaranteeing accurate and trustworthy data.
                  </p>
                </div>

                <div class="w-full space-y-3">
                  <h4 class="text-lg sm:text-xl font-bold">Network</h4>
                  <p class="text-sm sm:text-base lg:text-lg">
                    Operates wirelessly via LoRaWAN (LongFi), a long-range,
                    low-power protocol designed for IoT with range up to 3 km.
                    Ideal for remote installations where traditional wireless
                    communication is limited or costly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="w-full aspect-square">
              <img
                src={`${IMAGE_URL}/hardware/Switch_case_model_v13bvwd_1.webp`}
                loading="lazy"
                class="object-cover w-full h-full rounded"
                alt="Hardware design model 2"
              />
            </div>
            <div class="w-full aspect-square">
              <img
                src={`${IMAGE_URL}/hardware/output-onlinepngtools.webp`}
                loading="lazy"
                class="object-cover w-full h-full rounded"
                alt="Hardware design model 3"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Index;
