"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CinematicPanelProps {
  children: React.ReactNode;
  index: number;
}

export function CinematicPanel({ children, index }: CinematicPanelProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.5]);
  const shadow = useTransform(
    scrollYProgress,
    [0, 1],
    ["0 0 0 rgba(0,0,0,0)", "0 20px 50px rgba(0,0,0,0.5)"]
  );

  return (
    <div
      ref={ref}
      className="relative md:sticky top-0 md:min-h-screen flex items-center py-10 md:py-0"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{
          scale: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : scale,
          opacity: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : opacity,
          boxShadow: shadow,
        }}
        className="relative w-full origin-top overflow-hidden bg-[#030712] rounded-2xl md:rounded-[3rem]"
      >
        {children}
      </motion.div>
    </div>
  );
}
