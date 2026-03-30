"use client";

import React, { useRef, useEffect } from "react";
import { motion, MotionValue } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useCipherText } from "@/hooks/use-cipher-text";
import { HERO_DATA, SITE_DATA } from "@/lib/data";

interface HeroContentProps {
  opacity: MotionValue<number>;
  y: MotionValue<number>;
}

export function HeroContent({ opacity, y }: HeroContentProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { animate } = useCipherText();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (headingRef.current) {
        animate(headingRef.current);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [animate]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="relative z-10 max-w-5xl mx-auto text-center space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
        </span>
        {HERO_DATA.badge}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
      >
        <span className="block text-white" ref={headingRef}>
          {HERO_DATA.heading.line1}
        </span>
        <span className="block text-gradient mt-2">
          {HERO_DATA.heading.line2}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed"
      >
        {(HERO_DATA as any).subtext}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
      >
        <a
          href="#services"
          className="group w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-white/10"
          data-magnetic
        >
          {HERO_DATA.cta.primary}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href={`https://wa.me/${SITE_DATA.contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          data-magnetic
        >
          <Play className="w-4 h-4 fill-white" /> {HERO_DATA.cta.secondary}
        </a>
      </motion.div>
    </motion.div>
  );
}
