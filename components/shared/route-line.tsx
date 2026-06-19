"use client";

import { motion } from "framer-motion";

interface RouteLineProps {
  className?: string;
  direction?: "horizontal" | "vertical";
  steps?: number;
}

export function RouteLine({
  className,
  direction = "horizontal",
  steps = 3,
}: RouteLineProps) {
  const isHorizontal = direction === "horizontal";

  return (
    <div className={className}>
      <svg
        className="w-full h-full"
        viewBox={isHorizontal ? "0 0 200 20" : "0 0 20 200"}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.line
          x1={isHorizontal ? 0 : 10}
          y1={isHorizontal ? 10 : 0}
          x2={isHorizontal ? 200 : 10}
          y2={isHorizontal ? 10 : 200}
          stroke="#16a3df"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        {Array.from({ length: steps }).map((_, i) => {
          const pos = ((i + 1) / (steps + 1)) * 200;
          return (
            <motion.rect
              key={i}
              x={isHorizontal ? pos - 3 : 4}
              y={isHorizontal ? 4 : pos - 3}
              width="12"
              height="12"
              fill="#16a3df"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.3 }}
            />
          );
        })}
      </svg>
    </div>
  );
}
