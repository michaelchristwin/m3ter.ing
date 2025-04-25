import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { companyicons } from "~/assets/images/companies";

const LogosCarousel: React.FC = () => {
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const wrapper = useRef<HTMLDivElement>(null);

  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardRefs.current[index] = el;
    }
  };
  useGSAP(
    () => {
      const elements = cardRefs.current;
      gsap.from(elements, {
        scale: 0.6,
        opacity: 0,
        duration: 2,
        ease: "power3.out",

        stagger: 0.1,
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: wrapper }
  );

  return (
    <div
      className={`grid sm:grid-cols-7 grid-cols-1 w-full sm:h-full h-[100vh] card-grid`}
      ref={wrapper}
    >
      {companyicons.map((logo, i) => (
        <div
          key={i}
          ref={(el) => setCardRef(el, i)}
          className="sm:w-full w-[220px] mx-auto h-auto sm:aspect-[2.5/3] aspect-[3/1.5] flex justify-center items-center p-3 lg:rounded-2xl rounded-xl bg-[#faf9f6]"
          style={{
            boxShadow: "-1rem 0 3rem rgb(0 0 0 / 0.25)",
          }}
        >
          <picture>
            {Object.entries(logo.sources).map(([type, srcset]) => (
              <source key={type} type={`image/${type}`} srcSet={srcset} />
            ))}
            <img
              src={logo.img.src}
              width={logo.img.w}
              height={logo.img.h}
              alt={`Card ${i}`}
              className={`max-w-full max-h-full transition-all duration-300 ease-in-out object-contain`}
            />
          </picture>
        </div>
      ))}
    </div>
  );
};
export default LogosCarousel;
