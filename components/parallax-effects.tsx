"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxRevealProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A circular mask / portal reveal that expands from a small circle
 * to full-screen as user scrolls into view.
 * Creates a cinematic "magnifying portal" effect.
 */
export function PortalReveal({ children, className }: ParallaxRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Circle mask expands from 0% → 100% radius
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["circle(0% at 50% 50%)", "circle(100% at 50% 50%)"]
  );

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ clipPath, scale, opacity }}>
        {children}
      </motion.div>
    </div>
  );
}

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

/**
 * Individual parallax layer — moves at a different speed
 * relative to scroll, creating depth.
 */
export function ParallaxLayer({
  children,
  speed = 0.5,
  className,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Floating animation — subtle up/down float with rotation
 * for decorative elements.
 */
export function FloatingElement({
  children,
  delay = 0,
  className,
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
