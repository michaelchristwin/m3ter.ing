import { Title } from "@solidjs/meta";
import { Arkreen, SolarFoundation, SwitchElectric } from "~/assets/companies";
import SolarPunk3 from "~/assets/solarpunk3.webp";
import AppCard from "~/components/AppCard";
import Card from "~/components/CompanyCard";
// import M3terHeadBlink from "~/components/M3terHeadBlink";

function Index() {
  return (
    <div class={`space-y-[100px]`}>
      <Title>Home</Title>
      <section
        class={`w-full h-[94vh] bg-fixed bg-no-repeat bg-cover bg-center px-[90px]`}
        style={{
          "background-image": `url(${SolarPunk3})`,
        }}
      >
        <div class={`flex w-full h-full items-center space-x-[250px]`}>
          <div class={`lg:w-[500px] md:w-[400px] w-[300px] block`}>
            <p
              class={`bowlby-one-regular lg:text-[45px] md:text-[40px] text-[35px] text-orange-500`}
            >
              Measure Smarter, Not Harder
            </p>
            <p class={`text-[17px] font-[400] text-orange-500`}>
              Unlock the power of precise measurements and efficient operations.
            </p>
            <div class={`flex w-full h-[80px] items-center mt-[10px]`}>
              <button
                type="button"
                class={`h-[60px] transition-transform duration-200 hover:scale-105 active:scale-90 text-center rounded-full bg-orange-500 w-[200px] text-white text-[18px] font-semibold cursor-pointer active:opacity-[0.8]`}
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class={`relative py-[100px] px-[90px] w-full`}>
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
      <section class={`h-fit w-full px-[90px]`}>
        <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
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
  );
}

export default Index;
