import { Title } from "@solidjs/meta";
import { Arkreen, SolarFoundation, SwitchElectric } from "~/assets/companies";
import AppCard from "~/components/AppCard";
import Card from "~/components/CompanyCard";
import Footer from "~/components/Footer";
// import M3terHeadBlink from "~/components/M3terHeadBlink";

function Index() {
  return (
    <div class={`h-[100%]`}>
      <Title>Home</Title>
      <section class={`relative flex justify-center items-end h-[96%] hero`}>
        <p
          class={`dynapuff font-[600] w-fit mx-auto text-white text-[clamp(60px,15vw,240px)] leading-[65%]`}
        >
          M3TERING
        </p>
      </section>

      <div
        class={`space-y-[100px] w-full bg-gray-50 lg:rounded-t-[150px] md:rounded-t-[100px] rounded-t-[50px]`}
      >
        <section class={`relative pb-[40px] px-[90px] w-full space-y-[90px]`}>
          <h1
            class={`text-center font-semibold text-[clamp(60px,15vw,150px)] caveat`}
          >
            Protocol V2
          </h1>
          <div class={`container h-fit w-full flex`}>
            <Card image={SolarFoundation} />
            <Card image={SwitchElectric} />
            <Card image={Arkreen} />
            <Card image={Arkreen} />
            <Card image={Arkreen} />
            <Card image={Arkreen} />
            <Card image={Arkreen} />
          </div>
        </section>
        <section
          class={`w-full flex flex-wrap justify-center gap-[30px] items-center max-h-screen px-[90px]`}
        >
          <AppCard />
          <AppCard />
          <AppCard />
          <AppCard />
        </section>
        <section class={`h-fit w-full px-[90px]`}>
          <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Top row: 2 cards */}
                <div class="bg-white rounded-lg shadow-sm p-7 h-64 flex items-end text-center">
                  {/* First card content would go here */}
                  <div class={`block text-start space-y-[8px]`}>
                    <p class={`font-[600] text-[25px]`}>100% EVM compatible</p>
                    <p class={`text-neutral-500 text-[17px]`}>
                      Use the existing EVM ecosystem to your advantage.
                    </p>
                  </div>
                </div>

                <div class="bg-white rounded-lg shadow-sm p-6 h-64 flex items-end text-center">
                  <div class={`block text-center space-y-[5px] w-full`}>
                    <p class={`font-extrabold text-[60px]`}>10,000</p>
                    <p class={`font-[600] text-[20px]`}>kWh</p>
                    <p class={`text-neutral-500 text-[17px]`}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Bottom row: 3 cards */}
                <div class="bg-white rounded-lg shadow-sm p-6 h-64 flex items-end text-center">
                  {/* Third card content would go here */}
                  <div class={`block text-center space-y-[5px] w-full`}>
                    <p class={`font-extrabold text-[60px]`}>4,000</p>
                    <p class={`font-[600] text-[20px]`}>
                      Tonnes of CO₂ prevented
                    </p>
                  </div>
                </div>

                <div class="bg-white rounded-lg shadow-sm p-6 h-64 flex items-end text-center">
                  <div class={`block text-center space-y-[5px] w-full`}>
                    <p class={`font-extrabold text-[60px]`}>$30,000</p>
                    <p class={`font-[600] text-[20px]`}>Revenue generated</p>
                  </div>
                </div>

                <div class="bg-white rounded-lg shadow-sm p-6 h-64 flex items-end text-center">
                  <div class={`block text-center space-y-[5px] w-full`}>
                    <p class={`font-extrabold text-[60px]`}>6</p>
                    <p class={`font-[600] text-[20px]`}>Ecovillages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <section class={`max-h-screen w-full flex items-center justify-end`}>
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
      </section> */}
      <Footer />
    </div>
  );
}

export default Index;
