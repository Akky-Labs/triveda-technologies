"use client";

import React from "react";
import { motion } from "framer-motion";
import { WHY_CHOOSE_DATA } from "@/lib/data";

export function WhyChooseSection() {
  return (
    <section id="why-us" className="py-20 md:py-32 px-6 relative overflow-hidden scroll-mt-32">
      <div className="absolute inset-0 noise-overlay opacity-[0.03]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold tracking-[0.25em] text-indigo-400 uppercase mb-6">
            Elite Engineering
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.2]">
            Engineering Excellence{" "}
            <span className="text-gradient">By Design</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_DATA.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group relative p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden bento-card"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-linear-to-br from-indigo-500/4 to-transparent rounded-3xl" />
              </div>

              <div className="absolute top-6 right-6 text-6xl font-black text-white/3 group-hover:text-indigo-500/8 transition-colors">
                0{i + 1}
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/40 transition-all duration-500">
                  <reason.icon className="w-5 h-5 text-indigo-400" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
