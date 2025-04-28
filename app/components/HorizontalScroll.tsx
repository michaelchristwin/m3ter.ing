import { useRef } from "react";

const HorizontalScroll: React.FC = () => {
  const wrapper = useRef<HTMLDivElement>(null);

  return (
    <div ref={wrapper} style={{ padding: "none", margin: "none" }}>
      <div
        className={`first h-[100vh] m-0 p-0 box-border flex justify-center items-center`}
      >
        <h1>Scroll below</h1>
      </div>
      <div
        className={`scrollCcontainer h-[100vh] bg-orange-400 m-0 p-0 relative flex justify-center items-center`}
      >
        <h1>The animation is finished</h1>
        <div className="one flex justify-center items-center absolute top-0 right-0 left-0 bottom-0 z-10 bg-blue-400">
          <h1>One</h1>
        </div>
        <div className="two flex justify-center items-center absolute top-0 right-0 left-0 bottom-0 z-9 bg-[#f08080]">
          <h1>Two</h1>
        </div>
        <div className="three flex justify-center items-center absolute top-0 right-0 left-0 bottom-0 z-8 bg-[#e0ffff]">
          <h1>Three</h1>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
