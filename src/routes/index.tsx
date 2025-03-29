import { Title } from "@solidjs/meta";
import { Arkreen, SolarFoundation, SwitchElectric } from "~/assets/companies";
import SolarPunk3 from "~/assets/solarpunk3.webp";
import AppCard from "~/components/AppCard";
import Card from "~/components/CompanyCard";
import M3terHeadBlink from "~/components/M3terHeadBlink";

function Index() {
  return (
    <div
      class={`w-full h-[95vh] px-[90px] bg-fixed bg-no-repeat bg-cover bg-center space-y-[100px]`}
      style={{
        "background-image": `url(${SolarPunk3})`,
      }}
    >
      <Title>Home</Title>
      <div class={`flex w-full h-full items-center space-x-[250px] border-b`}>
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
              class={`h-[60px] transition-transform duration-200 hover:scale-105 active:scale-90 text-center rounded-full bg-orange-500 w-[200px] text-white text-[18px] font-semibold cursor-pointer hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500`}
            >
              Join
            </button>
          </div>
        </div>
      </div>
      <section class={`relative py-[100px]`}>
        <div class={`container h-[300px] w-full flex`}>
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
        class={`w-full flex flex-wrap justify-center gap-[30px] items-center max-h-[60vh]`}
      >
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
      </section>
      <section class={`h-[80vh] w-full flex items-center justify-end`}>
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
    </div>
  );
}

export default Index;
