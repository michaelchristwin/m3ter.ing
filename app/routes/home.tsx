import { useRef } from "react";
import type { Route } from "./+types/home";
import { ChevronDown } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiFarcaster } from "react-icons/si";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "motion/react";
import { transformationStringFromObject } from "@cloudinary/url-gen/index";

import Metric from "~/components/Metric";
import AppCard from "~/components/AppCard";
import Counter from "~/components/Counter";
import useIsMobile from "~/hooks/useIsMobile";
import Particles from "~/components/Particles";
import LogosCarousel from "~/components/LogosCarousel";
import Image, { createImageURL } from "~/components/Image";
import { useLoaderData } from "react-router";

type AppDataType = {
  title: string;
  url: string;
  image: string;
  alt: string;
  description: string;
};

const appsdata: AppDataType[] = [
  {
    title: "XCharge",
    url: "https://xcharge.m3ter.ing/",
    image: "xcharge_iuefgv",
    alt: "Xcharge",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui rem, corrupti quasi sunt exercitationem?",
  },
  {
    title: "Watt-A-Frame",
    url: "https://watt-a-frame.vercel.app/",
    image: "watt-a-frame_afwi2t",
    alt: "Watt-A-Frame",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui rem, corrupti quasi sunt exercitationem?",
  },
  {
    title: "Solaxy",
    url: "https://asset.m3ter.ing/",
    image: "solaxy_rylpqd",
    alt: "Watt-A-Frame",

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui rem, corrupti quasi sunt exercitationem?",
  },
];

const ogImage = "https://m3ter.ing/images/og_image2.png";
const url = "https://m3ter.ing/";

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "M3tering Protocol",
    },
    {
      name: "description",
      content:
        "M3tering Protocol is the decentralized protocol accelerating solar energy adoption and sustainable development across Africa through innovative solutions.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    { property: "og:site_name", content: "M3tering Protocol" },
    { property: "og:type", content: "website" },
    {
      property: "og:title",
      content: "M3tering Protocol",
    },
    {
      property: "og:description",
      content:
        "The decentralized protocol that's driving solar energy adoption in Africa.",
    },
    {
      property: "og:image",
      content: ogImage,
    },
    {
      property: "og:url",
      content: url,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:domain",
      content: "m3ter.ing",
    },
    { property: "twitter:url", content: url },
    { name: "twitter:title", content: "M3tering Protocol" },

    {
      name: "twitter:description",
      content:
        "The decentralized protocol that's driving solar energy adoption in Africa.",
    },
    { name: "twitter:image", content: ogImage },
    {
      name: "google-site-verification",
      content: "KdoyUSdDkzaeKXZMy3Ir0aRWGHj_L5RY2-MO88PnyFY",
    },
  ];
};

export const loader = ({}: Route.LoaderArgs) => {
  const panel_img_url = createImageURL({ image_name: "panel_yrmnmz" });
  const windturbine_img_url = createImageURL({ image_name: "wind_dq7spa" });
  const revenue_img_url = createImageURL({ image_name: "revenue_vdqj1r" });
  const ecovillages_img_url = createImageURL({
    image_name: "ecovillages_txd4xa",
  });
  const solarRow_img_url = createImageURL({ image_name: "solar-row_aayzj2" });

  return {
    panel_img_url,
    windturbine_img_url,
    revenue_img_url,
    ecovillages_img_url,
    solarRow_img_url,
  };
};

