import { Title } from "@solidjs/meta";
import AnimatedCounter from "~/components/AnimatedCounter";
import AppCard from "~/components/AppCard";
import Carousel from "~/components/Carousel";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import styles from "~/styles/parallax.module.css";
import { ETHCity, Infra } from "~/assets/images";
import M3terHeadBlink from "~/components/M3terHeadBlink";

function Index() {
  return (
    <div class={styles.index}>
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
        class={`space-y-[100px] relative z-1 w-full bg-gray-50 lg:rounded-t-[150px] md:rounded-t-[100px] rounded-t-[50px]`}
      >
        <section
          class={`mb-[100px] lg:px-[90px] md:px-[90px] px-[40px] w-full mx-auto`}
        >
          <h1
            class={`text-center font-semibold text-[clamp(60px,15vw,150px)] caveat`}
          >
            Protocol V2
          </h1>
          <div class="relative lg:max-w-[700px] max-w-full w-full mx-auto mt-[90px] shadow-xl">
            <img
              src={Infra}
              alt="Flywheel effect"
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
        <section class="w-full grid lg:grid-cols-2 grid-cols-1 px-[40px] lg:px-[90px] lg:gap-[40px] gap-[30px]">
          <div class="relative w-full h-0 pb-[100%]">
            <img
              src={ETHCity}
              alt="ETH City"
              class="absolute inset-0 object-cover w-full h-full rounded-2xl"
            />
          </div>
          <div class="w-full h-auto">
            <div class="space-y-4 lg:text-[28px] text-[23px]">
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

        <section
          class={`h-fit w-full lg:px-[90px] md:px-[90px] px-[40px] mb-[200px]`}
        >
          <div class="h-fit py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto space-y-[50px]">
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

                <div class="bg-white rounded-lg shadow-sm lg:p-6 md:p-5 p-4 h-64 flex items-end text-center">
                  <div class={`block text-center space-y-[5px] w-full`}>
                    <AnimatedCounter to={10000} />
                    <p class={`font-[600] text-[20px]`}>kWh</p>
                    <p class={`text-neutral-500 text-[17px]`}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Bottom row: 3 cards */}
                <div class="bg-white rounded-lg shadow-sm lg:p-6 md:p-5 p-4 h-64 flex items-end text-center">
                  {/* Third card content would go here */}
                  <div class={`block text-center space-y-[5px] w-full`}>
                    <AnimatedCounter to={4000} />
                    <p class={`font-[600] text-[20px]`}>
                      Tonnes of CO₂ prevented
                    </p>
                  </div>
                </div>

                <div class="bg-white rounded-lg shadow-sm lg:p-6 md:p-5 p-4 h-64 flex items-end text-center">
                  <div class={`block text-center space-y-[5px] w-full`}>
                    <AnimatedCounter to={30000} />
                    <p class={`font-[600] text-[20px]`}>Revenue generated</p>
                  </div>
                </div>

                <div class="bg-white rounded-lg shadow-sm p-6 h-64 flex items-end text-center">
                  <div class={`block text-center space-y-[5px] w-full`}>
                    <AnimatedCounter to={6} />
                    <p class={`font-[600] text-[20px]`}>Ecovillages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          class={`pb-[40px] lg:px-[90px] md:px-[90px] px-[40px] w-[90%] mx-auto space-y-[70px]`}
        >
          <h3
            class={`text-center font-semibold lg:text-[30px] md:text-[28px] text-[25px]`}
          >
            Let's build your project next
          </h3>
          <Carousel />
        </section>
        <section
          class={`w-full min-h-[40vh] lg:px-[90px] md:px-[90px] px-[40px] flex justify-center items-center`}
        >
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
          class={`w-full flex flex-wrap py-[100px] justify-center gap-[30px] items-center h-fit lg:px-[90px] md:px-[90px] px-[40px]`}
        >
          <AppCard />
          <AppCard />
          <AppCard />
          <AppCard />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Index;
