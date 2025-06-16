import { motion } from "motion/react";
import NumberFlow, {
	continuous,
	type NumberFlowElement,
} from "@number-flow/react";
import { useRef, useState } from "react";

type CounterProps = {
	duration?: number;
	max: number;
	prefix?: string;
};

const MotionNumberFlow = motion.create(NumberFlow);

function Counter({ max, prefix, duration = 4000 }: CounterProps) {
	const animationRef = useRef<number | null>(null);
	const counter = useRef<NumberFlowElement>(null);
	const isVisibleRef = useRef(false);
	const [value, setValue] = useState(0);

	// Animation logic using requestAnimationFrame
	const startAnimation = () => {
		if (animationRef.current) cancelAnimationFrame(animationRef.current);

		const stepCount = 60;
		const step = Math.ceil(max / stepCount);
		const interval = duration / stepCount;
		let startTime: number | null = null;

		const animate = (timestamp: number) => {
			if (!startTime) startTime = timestamp;
			const elapsed = timestamp - startTime;

			if (elapsed >= interval) {
				setValue((prev) => {
					const next = prev + step;
					if (next >= max) {
						animationRef.current = null;
						return max;
					}
					startTime = timestamp; // Reset for next step
					return next;
				});
			}

			if (isVisibleRef.current && value < max) {
				animationRef.current = requestAnimationFrame(animate);
			}
		};

		animationRef.current = requestAnimationFrame(animate);
	};

	// Stop animation when not visible
	const stopAnimation = () => {
		if (animationRef.current) {
			cancelAnimationFrame(animationRef.current);
			animationRef.current = null;
		}
		setValue(0); // Reset value
	};

	// Visibility detection using ref callback
	const handleVisibility = (node: HTMLElement | null) => {
		if (!node) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				isVisibleRef.current = entry.isIntersecting;
				if (entry.isIntersecting) {
					startAnimation();
				} else {
					stopAnimation();
				}
			},
			{ threshold: 0.5 },
		);

		observer.observe(node);

		// Store observer for cleanup
		counter.current = node as NumberFlowElement;
		return () => observer.disconnect();
	};

	return (
		<MotionNumberFlow
			layout
			layoutRoot
			value={value}
			prefix={prefix}
			ref={handleVisibility}
			plugins={[continuous]}
			style={{
				//@ts-ignore
				"--number-flow-char-height": "0.85em",
				"--number-flow-mask-height": "0.3em",
			}}
			className="font-extrabold space-mono-bold sm:text-[50px] text-[40px]"
		/>
	);
}

export default Counter;
