import type { Route } from "./+types/animations";
import { useFadeInOnScroll } from "~/hooks/useFadeInOnScroll";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { AnimeBg, Island } from "~/assets/images";
import {
  Panel,
  WindTurbine,
  Revenue,
  EcoVillages,
} from "~/assets/images/metrics";
import Counter from "~/components/Counter";
import Metric from "~/components/Metric";
import LogosCarousel from "~/components/LogosCarousel";
import Applications from "~/components/Applications";

interface ParticleData {
  element: HTMLDivElement;
  startX: number;
  startY: number;
  animDuration: number;
  lastFrameId?: number;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Animations" },
    { name: "description", content: "Welcome to Animations testing ground" },
  ];
}

function Animations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesContainer = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<ParticleData[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Create animations linked to scroll progress
  const textLeft = useTransform(scrollYProgress, [0, 0.1], ["0%", "-250%"]);
  const textRight = useTransform(scrollYProgress, [0, 0.1], ["0%", "250%"]);
  const scale = useTransform(scrollYProgress, [0, 0.25], ["0%", "300%"]);

  const oneX = useTransform(scrollYProgress, [0.35, 0.5], ["0%", "-110%"]);
  const twoY = useTransform(scrollYProgress, [0.5, 0.75], ["0%", "-110%"]);
  const threeX = useTransform(scrollYProgress, [0.75, 1], ["0%", "110%"]);

  useFadeInOnScroll();
  const animateParticle = (particleData: ParticleData): void => {
    const animate = (): void => {
      const now = Date.now();
      const xOffset =
        Math.sin((now / particleData.animDuration) * Math.PI * 2) * 10;
      const yOffset =
        Math.cos((now / particleData.animDuration) * Math.PI * 2) * 10;

      particleData.element.style.left = `${particleData.startX + xOffset}%`;
      particleData.element.style.top = `${particleData.startY + yOffset}%`;

      particleData.lastFrameId = requestAnimationFrame(animate);
    };

    particleData.lastFrameId = requestAnimationFrame(animate);
  };
  useEffect(() => {
    if (!particlesContainer.current) return;

    // Clear any existing particles
    if (particlesRef.current.length > 0) {
      particlesRef.current.forEach((particle) => {
        if (particle.lastFrameId) {
          cancelAnimationFrame(particle.lastFrameId);
        }
      });

      if (particlesContainer.current) {
        particlesContainer.current.innerHTML = "";
      }

      particlesRef.current = [];
    }

    // Create new particles
    for (let i = 0; i < 100; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;

      // Random size
      const size = Math.random() * 3 + 1;

      // Set styles
      particle.style.position = "absolute";
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
      particle.style.borderRadius = "50%";
      particle.style.opacity = `${Math.random() * 0.5 + 0.3}`;

      particlesContainer.current.appendChild(particle);

      // Store particle data for animation and cleanup
      const particleData: ParticleData = {
        element: particle,
        startX: posX,
        startY: posY,
        animDuration: Math.random() * 20000 + 10000, // Random duration between 10-30 seconds
      };

      particlesRef.current.push(particleData);

      // Start animation
      animateParticle(particleData);
    }

    // Cleanup function
    return () => {
      particlesRef.current.forEach((particle) => {
        if (particle.lastFrameId) {
          cancelAnimationFrame(particle.lastFrameId);
        }
      });

      if (particlesContainer.current) {
        particlesContainer.current.innerHTML = "";
      }
    };
  }, []);
  return (
    <div ref={containerRef} className="relative h-[400vh]">
      {/* Static Section */}
      <div
        className="h-screen flex justify-center sm:justify-start items-center px-4"
        style={{
          background: "linear-gradient(135deg, #0a0a1a 0%, #1a1a4a 100%)",
        }}
      >
        <div
          ref={particlesContainer}
          className="particles absolute top-0 left-0 w-full h-full"
          id="particles"
        ></div>
        <div className="w-[90%] sm:w-[50%] text-white">
          <motion.div className={`w-full`} style={{ x: textLeft }}>
            <h1 className="text-2xl text-start md:text-3xl font-bold mb-4">
              <span className="inline-block transition-all duration-700 ease-out playwrite-hr">
                Introducing
              </span>
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span
                className="inline-block transition-all duration-700 ease-out june-expt-variable"
                style={{
                  fontVariationSettings: ` 'STYL' 60`,
                }}
              >
                M3tering
              </span>
            </h1>
          </motion.div>
          <motion.div style={{ x: textRight }}>
            <h1 className="text-6xl text-end md:text-8xl font-bold">
              <span
                className="inline-block transition-all duration-700 ease-out june-expt-variable"
                style={{
                  fontVariationSettings: ` 'STYL' 60`,
                }}
              >
                Protocol
              </span>
            </h1>
            <h1 className="text-2xl text-end md:text-3xl font-bold">
              <span className="inline-block transition-all duration-700 ease-out playwrite-hr">
                V2
              </span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Pinned Scroll Animation */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[#faf9f6] flex justify-center items-center">
        <div
          className={`flex flex-col items-center justify-between bg-[#faf9f6] absolute w-full h-screen`}
        >
          <Applications />
          <footer
            className={`w-full h-[100px] flex justify-between bg-neutral-800 text-white p-4`}
          >
            <p className="text-[20px] font-semibold">M3tering</p>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </footer>
        </div>

        {/* Layers */}
        <motion.div
          style={{ x: oneX, backgroundImage: `url(${AnimeBg.img.src})` }}
          className="absolute inset-0 z-10 flex justify-center items-center bg-no-repeat bg-cover bg-center"
        >
          <motion.div
            className="transition-all duration-700 ease-out flex items-center justify-center"
            style={{ scale: scale }}
          >
            {/* Placeholder logo/image */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center">
              <picture>
                {Object.entries(Island.sources).map(([type, srcset]) => (
                  <source key={type} type={`image/${type}`} srcSet={srcset} />
                ))}
                <img
                  src={Island.img.src}
                  width={Island.img.w}
                  height={Island.img.h}
                  alt={`Island`}
                  className={`max-w-full max-h-full transition-all duration-300 ease-in-out object-contain`}
                />
              </picture>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: twoY }}
          className="absolute inset-0 bg-[#faf9f6] px-4 z-9 flex justify-center items-center"
        >
          <div className="w-full transition-all duration-700 ease-out">
            <section className={`h-fit w-full mb-[100px]`}>
              <div className="h-fit py-12">
                <div className="space-y-[50px]">
                  <h2
                    className={`text-center font-semibold lg:text-[30px] md:text-[28px] text-[25px] fade-in-block`}
                  >
                    Real Environmental Impact; Real Economic Value
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Top row: 2 cards */}
                    <div className="bg-white rounded-lg shadow-sm h-64 flex items-center justify-center text-center">
                      <div className="w-full h-full">
                        <video
                          src="/videos/m3terhead.webm"
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-contain"
                        ></video>
                      </div>
                    </div>

                    <Metric image={Panel.img.src}>
                      <div
                        className={`block text-center space-y-[5px] w-full z-2 text-white`}
                      >
                        <Counter from={0} to={10000} />
                        <p className={`font-[600] text-[20px] fade-in-block`}>
                          kWh of electricity generated
                        </p>
                      </div>
                    </Metric>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Bottom row: 3 cards */}
                    <Metric image={WindTurbine.img.src}>
                      <div
                        className={`block text-center space-y-[5px] w-full z-2 text-white`}
                      >
                        <Counter from={0} to={4000} />
                        <p className={`font-[600] text-[20px] fade-in-block`}>
                          Tonnes of CO₂ prevented
                        </p>
                      </div>
                    </Metric>

                    <Metric image={Revenue.img.src}>
                      <div
                        className={`block text-center space-y-[5px] w-full z-2 text-white`}
                      >
                        <Counter from={0} to={30000} prefix="$" />
                        <p className={`font-[600] text-[20px] fade-in-block`}>
                          Revenue generated
                        </p>
                      </div>
                    </Metric>

                    <Metric image={EcoVillages.img.src}>
                      <div
                        className={`block text-center space-y-[5px] w-full z-2 text-white`}
                      >
                        <Counter from={0} to={6} />
                        <p className={`font-[600] text-[20px] fade-in-block`}>
                          Ecovillages
                        </p>
                      </div>
                    </Metric>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>

        <motion.div
          style={{ x: threeX }}
          className="absolute inset-0 bg-[#faf9f6] z-8 flex justify-center items-center"
        >
          <div className="w-full space-y-6 transition-all duration-700 ease-out px-4">
            <h2
              className={`text-center font-semibold lg:text-[30px] md:text-[28px] text-[25px] fade-in-block`}
            >
              Let's build your project next
            </h2>
            <LogosCarousel />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Animations;
