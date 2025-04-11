import { Component, For, createSignal } from "solid-js";
import ProgressiveImage from "./ProgressiveImage";

type DesignDataType = {
  image: string;
  alt: string;
};

const designData: DesignDataType[] = [
  {
    image: "/meter_case1",
    alt: "Switch Meter Case 1",
  },
  { image: "/meter_case2", alt: "Switch Meter Case 2" },
  { image: "/board_overview", alt: "Board Overview" },
  { image: "/exterior_design", alt: "Exterior Design" },
  {
    image: "/pcb_design",
    alt: "PCB Design",
  },
];

const HardwareSection: Component<{}> = () => {
  const [selectedImageIndex, setSelectedImageIndex] = createSignal(0);

  const selectedImage = () => designData[selectedImageIndex()];

  return (
    <section class="w-full py-16 md:py-20 lg:py-24 space-y-8 md:space-y-12 lg:space-y-16 px-4">
      <div>
        <h2 class="text-center font-semibold lg:text-[30px] md:text-[28px] text-[25px]">
          The Metering Hardware
        </h2>
        <p class="text-center text-base sm:text-lg font-medium mt-2">
          Maxwell 1.0.7
        </p>
      </div>

      {/* Gallery Section */}
      <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-8">
        {/* Main Featured Image */}
        <div class={`w-full space-y-5 h-full`}>
          <div class="w-full h-auto aspect-square bg-white rounded shadow-md overflow-hidden">
            <ProgressiveImage
              src={`/images/hardware${selectedImage().image}.webp`}
              alt={selectedImage().alt}
              class="w-full aspect-square"
              placeholder={`/lazy${selectedImage().image}-small.webp`}
            />
          </div>
          <div class="w-full">
            <div class="flex lg:gap-4 gap-2 pb-2">
              <For each={designData}>
                {(item, index) => (
                  <button
                    onClick={() => setSelectedImageIndex(index())}
                    class="min-w-13 focus:outline-none"
                    aria-label={`View ${item.alt}`}
                  >
                    <div
                      class={`lg:w-24 lg:h-24 md:h-20 md:w-20 h-13 w-13 rounded overflow-hidden border-2 transition-all ${
                        index() === selectedImageIndex()
                          ? "border-blue-500 shadow-md"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <ProgressiveImage
                        src={`/images/hardware${item.image}.webp`}
                        alt={item.alt}
                        class="w-full h-full object-cover"
                        placeholder={`/lazy${item.image}-small.webp`}
                      />
                    </div>
                  </button>
                )}
              </For>
            </div>
          </div>
        </div>

        {/* Product Info Section */}
        <div class="w-full grid grid-cols-1 gap-7 h-fit">
          <div class="w-full space-y-3">
            <p>
              Designed specifically to bridge the gap between distributed energy
              resources (such as rooftop solar assets) and the web3.0 economy.
              Its data is crucial for accurate tracking, verification, and
              billing of the energy transactions within the protocol.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="w-full space-y-3">
              <h3 class="text-lg sm:text-xl font-bold">Security</h3>
              <p>
                Utilizes ED25519 elliptical curve digital signatures to ensure
                data integrity. Keys are stored on a tamper-resistant crypto
                chip that self-destructs if accessed externally. These security
                measures prevent unauthorized access and tampering, guaranteeing
                accurate and trustworthy data.
              </p>
            </div>
            <div class="w-full space-y-3">
              <h3 class="text-lg sm:text-xl font-bold">Network</h3>
              <p>
                Operates wirelessly via LoRaWAN (LongFi), a long-range,
                low-power protocol designed for IoT with range up to 3 km. Ideal
                for remote installations where traditional wireless
                communication is limited or costly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardwareSection;
