import { useEffect, useRef, useState } from "react";
import { AnimeBg, Island } from "~/assets/images";

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
          className="absolute inset-0 flex flex-col items-center justify-center px-4 bg-[#faf9f6]"
          style={getSectionVisibility(0)}
        >
          <div className="w-[90%] mx-auto">
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
                  ...setFontVariation(100 - 25 - scrollProgress * 50),
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
                  ...setFontVariation(100 - 25 - scrollProgress * 50),
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
            <div className="text-center text-black px-4">
              <h2 className="text-4xl md:text-6xl font-bold">Left Exit</h2>
              <p className="mt-4 text-xl md:text-2xl">
                Content slides out to the left
              </p>
              <div className="mt-8 w-32 h-1 bg-blue-400 mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Section 4: Top Slide Transition */}
        <section
          className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#faf9f6]"
          style={getSectionVisibility(3)}
        >
          <div
            className="w-full transition-all duration-700 ease-out"
            style={calculateTopSlideTransition()}
          >
            <div className="text-center text-black px-4">
              <h2 className="text-4xl md:text-6xl font-bold">Top Exit</h2>
              <p className="mt-4 text-xl md:text-2xl">
                Content slides out to the top
              </p>
              <div className="mt-8 w-32 h-1 bg-purple-400 mx-auto"></div>
            </div>
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
          className="absolute inset-0 flex items-center justify-center bg-[#faf9f6] text-black px-4"
          style={{
            ...getSectionVisibility(5),
            opacity: getSectionProgress(5),
          }}
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold">Complete</h2>
            <p className="mt-4 text-xl md:text-2xl">
              All transitions completed
            </p>
            <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-black rounded-lg text-lg transition-colors">
              Get Started
            </button>
          </div>
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

const setFontVariation = (size: number) => {
  const fontsStyle: React.CSSProperties = {
    fontVariationSettings: ` 'STYL' ${size} `,
  };
  return fontsStyle;
};
