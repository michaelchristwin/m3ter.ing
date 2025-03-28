import { Title } from "@solidjs/meta";
import { Arkreen, SolarFoundation, SwitchElectric } from "~/assets/companies";
import SolarPunk3 from "~/assets/solarpunk3.webp";
import Card from "~/components/Card";

function Index() {
  return (
    <div
      class={`w-full h-[95vh] px-[90px] bg-fixed bg-no-repeat bg-cover bg-center`}
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
      <div class={`relative mt-[150px]`}>
        <div class={`container`}>
          <Card image={SolarFoundation} />
          <Card image={SwitchElectric} />
          <Card image={Arkreen} />
          <Card image={Arkreen} />
          <Card image={Arkreen} />
          <Card image={Arkreen} />
          <Card image={Arkreen} />
          <Card image={Arkreen} />
        </div>
      </div>
    </div>
  );
}

export default Index;
