"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface PortalRevealSectionProps {
  children: React.ReactNode;
}

export function PortalRevealSection({ children }: PortalRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 30%"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["circle(15% at 50% 50%)", "circle(100% at 50% 50%)"]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <div ref={ref} className="relative z-10 overflow-hidden py-10">
      <motion.div
        style={{ clipPath, opacity }}
        className="relative block w-full h-full"
      >
        <div className="relative">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
