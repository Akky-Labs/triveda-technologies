"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQS_DATA } from "@/lib/data";

export function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-32 px-6 relative overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 noise-overlay opacity-[0.03]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold tracking-[0.25em] text-indigo-400 uppercase mb-6">
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.2]">
            Common <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white/2 border border-white/5 overflow-hidden hover:border-white/10 transition-colors cursor-pointer"
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <div
                className={cn(
                  "p-5 md:p-6 flex justify-between items-center gap-4 transition-colors",
                  open === i ? "bg-white/3" : ""
                )}
              >
                <h3 className="text-base md:text-lg font-bold text-zinc-100">
                  {faq.q}
                </h3>
                <button
                  className={cn(
                    "shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500",
                    open === i
                      ? "rotate-45 text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
                      : "text-zinc-500"
                  )}
                >
                  <Plus size={18} />
                </button>
              </div>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-zinc-400 text-sm md:text-base leading-relaxed border-t border-white/5 pt-5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
