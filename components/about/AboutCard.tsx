"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useRef, type PointerEvent } from "react";

interface AboutCardProps {
  number: string;
  title: string;
  points: string[];
  className?: string;
}

export default function AboutCard({ number, title, points, className = "" }: AboutCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const pointerRotateX = useMotionValue(0);
  const pointerRotateY = useMotionValue(0);
  const traceOffset = useMotionValue(-350);
  const lastPerimeterPosition = useRef(350);
  const rotateX = useSpring(pointerRotateX, { stiffness: 260, damping: 24, mass: 0.4 });
  const rotateY = useSpring(pointerRotateY, { stiffness: 260, damping: 24, mass: 0.4 });
  const tracedOffset = useSpring(traceOffset, { stiffness: 460, damping: 32, mass: 0.25 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left - bounds.width / 2;
    const relativeY = event.clientY - bounds.top - bounds.height / 2;
    const cursorX = event.clientX - bounds.left;
    const cursorY = event.clientY - bounds.top;
    const distances = {
      top: cursorY,
      right: bounds.width - cursorX,
      bottom: bounds.height - cursorY,
      left: cursorX,
    };
    const closestEdge = Object.entries(distances).reduce((nearest, [edge, distance]) =>
      distance < nearest.distance ? { edge, distance } : nearest,
      { edge: "top", distance: distances.top },
    ).edge;
    const horizontalPosition = (cursorX / bounds.width) * 100;
    const verticalPosition = (cursorY / bounds.height) * 100;
    let perimeterPosition = closestEdge === "top"
      ? horizontalPosition
      : closestEdge === "right"
        ? 100 + verticalPosition
        : closestEdge === "bottom"
          ? 300 - horizontalPosition
          : 400 - verticalPosition;

    const distanceFromPrevious = perimeterPosition - lastPerimeterPosition.current;
    if (distanceFromPrevious > 200) perimeterPosition -= 400;
    if (distanceFromPrevious < -200) perimeterPosition += 400;

    pointerRotateX.set((relativeY / (bounds.height / 2)) * -3.5);
    pointerRotateY.set((relativeX / (bounds.width / 2)) * 3.5);
    traceOffset.set(-(perimeterPosition - 60));
    lastPerimeterPosition.current = perimeterPosition;
  };

  const resetPosition = () => {
    pointerRotateX.set(0);
    pointerRotateY.set(0);
  };

  return (
    <motion.div
      className={`relative overflow-hidden border border-zinc-700/80 bg-zinc-950/20 px-6 pt-6 pb-10 rounded-custom will-change-transform ${className}`}
      style={shouldReduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
      whileHover={shouldReduceMotion ? undefined : { scale: 0.99 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.35 }}
    >
      <motion.svg
        aria-hidden="true"
        className="absolute inset-0 z-10 h-full w-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.rect
          x="0.5"
          y="0.5"
          width="99"
          height="99"
          rx="1.5"
          fill="none"
          stroke="rgb(52 211 153)"
          strokeWidth="0.45"
          strokeDasharray="100 296"
          style={shouldReduceMotion ? undefined : { strokeDashoffset: tracedOffset }}
        />
      </motion.svg>
      <span className="font-mono text-[10px] text-zinc-500 block mb-3">
        {number}{" // "}{title}
      </span>
      <ul className="space-y-1.5 text-zinc-300 font-light">
        {points.map((point, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
            <span className="text-sm">{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
