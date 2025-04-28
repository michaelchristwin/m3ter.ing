import { useEffect, useRef, useState } from "react";
import { AnimeBg, Island } from "~/assets/images";
import Applications from "./Applications";
import LogosCarousel from "./LogosCarousel";
import {
  EcoVillages,
  Panel,
  Revenue,
  WindTurbine,
} from "~/assets/images/metrics";
import Counter from "./Counter";
import Metric from "./Metric";

const HeroScrollAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animatingToSection, setAnimatingToSection] = useState<number | null>(
    null
  );
  const [activeSection, setActiveSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("none");
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSections = 6;
  const animationRef = useRef<number | null>(null);
  const lastScrollTop = useRef(0);
  const lastScrollTime = useRef(Date.now());

  useEffect(() => {
    // Calculate total height for scrolling
    const totalHeight = window.innerHeight * 5; // Extra space for scroll tracking
    if (containerRef.current) {
      containerRef.current.style.height = `${totalHeight}px`;
    }

    // Handle scroll events
    const handleScroll = () => {
      // If currently animating, don't process new scroll events
      if (isAnimating) return;

      const now = Date.now();
      const scrollTop = window.scrollY;
      const totalHeight = window.innerHeight * 5;

      // Calculate raw scroll progress
      const newProgress = Math.min(1, scrollTop / totalHeight);
      setScrollProgress(newProgress);

      // Determine scroll direction with improved detection
      const isScrollingDown = scrollTop > lastScrollTop.current;
      const timeDelta = now - lastScrollTime.current;

      // Only update direction if there's significant movement or time has passed
      if (Math.abs(scrollTop - lastScrollTop.current) > 5 || timeDelta > 200) {
        setScrollDirection(isScrollingDown ? "down" : "up");
        lastScrollTime.current = now;
      }

      lastScrollTop.current = scrollTop;

      // Calculate current section and progress within it
      const sectionProgress = newProgress * totalSections;
      const currentSection = Math.floor(sectionProgress);
      const progressWithinSection = sectionProgress - currentSection;

      // Define different thresholds for forward/backward scrolling
      const forwardThreshold = 0.25; // Unchanged from before
      // REDUCED from 0.75 to make it easier to trigger backwards

      // Check for transition triggers
      if (!isAnimating) {
        if (
          isScrollingDown &&
          progressWithinSection > forwardThreshold &&
          activeSection < totalSections - 1
        ) {
          // Forward transition
          triggerAnimation(activeSection + 1);
        } else if (!isScrollingDown && activeSection > 0) {
          // Backward transition - SIMPLIFIED logic
          // If we detect meaningful upward scroll anywhere in the section, trigger backward movement
          triggerAnimation(activeSection - 1);
        }
      }
    };

    // Helper function to start animations
    const triggerAnimation = (targetSection: number) => {
      if (targetSection >= 0 && targetSection < totalSections) {
        setAnimatingToSection(targetSection);
        setIsAnimating(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [activeSection, isAnimating, totalSections]);

  // Animation logic for smooth transitions
  useEffect(() => {
    if (animatingToSection !== null && isAnimating) {
      let startTime: number;
      const startScroll = window.scrollY;
      const totalHeight = window.innerHeight * 5;
      const duration = 800; // Animation duration

      // Calculate target scroll position
      const targetProgress = animatingToSection / totalSections;
      const targetScroll = targetProgress * totalHeight;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for natural motion
        const easedProgress = 0.5 - Math.cos(progress * Math.PI) / 2;

        // Calculate new scroll position
        const newScrollY =
          startScroll + (targetScroll - startScroll) * easedProgress;

        // Update scroll position
        window.scrollTo(0, newScrollY);

        // Update section animations based on progress
        const newScrollProgress = newScrollY / totalHeight;
        setScrollProgress(newScrollProgress);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          // Animation complete - ensure we're exactly at target
          window.scrollTo(0, targetScroll);
          setActiveSection(animatingToSection);
          setAnimatingToSection(null);
          setIsAnimating(false);

          // Small delay to prevent immediate re-triggering
          setTimeout(() => {
            lastScrollTop.current = targetScroll;
          }, 100); // Increased from 50ms to give more time before accepting new scroll events
        }
      };

      animationRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [animatingToSection, isAnimating, totalSections]);

  // Calculate section-specific progress (0 to 1 within section)
  const getSectionProgress = (sectionIndex: number) => {
    const sectionSize = 1 / totalSections;
    const sectionStart = sectionIndex * sectionSize;
    const progressWithinSection = (scrollProgress - sectionStart) / sectionSize;
    return Math.max(0, Math.min(1, progressWithinSection));
  };

  // Hero text animations
  const calculateWord1Style = () => {
    const progress = getSectionProgress(0);
    return {
      transform: `translateX(${-progress * 100}px)`,
      opacity: 1 - progress,
    };
  };

  const calculateWord2Style = () => {
    const progress = getSectionProgress(0);
    return {
      transform: `translateX(${progress * 100}px)`,
      opacity: 1 - progress,
    };
  };

  // Image zoom animation
  const calculateImageTransition = () => {
    const progress = getSectionProgress(1);
    const zoomFactor = 1 + progress * 9;
    const fadeAmount = Math.max(0, 1 - progress * 1.5);

    return {
      transform: `scale(${zoomFactor})`,
      opacity: fadeAmount,
    };
  };

  // Left slide animation
  const calculateLeftSlideTransition = () => {
    const progress = getSectionProgress(2);
    return {
      transform: `translateX(${-progress * 100}%)`,
      opacity: 1 - progress,
    };
  };

  // Top slide animation
  const calculateTopSlideTransition = () => {
    const progress = getSectionProgress(3);
    return {
      transform: `translateY(${-progress * 100}%)`,
      opacity: 1 - progress,
    };
  };

  // Right slide animation
  const calculateRightSlideTransition = () => {
    const progress = getSectionProgress(4);
    return {
      transform: `translateX(${progress * 100}%)`,
      opacity: 1 - progress,
    };
  };

  // // Final section animation
  // const calculateFinalSectionStyle = () => {
  //   const progress = getSectionProgress(5);
  //   return {
  //     opacity: progress,
  //   };
  // };

  // Enhanced visibility logic with reverse scrolling support
  const getSectionVisibility = (sectionIndex: number) => {
    // Always show the active section
    const isSectionActive = sectionIndex === activeSection;

    // Show the next section if we're transitioning to it or it's the next one
    const isNextSection = sectionIndex === activeSection + 1;

    // Show the previous section if we're transitioning to it or if we're scrolling up
    const isPrevSection = sectionIndex === activeSection - 1;

    // Show the section we're animating to
    const isTargetSection =
      animatingToSection !== null && sectionIndex === animatingToSection;

    // During reverse transitions, both sections need to be visible
    const isReversing = scrollDirection === "up" && isPrevSection;

    const shouldShow =
      isSectionActive ||
      isNextSection ||
      isTargetSection ||
      isPrevSection ||
      isReversing;

    // Determine z-index for proper stacking
    let zIndex = 1;
    if (isSectionActive) zIndex = 10;
    else if (isTargetSection) zIndex = 9;
    else if (isNextSection && scrollDirection === "down") zIndex = 8;
    else if (isPrevSection && scrollDirection === "up") zIndex = 8;
    else if (isNextSection) zIndex = 7;
    else if (isPrevSection) zIndex = 7;

    return {
      display: shouldShow ? "flex" : "none",
      zIndex,
    };
  };

  // Button handlers for manual navigation
  const goToPrevSection = () => {
    if (activeSection > 0 && !isAnimating) {
      setAnimatingToSection(activeSection - 1);
      setIsAnimating(true);
      setScrollDirection("up");
    }
  };

  const goToNextSection = () => {
    if (activeSection < totalSections - 1 && !isAnimating) {
      setAnimatingToSection(activeSection + 1);
      setIsAnimating(true);
      setScrollDirection("down");
    }
  };

  return (
    <>
      {/* Fixed display container */}
      <div className="fixed inset-0 w-full h-screen overflow-hidden">
        {/* Section 1: Hero Text */}
        <section
          className="absolute inset-0 flex flex-col sm:items-start items-center justify-center px-4 bg-[#faf9f6]"
          style={getSectionVisibility(0)}
        >
          <div className="w-[90%] sm:w-[50%]">
            <h1 className="text-2xl text-start md:text-3xl font-bold mb-4">
              <span
                className="inline-block transition-all duration-700 ease-out playwrite-hr"
                style={calculateWord1Style()}
              >
                Introducing
              </span>
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span
                className="inline-block transition-all duration-700 ease-out june-expt-variable"
                style={{
                  ...calculateWord1Style(),
                  fontVariationSettings: ` 'STYL' 60`,
                }}
              >
                M3tering
              </span>
            </h1>
            <h1 className="text-6xl text-end md:text-8xl font-bold">
              <span
                className="inline-block transition-all duration-700 ease-out june-expt-variable"
                style={{
                  ...calculateWord2Style(),
                  fontVariationSettings: ` 'STYL' 60`,
                }}
              >
                Protocol
              </span>
            </h1>
            <h1 className="text-2xl text-end md:text-3xl font-bold">
              <span
                className="inline-block transition-all duration-700 ease-out playwrite-hr"
                style={calculateWord2Style()}
              >
                V2
              </span>
            </h1>
          </div>
        </section>

        {/* Section 2: Image Transition */}
        <section
          className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-cover bg-center"
          style={{
            ...getSectionVisibility(1),
            backgroundImage: `url(${AnimeBg.img.src})`,
          }}
        >
          <div
            className="transition-all duration-700 ease-out flex items-center justify-center"
            style={calculateImageTransition()}
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
          </div>
        </section>

        {/* Section 3: Left Slide Transition */}
        <section
          className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#faf9f6]"
          style={getSectionVisibility(2)}
        >
          <div
            className="w-full transition-all duration-700 ease-out"
            style={calculateLeftSlideTransition()}
          >
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
        </section>

        {/* Section 4: Top Slide Transition */}
        <section
          className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#faf9f6]"
          style={getSectionVisibility(3)}
        >
          <div
            className="w-full transition-all duration-700 ease-out px-4"
            style={calculateTopSlideTransition()}
          >
            <LogosCarousel />
          </div>
        </section>

        {/* Section 5: Right Slide Transition */}
        <section
          className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#faf9f6]"
          style={getSectionVisibility(4)}
        >
          <div
            className="w-full transition-all duration-700 ease-out"
            style={calculateRightSlideTransition()}
          >
            <div className="text-center text-black px-4">
              <h2 className="text-4xl md:text-6xl font-bold">Right Exit</h2>
              <p className="mt-4 text-xl md:text-2xl">
                Content slides out to the right
              </p>
              <div className="mt-8 w-32 h-1 bg-indigo-400 mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Section 6: Final Section */}
        <section
          className="absolute inset-0 flex flex-col items-center justify-end bg-[#faf9f6] text-black"
          style={{
            ...getSectionVisibility(5),
            opacity: getSectionProgress(5) > 0 ? 1 : 0,
          }}
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
        </section>

        {/* Navigation buttons (optional) */}
        <div className="fixed bottom-8 right-8 flex space-x-4">
          <button
            onClick={goToPrevSection}
            disabled={activeSection === 0 || isAnimating}
            className={`p-3 rounded-full ${
              activeSection === 0 || isAnimating
                ? "bg-gray-700 text-gray-500"
                : "bg-white text-blue-900 hover:bg-blue-100"
            } focus:outline-none transition-colors`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
          <button
            onClick={goToNextSection}
            disabled={activeSection === totalSections - 1 || isAnimating}
            className={`p-3 rounded-full ${
              activeSection === totalSections - 1 || isAnimating
                ? "bg-gray-700 text-gray-500"
                : "bg-white text-blue-900 hover:bg-blue-100"
            } focus:outline-none transition-colors`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable container that doesn't display content but enables scrolling */}
      <div
        ref={containerRef}
        className="w-full invisible"
        style={{ height: "500vh" }} // Height for scrolling
      ></div>
    </>
  );
};

export default HeroScrollAnimation;
