"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { ABOUT_DATA, VALUES_DATA } from "@/lib/data";

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 md:py-32 px-6 relative overflow-hidden scroll-mt-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold tracking-[0.25em] text-indigo-400 uppercase mb-6">
            {ABOUT_DATA.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.2]">
            {ABOUT_DATA.heading.split('Through')[0]}Through{" "}
            <span className="text-gradient">
              {ABOUT_DATA.heading.split('Through')[1].trim()}
            </span>
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            {ABOUT_DATA.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {VALUES_DATA.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-white/10 transition-all duration-500 bento-card"
            >
              <div className="relative z-10">
                <div 
                  className={cn(
                    "w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-6 transition-all duration-500 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10"
                  )}
                >
                  <val.icon className="w-6 h-6 text-indigo-400" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 transition-all">
                {val.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {val.desc}
              </p>

              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-linear-to-br ${val.gradient} opacity-10 blur-xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
