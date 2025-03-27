import { Title } from "@solidjs/meta";
import M3terGIF from "../assets/m3ters.gif";
import { Badge } from "~/components/ui/badge";

function App() {
  return (
    <>
      <Title>Home</Title>
      <div
        class={`w-full h-[95vh] p-[40px] flex items-center justify-center space-x-[250px] border-b`}
      >
        <div class={`lg:w-[500px] md:w-[400px] w-[300px] block`}>
          <p
            class={`bowlby-one-regular lg:text-[45px] md:text-[40px] text-[35px] text-orange-500`}
          >
            Measure Smarter, Not Harder
          </p>
          <p class={`text-[17px] font-[400] text-neutral-700`}>
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
        <div class={`w-fit block`}>
          <img src={M3terGIF} alt="M3ters" class={`w-[400px] h-[400px]`} />
        </div>
      </div>
      <div class={`h-[80vh] w-full block py-[70px]`}>
        <div class={`block w-[70px] mx-auto`}>
          <Badge round variant={`outline`} class={`text-[16px]`}>
            Applications
          </Badge>
        </div>
        <div class={`w-full flex items-center p-[20px] h-[200px]`}>
          <div class={`block lg:w-[400px] md:w-[350px] w-[300px]`}>
            <p class={`font-bold text-[50px] text-orange-500`}>XCharge</p>
            <p class={`font-[500] font-[400] text-neutral-700 text-[17px]`}>
              Purchase power using XDai
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
