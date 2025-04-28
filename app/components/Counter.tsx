import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useInView, animate } from "framer-motion";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({
  from,
  to,
  duration = 2.5,
  className = "",
  prefix = "",
  suffix = "",
}) => {
  const count = useMotionValue(from);
  const [displayValue, setDisplayValue] = useState(from);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(spanRef, { once: false, amount: 0.5 });

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(from);
      count.set(from);
      return;
    }
    const animation = animate(count, to, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });

    return animation.stop;
  }, [count, from, to, duration, isInView]);

  return (
    <motion.span
      ref={spanRef}
      className={`font-mono font-extrabold xl:text-[60px] lg:text-[50px] md:text-[35px] text-[60px] text-white ${className} fade-in-block`}
    >
      {prefix}
      {displayValue}
      {suffix}
    </motion.span>
  );
};

export default Counter;