export default function Home() {
  const {
    panel_img_url,
    windturbine_img_url,
    revenue_img_url,
    ecovillages_img_url,
    solarRow_img_url,
  } = useLoaderData<typeof loader>();

  const container = useRef<HTMLElement>(null);

  const hero = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: hero,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  const scrollToAbout = () => {
    const about = document.getElementById("about");
    if (!about) return;
    about.scrollIntoView({ behavior: "smooth" });
  };

  const wrapper = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "end end"],
  });
  const textContainerY = useTransform(scrollYProgress, [0, 1], ["0%", "-400%"]);
  const isMobile = useIsMobile();

  const companies_section = useRef<HTMLDivElement>(null);

  return (
    <main className="home" ref={container}>
      <div ref={hero} className={"w-screen h-screen relative"}>
        <Particles />
        <motion.div
          className="absolute top-0 left-0 inset-0 w-full h-full"
          style={{ y }}
        >
          <Image
            image_name="solarbg-ghiblify_fyc6ac"
            className="object-cover w-full h-full object-center"
          />
        </motion.div>
        <div className="flex w-full items-center justify-between text-white absolute bottom-[30px] sm:px-[40px] px-[20px] z-10">
          <div>
            <h1 className="text-2xl text-start md:text-3xl font-bold mb-4 playwrite-hr block">
              Introducing
            </h1>
            <h1
              className="text-5xl md:text-8xl font-bold mb-4 block june-expt-variable"
              style={{
                fontVariationSettings: "'STYL' 60",
              }}
            >
              M3tering Protocol
            </h1>
            <h1 className="text-2xl text-end md:text-3xl font-bold inline-block playwrite-hr">
              V2
            </h1>
          </div>
          <motion.button
            aria-label="Scroll Down"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={scrollToAbout}
            className="sm:w-[70px] sm:h-[70px] h-[40px] w-[40px] flex justify-center items-center rounded-full bg-white animate-bounce hover:animate-none cursor-pointer z-20"
          >
            <ChevronDown className="text-black" size={40} />
          </motion.button>
        </div>
      </div>

      <div ref={wrapper} id="about" className="w-full relative bg-[#faf9f6]">
        {/* Main flex container */}
        <div className="md:flex block min-h-screen">
          {/* Left sticky component - Image */}
          <div className="md:w-1/2 w-full md:sticky top-0 relative h-screen flex items-center justify-center p-[50px] bg-[#faf9f6]">
            <Image
              image_name="ethcity_ax29ol"
              transformation={transformationStringFromObject([{ radius: 24 }])}
            />
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
                  tokenized and transformed into liquid assets onchain that
                  anyone can own, trade, and earn from permissionlessly"
                </motion.p>
              </div>

              <div className="w-full h-[100vh] flex justify-center items-center p-[50px]">
                <motion.p
                  className="sm:text-[30px] text-[20px] text-neutral-700 font-bold text2 text-start"
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeIn" }}
                >
                  "A Protocol for shifting energy infrastructure from
                  centralized monopolies to a shared, open economy on Ethereum.
                  But it's more than just infrastructure; it's a solarpunk
                  movement to democratize both ownership and access to energy"
                </motion.p>
              </div>

              <div className="w-full h-[100vh] flex justify-center items-center p-[50px]">
                <motion.p
                  className="sm:text-[30px] text-[20px] text-neutral-700 font-bold text5 text-start"
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeIn" }}
                >
                  "It's about empowering local, sustainable energy resources,
                  and enabling communities to choose how their power is produced
                  ...
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

      <div className="two section sm:h-[100dvh] h-fit flex justify-center items-center p-[50px]">
        <section className={"h-full w-full bg-[#faf9f6] text-black"}>
          <div className="h-full py-12">
            <div className="space-y-[50px]">
              <h2
                className={
                  "text-center font-semibold lg:text-[30px] md:text-[28px] text-[25px] fade-in-block"
                }
              >
                Real Impact; Real Value
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Top row: 2 cards */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-white rounded-lg shadow-sm h-64 flex items-center justify-center text-center"
                >
                  <div className="w-full h-full">
                    <video
                      src="/videos/m3terhead.webm"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>

                <Metric image={panel_img_url} x={100}>
                  <div
                    className={
                      "block text-center space-y-[5px] w-full z-2 text-white"
                    }
                  >
                    <Counter max={10000} />
                    <p className={"font-[600] text-[20px] fade-in-block"}>
                      kWh of electricity generated
                    </p>
                  </div>
                </Metric>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Metric image={windturbine_img_url} x={-100}>
                  <div
                    className={
                      "block text-center space-y-[5px] w-full z-2 text-white"
                    }
                  >
                    <Counter max={4000} />
                    <p className={"font-[600] text-[20px] fade-in-block"}>
                      Tonnes of CO₂ prevented
                    </p>
                  </div>
                </Metric>

                <Metric image={revenue_img_url} y={50}>
                  <div
                    className={
                      "block text-center space-y-[5px] w-full z-2 text-white"
                    }
                  >
                    <Counter max={30000} prefix="$" />
                    <p className={"font-[600] text-[20px] fade-in-block"}>
                      Revenue generated
                    </p>
                  </div>
                </Metric>

                <Metric image={ecovillages_img_url} x={100}>
                  <div
                    className={
                      "block text-center space-y-[5px] w-full z-2 text-white"
                    }
                  >
                    <Counter max={6} />
                    <p className={"font-[600] text-[20px] fade-in-block"}>
                      Ecovillages
                    </p>
                  </div>
                </Metric>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        className="three section sm:h-[100dvh] h-fit flex justify-center items-center px-4"
        ref={companies_section}
      >
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-full h-fit sm:space-y-8 space-y-4 transition-all duration-700 ease-out px-4">
            <h2 className="text-center text-black font-semibold lg:text-[30px] md:text-[28px] text-[20px]">
              Let's build your project next
            </h2>
            <LogosCarousel />
          </div>
        </div>
      </div>

      <div className={"mt-[50px] md:mt-0"}>
        <p className={"text-center md:text-[25px] text-[20px] font-bold"}>
          Our Applications
        </p>
        <div
          className={
            "w-full grid md:grid-cols-3 grid-cols-1 px-[50px] gap-[20px] md:my-[30px] my-[20px]"
          }
        >
          {appsdata.map(({ title, image, url, description, alt }) => (
            <AppCard
              key={title}
              title={title}
              image={image}
              url={url}
              description={description}
              alt={alt}
            />
          ))}
        </div>
      </div>

      <footer
        className="w-full relative text-white bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${solarRow_img_url})`,
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Main content container with glassmorphism */}
        <div className="relative z-10 glassmorph lg:p-[90px] p-[40px] shadow-lg border border-white border-opacity-20">
          <div className="lg:flex md:flex block justify-between">
            {/* Logo and company info */}
            <div className="mb-8 lg:mb-0 md:mb-0 lg:max-w-xs md:max-w-xs">
              <h2 className="text-xl font-[500] text-white mb-4 jello-stone">
                M3tering
              </h2>
              <p className="text-gray-200 mb-4">
                Creating beautiful sustainable experiences since 2025.
              </p>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://discord.gg/afFvdhW4"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-gray-300 transition"
                  aria-label="Facebook"
                >
                  <FaDiscord size={24} />
                </a>
                <a
                  href="https://x.com/M3tering"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-gray-300 transition"
                  aria-label="X (formerly Twitter)"
                >
                  <FaXTwitter size={24} />
                </a>
                <a
                  href="https://farcaster.xyz/~/channel/m3ter-heads"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-gray-300 transition"
                  aria-label="Farcaster"
                >
                  <SiFarcaster size={24} />
                </a>
                <a
                  href="https://github.com/M3tering"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-gray-300 transition"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>

            {/* Navigation links grid - keeping your existing structure */}
            <div className="grid grid-cols-2 gap-[40px]">
              <div>
                <p className="font-bold mb-4 text-[20px]">Applications</p>
                <ul className="space-y-2">
                  <li className="hover:text-gray-300 transition">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://xcharge.m3ter.ing/"
                    >
                      XCharge
                    </a>
                  </li>
                  <li className="hover:text-gray-300 transition">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://watt-a-frame.vercel.app/"
                    >
                      Watt-A-Frame
                    </a>
                  </li>
                  <li className="hover:text-gray-300 transition">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://asset.m3ter.ing/"
                    >
                      Solaxy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold mb-4 text-[20px]">Docs</p>
                <ul className="space-y-2">
                  <li className="hover:text-gray-300 transition">
                    <a
                      href="https://m3tering.whynotswitch.com/token-economics/mint-and-distribution"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Mint & DIstribution
                    </a>
                  </li>
                  <li className="hover:text-gray-300 transition">
                    <a
                      href="https://m3tering.whynotswitch.com/smart-contracts/audits/secure3-audit-contest"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Audit
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="h-px bg-white bg-opacity-20 my-8" />
          <div className="text-center text-gray-200">
            <p>&copy; {new Date().getFullYear()} M3tering</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
