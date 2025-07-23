import { useRef } from "react";
import { ETHCity } from "~/assets/images";
import { motion, useScroll, useTransform } from "motion/react";
import useIsMobile from "~/hooks/useIsMobile";

const Section2 = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "end end"],
  });
  const textContainerY = useTransform(scrollYProgress, [0, 1], ["0%", "-400%"]);
  const isMobile = useIsMobile();

  return (
    <div ref={wrapper} id="about" className="w-full relative bg-[#faf9f6]">
      {/* Main flex container */}
      <div className="md:flex block min-h-screen">
        {/* Left sticky component - Image */}
        <div className="md:w-1/2 w-full md:sticky top-0 relative h-screen flex items-center justify-center p-[50px] bg-[#faf9f6]">
          <picture className="z-20 relative">
            {Object.entries(ETHCity.sources).map(([type, srcset], i) => (
              <source
                type={`image/${type}`}
                srcSet={srcset}
                key={i.toString()}
              />
            ))}
            <img
              loading="lazy"
              decoding="async"
              src={ETHCity.img.src}
              width={ETHCity.img.w}
              height={ETHCity.img.h}
              alt="Ethereum City"
              className="transition-all duration-300 ease-in-out object-cover rounded-2xl z-20 relative max-w-full max-h-full"
            />
          </picture>
        </div>

        {/* Right scrollable component - Text content */}
        <div className="md:w-1/2 w-full bg-[#faf9f6]">
          <motion.div
            className="relative"
            style={{ y: !isMobile ? textContainerY : 0 }}
          >
            <div className="w-full h-[100vh] flex justify-center items-center p-[50px]">
              <motion.p
                className="sm:text-[30px] text-[20px] text-neutral-700 font-bold text1 text-start"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              >
                "Whether it's a neighborhood solar farm or a shared battery
                network, the M3tering Protocol enables the energy assets to be
                tokenized and transformed into liquid assets onchain that anyone
                can own, trade, and earn from permissionlessly"
              </motion.p>
            </div>

            <div className="w-full h-[100vh] flex justify-center items-center p-[50px]">
              <motion.p
                className="sm:text-[30px] text-[20px] text-neutral-700 font-bold text2 text-start"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              >
                "A Protocol for shifting energy infrastructure from centralized
                monopolies to a shared, open economy on Ethereum. But it's more
                than just infrastructure; it's a solarpunk movement to
                democratize both ownership and access to energy"
              </motion.p>
            </div>

            <div className="w-full h-[100vh] flex justify-center items-center p-[50px]">
              <motion.p
                className="sm:text-[30px] text-[20px] text-neutral-700 font-bold text5 text-start"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              >
                "It's about empowering local, sustainable energy resources, and
                enabling communities to choose how their power is produced ...
                <span className={"italic text-black"}>
                  It's literally and figuratively power to the people
                </span>
                "
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
