import { useRef } from "react";

import "./marquee.css";
import { hardwareimages } from "~/assets/images/hardware";

const ScrollMarqueeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full my-[100px]" ref={containerRef}>
      <div className="section_2 sm:h-[100vh] h-fit">
        <div className="marquee-container justify-between flex w-full">
          <div className="w-[45%] space-y-2.5">
            <div>
              <h2 className="text-center font-semibold lg:text-[30px] md:text-[28px] text-[25px] fade-in-block">
                The Metering Hardware
              </h2>
              <p className="text-center text-base sm:text-lg font-medium mt-2 fade-in-block">
                Maxwell 1.0.7
              </p>
            </div>
            <div className="w-full grid grid-cols-1 gap-7 h-fit">
              <div className="w-full space-y-3">
                <p className="fade-in-block">
                  Designed specifically to bridge the gap between distributed
                  energy resources (such as rooftop solar assets) and the web3.0
                  economy. Its data is crucial for accurate tracking,
                  verification, and billing of the energy transactions within
                  the protocol.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="w-full space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold fade-in-block">
                    Security
                  </h3>
                  <p className="fade-in-block">
                    Utilizes ED25519 elliptical curve digital signatures to
                    ensure data integrity. Keys are stored on a tamper-resistant
                    crypto chip that self-destructs if accessed externally.
                    These security measures prevent unauthorized access and
                    tampering, guaranteeing accurate and trustworthy data.
                  </p>
                </div>
                <div className="w-full space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold">Network</h3>
                  <p className="fade-in-block">
                    Operates wirelessly via LoRaWAN (LongFi), a long-range,
                    low-power protocol designed for IoT with range up to 3 km.
                    Ideal for remote installations where traditional wireless
                    communication is limited or costly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="images w-[45%] justify-between" id="images">
            <div className="left">
              {hardwareimages.map((img, i) => (
                <picture key={i}>
                  {Object.entries(img.sources).map(([type, srcset]) => (
                    <source key={type} type={`image/${type}`} srcSet={srcset} />
                  ))}
                  <img
                    src={img.img.src}
                    height={img.img.h}
                    width={img.img.w}
                    alt={`Hardware image ${i} left`}
                    sizes="calc(50vw / 4)"
                    className={`rounded-2xl`}
                  />
                </picture>
              ))}
            </div>
            {/*Right*/}
            <div className="right">
              {[...hardwareimages].reverse().map((img, i) => (
                <picture key={i}>
                  {Object.entries(img.sources).map(([type, srcset]) => (
                    <source key={type} type={`image/${type}`} srcSet={srcset} />
                  ))}
                  <img
                    src={img.img.src}
                    height={img.img.h}
                    width={img.img.w}
                    alt={`Hardware image ${i} right`}
                    sizes="calc(50vw / 4)"
                    className={`rounded-2xl`}
                  />
                </picture>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollMarqueeSection;
