"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { WORKFLOW_STEPS } from "@/lib/data";

export function WorkflowSection() {
  return (
    <section id="process" className="py-20 md:py-32 relative overflow-hidden scroll-mt-32">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-indigo-500/2 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold tracking-[0.25em] text-indigo-400 uppercase mb-6">
            Our Process
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            From Vision to <span className="text-gradient">Reality</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-indigo-500/30 to-transparent hidden lg:block" />

          <div className="space-y-20">
            {WORKFLOW_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-8 lg:gap-16",
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                <div
                  className={cn(
                    "flex-1",
                    i % 2 === 1 ? "lg:text-left" : "lg:text-right",
                    "text-center"
                  )}
                >
                  <div
                    className={cn(
                      "inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-indigo-400 mb-4 lg:hidden"
                    )}
                  >
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-indigo-400/60 tracking-[0.3em] uppercase mb-2">
                    Step 0{i + 1}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed max-w-md mx-auto lg:mx-0">
                    {step.desc}
                  </p>
                </div>

                <div className="relative z-10 hidden lg:flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0a0f1c] border border-white/10 shadow-[0_0_30px_rgba(99,102,241,0.15)] group-hover:border-indigo-500/40 transition-colors duration-500">
                  <step.icon className="w-6 h-6 text-indigo-400" />
                  <div className="absolute inset-0 rounded-2xl border border-indigo-500/20 animate-ping opacity-20" />
                </div>

                <div className="flex-1">
                  <div className="bg-[#0a0f1c] border border-white/5 rounded-xl p-5 font-mono text-sm text-zinc-400 shadow-2xl hover:border-indigo-500/20 transition-colors group">
                    <div className="flex gap-1.5 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                    </div>
                    <div className="space-y-1.5">
                      <p>
                        <span className="text-indigo-400">$</span>{" "}
                        {step.terminal}
                      </p>
                      <p className="text-zinc-600">Processing...</p>
                      <p className="text-green-400/80">
                        ✓ {step.title} complete
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
