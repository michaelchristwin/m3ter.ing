import seedrandom from "seedrandom";
import { useEffect, useState } from "react";
//@ts-ignore
import { M3terHead } from "m3ters";

type M3terHeadProps = {
  displayTime: number;
  hiddenTime: number;
  backgroundColor: string;
  index: number;
};

const M3terheads: React.FC<M3terHeadProps> = ({
  displayTime,
  hiddenTime,

  backgroundColor,
}) => {
  const [randomNum, setRandomNum] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  let displayTimeout: NodeJS.Timeout;
  let hiddenTimeout: NodeJS.Timeout;

  const generateRandom = () => {
    const rng = seedrandom();
    const num = Math.floor(rng() * 100);
    setRandomNum(num);
  };

  const startCycle = () => {
    generateRandom();
    setVisible(true); // Fade in
    displayTimeout = setTimeout(() => {
      setVisible(false); // Fade out
      hiddenTimeout = setTimeout(() => {
        startCycle(); // Restart the cycle
      }, hiddenTime * 1000);
    }, displayTime * 1000);
  };

  useEffect(() => {
    startCycle();
    return () => {
      clearTimeout(displayTimeout);
      clearTimeout(hiddenTimeout);
    };
  });

  return (
    <div
      className={`item flex justify-center items-center`}
      style={{ backgroundColor: backgroundColor }}
    >
      {randomNum !== null && (
        <div
          className={`p-[20px]`}
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <M3terHead seed={String(randomNum)} size={150} />
        </div>
      )}
    </div>
  );
};

export default M3terheads;
