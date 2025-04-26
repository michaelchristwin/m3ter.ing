import { useRef, useEffect, useState } from "react";
import "~/components/ScrollMarquee/marquee.css";
import { hardwareimages } from "~/assets/images/hardware";

const Marquee = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [leftMargin, setLeftMargin] = useState("0%");
  const [rightMargin, setRightMargin] = useState("100%");

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const scrollY = window.scrollY;
      const offsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // scroll progress between 0 (start) and 1 (end)
      const start = offsetTop;
      const end = offsetTop + sectionHeight * 1.2; // 120% like GSAP
      const progress = Math.min(
        Math.max((scrollY - start) / (end - start), 0),
        1
      );

      // Left moves from 0% → 150%, Right moves from 100% → 0%
      const newLeftMargin = `${progress * 150}%`;
      const newRightMargin = `${(1 - progress) * 100}%`;

      setLeftMargin(newLeftMargin);
      setRightMargin(newRightMargin);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full my-[100px] relative h-[250vh]" ref={sectionRef}>
      <div className="sticky top-0 h-screen flex items-center section_2">
        <div className="marquee-container justify-between flex w-full">
          {/* TEXT */}
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

          {/* IMAGES */}
          <div className="images w-[45%] justify-between" id="images">
            <div
              className="left transition-all duration-300"
              style={{ marginTop: leftMargin }}
            >
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
                    className="rounded-2xl"
                  />
                </picture>
              ))}
            </div>
            <div
              className="right transition-all duration-300"
              style={{ marginTop: rightMargin }}
            >
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
                    className="rounded-2xl"
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

export default Marquee;
