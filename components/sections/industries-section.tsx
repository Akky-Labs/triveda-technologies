"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { INDUSTRIES_DATA } from "@/lib/data";

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-20 md:py-32 px-6 relative overflow-hidden border-y border-white/5"
    >
      <div className="absolute inset-0 noise-overlay opacity-10" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-500/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold tracking-[0.25em] text-indigo-400 uppercase mb-6">
            Industries
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.2]">
            Industries{" "}
            <span className="text-gradient">We Serve</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Deep domain expertise across sectors that power the modern economy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <div className="relative z-10 flex items-start gap-5">
                <div
                  className={cn(
                    "shrink-0 w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center transition-all duration-500 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10"
                  )}
                >
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {industry.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
