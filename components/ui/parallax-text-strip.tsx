"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxTextStrip() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  const lines = [
    "TRIVEDA TECHNOLOGIES · DIGITAL TRANSFORMATION",
    "DIGITAL · TRANSFORMATION · AI · CLOUD",
  ];

  return (
    <div
      ref={ref}
      className="py-8 md:py-16 overflow-hidden relative select-none pointer-events-none"
      style={{ zIndex: 20 }}
    >
      <motion.div
        style={{ x: x1 }}
        className="flex gap-8 whitespace-nowrap mb-4"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="text-6xl md:text-8xl font-bold text-white/3 tracking-tight"
          >
            {lines[0]}
          </span>
        ))}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="flex gap-8 whitespace-nowrap"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="text-6xl md:text-8xl font-bold text-white/3 tracking-tight"
          >
            {lines[1]}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
