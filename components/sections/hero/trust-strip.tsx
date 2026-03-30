"use client";

import React from "react";
import { motion } from "framer-motion";
import { TRUST_STRIP_DATA } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export function TrustStrip() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5">
      <div className="flex flex-col items-center gap-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]"
        >
          {TRUST_STRIP_DATA.headline}
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {TRUST_STRIP_DATA.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-500/20">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              </div>
              <span className="text-base md:text-lg font-bold text-white/80 group-hover:text-white transition-colors">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
