import { motion, type Variants } from "motion/react";
import { Link } from "react-router";
import { Fragment } from "react/jsx-runtime";
import Image from "./Image";

const companies = [
  { name: "Helios", logo: "helios_bihsea" },
  { name: "Alliance Power", logo: "alliance_power_generation_zue6ge" },
  { name: "Solar Foundation", logo: "solar-foundation_uyaybq" },
  { name: "Your Project", logo: "project_tfve9t" },
  { name: "Switch Electric", logo: "switch-electric_c3saeo" },
  { name: "Arkreen", logo: "arkreen_nrbgmb" },
  { name: "TAS", logo: "tas_u6s82a" },
];

const LogosCarousel: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={"grid sm:grid-cols-7 grid-cols-1 w-full h-fit card-grid"}
      variants={container}
      initial={"hidden"}
      whileInView={"show"}
    >
      {companies.map(({ logo, name }, i) => {
        const { scale, zIndex } = getStyle(i);
        const hoverStyle = name === "Your Project" ? { scale: 1.2 } : {};
        const tapStyle = name === "Your Project" ? { scale: 1 } : {};
        const content = (
          <motion.div
            key={logo}
            variants={{
              hidden: { opacity: 0, y: 50, scale },
              show: { opacity: 1, y: 0, scale },
            }}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.5, ease: "easeIn" }}
            style={{ zIndex }}
            whileHover={hoverStyle}
            whileTap={tapStyle}
            className={`md:w-full w-[180px] min-h-[180px] shadow-[_-1rem_0_3rem_rgba(0,0,0,0.25)] mx-auto sm:aspect-[2.5/3] aspect-[5/1] flex justify-center items-center p-3 lg:rounded-2xl rounded-xl bg-[#faf9f6] relative group ${
              name === "Your Project" && "cursor-pointer"
            }`}
          >
            {name !== "Your Project" && (
              <div className="absolute inset-0 top-0 left-0 h-full w-full rounded-xl bg-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold text-center px-4">
                  {name}
                </h3>
              </div>
            )}

            <Image image_name={logo} className="object-cover" alt={name} />
          </motion.div>
        );
        return name === "Your Project" ? (
          <Link
            to="https://form.typeform.com/to/d58WsifL"
            target="_blank"
            key={name}
            aria-label="M3tering Protocol interest form"
            rel="noopener noreferrer"
          >
            {content}
          </Link>
        ) : (
          <Fragment key={name}>{content}</Fragment>
        );
      })}
    </motion.div>
  );
};

export default LogosCarousel;

const getStyle = (i: number) => {
  switch (i) {
    case 3:
      return { scale: 1.14, zIndex: 3 };
    case 2:
    case 4:
      return { scale: 1.08, zIndex: 2 };
    case 1:
    case 5:
      return { scale: 1.05, zIndex: 1 };
    default:
      return { scale: 1, zIndex: 0 };
  }
};
