import { useEffect, useRef, useState } from "react";

const HeroScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const heroRef = useRef(null);
  const sectionHeight = useRef(0);
  const word1Ref = useRef(null);
  const word2Ref = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Set section height to viewport height
    sectionHeight.current = window.innerHeight;

    // Update section height on window resize
    const handleResize = () => {
      sectionHeight.current = window.innerHeight;
    };

    // Handle scroll events
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);

      // Determine current section based on scroll position
      const sectionIndex = Math.floor(newScrollY / sectionHeight.current);

      // First section transition (hero text fade out)
      if (sectionIndex === 0) {
        const progress = newScrollY / sectionHeight.current;
        if (progress > 0.7 && currentSection === 0) {
          // Subtle snap to next section
          window.scrollTo({
            top: sectionHeight.current,
            behavior: "smooth",
          });
          setCurrentSection(1);
        }
      }
      // Second section transition (image zoom and fade)
      else if (sectionIndex === 1) {
        // Calculate progress within this section
        const sectionProgress =
          (newScrollY - sectionHeight.current) / sectionHeight.current;

        // When image has zoomed and faded enough, move to next section
        if (sectionProgress > 0.7 && currentSection === 1) {
          window.scrollTo({
            top: sectionHeight.current * 2,
            behavior: "smooth",
          });
          setCurrentSection(2);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  // Calculate transforms and opacity for hero text based on scroll position
  const calculateWord1Style = () => {
    const maxScroll = sectionHeight.current * 0.5;
    const scrollProgress = Math.min(scrollY / maxScroll, 1);

    return {
      transform: `translateX(${-scrollProgress * 100}px)`,
      opacity: 1 - scrollProgress,
    };
  };

  const calculateWord2Style = () => {
    const maxScroll = sectionHeight.current * 0.5;
    const scrollProgress = Math.min(scrollY / maxScroll, 1);

    return {
      transform: `translateX(${scrollProgress * 100}px)`,
      opacity: 1 - scrollProgress,
    };
  };

  // Calculate transition image zoom and fade effect
  const calculateImageTransition = () => {
    // Calculate progress within the second section
    const sectionProgress = Math.max(
      0,
      Math.min(1, (scrollY - sectionHeight.current) / sectionHeight.current)
    );

    // Zoom from 1x to 10x based on scroll progress
    const zoomFactor = 1 + sectionProgress * 9;

    // Fade from 1 to 0
    const fadeAmount = Math.max(0, 1 - sectionProgress * 1.5);

    return {
      transform: `scale(${zoomFactor})`,
      opacity: fadeAmount,
    };
  };

  return (
    <div className="relative">
      {/* First Section: Hero Text */}
      <section
        ref={heroRef}
        className="h-screen sticky top-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white px-4"
      >
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span
              ref={word1Ref}
              className="inline-block transition-all duration-300 ease-out"
              style={calculateWord1Style()}
            >
              M3tering
            </span>
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold">
            <span
              ref={word2Ref}
              className="inline-block transition-all duration-300 ease-out"
              style={calculateWord2Style()}
            >
              protocol
            </span>
          </h1>
        </div>
      </section>

      {/* Second Section: Image Transition (fixed position) */}
      <section className="h-screen sticky top-0 flex items-center justify-center bg-black">
        <div
          ref={imageRef}
          className="transition-all duration-300 ease-out flex items-center justify-center"
          style={calculateImageTransition()}
        >
          {/* Placeholder logo/image */}
          <div className="w-24 h-24 md:w-32 md:h-32 bg-blue-500 rounded-full flex items-center justify-center text-white">
            <span className="text-xl md:text-2xl font-bold">M3</span>
          </div>
        </div>
      </section>

      {/* Third Section: Content (revealed after image transition) */}
      <section className="h-screen sticky top-0 flex items-center justify-center bg-gradient-to-b from-black to-blue-900 text-white px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold">Next Section</h2>
          <p className="mt-4 text-xl md:text-2xl">
            Revealed after image transition
          </p>
        </div>
      </section>

      {/* Spacer to allow scrolling */}
      <div style={{ height: `${sectionHeight.current * 3}px` }}></div>
    </div>
  );
};

export default HeroScrollAnimation;
