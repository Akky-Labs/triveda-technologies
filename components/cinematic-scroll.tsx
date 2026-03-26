"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CinematicCardProps {
  children: React.ReactNode;
  index: number;
  total: number;
}

/**
 * Each section is "pinned" with sticky positioning.
 * As you scroll past it, the card scales down + fades slightly,
 * creating the illusion that a new panel slides IN on top.
 */
function CinematicCard({ children, index, total }: CinematicCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scale down from 1 → 0.9 as user scrolls past
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  // Fade slightly
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.4]);
  // Subtle Y shift to enhance depth
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div
      ref={ref}
      className="h-screen flex items-center sticky top-0"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale, opacity, y }}
        className="w-full origin-top"
      >
        {children}
      </motion.div>
    </div>
  );
}

interface CinematicScrollProps {
  children: React.ReactNode[];
}

/**
 * Wrap multiple sections in CinematicScroll.
 * Each child becomes a sticky panel that shrinks away
 * as the next one overlaps, like a cinematic card stack.
 */
export function CinematicScroll({ children }: CinematicScrollProps) {
  return (
    <div className="relative">
      {React.Children.map(children, (child, i) => (
        <CinematicCard
          key={i}
          index={i}
          total={React.Children.count(children)}
        >
          {child}
        </CinematicCard>
      ))}
    </div>
  );
}
