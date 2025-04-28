import {
  Arkreen,
  Helios,
  Powerledger,
  SolarFoundation,
  SwitchElectric,
  TAS,
  YourProject,
} from "~/assets/images/companies";

type Img = {
  sources: {
    [key: string]: string; // e.g. { webp: "...srcset..." }
  };
  img: {
    src: string;
    w: number;
    h: number;
  };
};
const companyLogos: { img: Img; name: string }[] = [
  { img: Helios, name: "Helios Refi" },
  { img: TAS, name: "TAS" },

  {
    img: SolarFoundation,
    name: "Solar Foundations",
  },
  { img: YourProject, name: "" },
  { img: SwitchElectric, name: "Switch Electric" },
  { img: Arkreen, name: "Arkeen" },
  {
    img: Powerledger,
    name: "Powerledger",
  },
];

const LogosCarousel: React.FC = () => {
  return (
    <div
      className={`grid sm:grid-cols-7 grid-cols-1 w-full sm:h-full h-screen card-grid`}
    >
      {companyLogos.map(({ img: logo, name }, i) => (
        <div
          key={i}
          className={`space-y-1 bg-[#faf9f6] shadow-[_-1rem_0_3rem_rgba(0,0,0,0.25)] p-3 lg:rounded-2xl rounded-xl`}
        >
          <div className="sm:w-full w-auto sm:aspect-[2.5/3] aspect-[5/1]  mx-auto flex justify-center items-center ">
            <picture>
              {Object.entries(logo.sources).map(([type, srcset]) => (
                <source key={type} type={`image/${type}`} srcSet={srcset} />
              ))}
              <img
                src={logo.img.src}
                width={logo.img.w}
                height={logo.img.h}
                alt={`Card ${i}`}
                className={`transition-all duration-300 ease-in-out object-contain`}
              />
            </picture>
          </div>
          <p className={`text-center`}>{name}</p>
        </div>
      ))}
    </div>
  );
};
export default LogosCarousel;

// const isVisible: React.CSSProperties = {
//   opacity: 1,
//   animationFillMode: "forwards",
//   animationName: "zoomIn",
//   animationDuration: "300ms",
//   animationTimingFunction: "ease-in-out",
//   willChange: "transform, opacity",
// };

// const isNotVisible: React.CSSProperties = {
//   opacity: 0,
//   transform: "scale(0.6)",
//   transition: "opacity 300ms ease-in-out, transform 300ms ease-in-out",
// };
