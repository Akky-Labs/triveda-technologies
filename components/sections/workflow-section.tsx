"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { WORKFLOW_STEPS } from "@/lib/data";

export function WorkflowSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" ref={containerRef} className="py-20 md:py-32 relative overflow-hidden scroll-mt-32">
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
          {/* Animated vertical line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/5 hidden lg:block overflow-hidden">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute inset-0 w-full bg-linear-to-b from-indigo-500/0 via-indigo-500/60 to-indigo-500/0"
            />
          </div>

          <div className="space-y-20 lg:space-y-32">
            {WORKFLOW_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-8 lg:gap-20",
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                {/* Text Content */}
                <div
                  className={cn(
                    "flex-1",
                    i % 2 === 1 ? "lg:text-left" : "lg:text-right",
                    "text-center"
                  )}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className={cn(
                      "inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-indigo-400 mb-4 lg:hidden"
                    )}
                  >
                    <step.icon className="w-5 h-5" />
                  </motion.div>
                  <div className="text-xs font-bold text-indigo-400/60 tracking-[0.3em] uppercase mb-2">
                    Step 0{i + 1}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed max-w-md mx-auto lg:mx-0">
                    {step.desc}
                  </p>
                </div>

                {/* Central Icon */}
                <div className="relative z-10 hidden lg:flex items-center justify-center w-20 h-20">
                  <motion.div 
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                    className="w-16 h-16 rounded-2xl bg-[#0a0f1c] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.15)] group-hover:border-indigo-500/40 transition-colors duration-500"
                  >
                    <step.icon className="w-6 h-6 text-indigo-400" />
                    <div className="absolute inset-0 rounded-2xl border border-indigo-500/20 animate-ping opacity-20" />
                  </motion.div>
                </div>

                {/* Terminal Window */}
                <div className="flex-1 w-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-[#0a0f1c]/60 backdrop-blur-sm border border-white/5 rounded-xl p-6 font-mono text-xs sm:text-sm text-zinc-400 shadow-2xl hover:border-indigo-500/20 transition-colors group"
                  >
                    <div className="flex gap-1.5 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                    </div>
                    <div className="space-y-1.5">
                      <p>
                        <span className="text-indigo-400 font-bold">$</span>{" "}
                        <span className="text-zinc-200">{step.terminal}</span>
                      </p>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-zinc-600"
                      >
                        Processing...
                      </motion.p>
                      <motion.p 
                        initial={{ opacity: 0, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                        className="text-emerald-400/80"
                      >
                        ✓ {step.title} complete
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
