"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroContent } from "./hero/hero-content";
import { DashboardPreview } from "./hero/dashboard-preview";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 120]);
  const dashboardScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden"
    >
      <BackgroundParticles />
      <HeroContent opacity={contentOpacity} y={contentY} />
      <DashboardPreview scale={dashboardScale} />
    </section>
  );
}

function BackgroundParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-indigo-400/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.7,
          }}
        />
      ))}
    </div>
  );
}
