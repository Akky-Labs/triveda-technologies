"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { CASE_STUDIES_DATA, CONTACT_INFO } from "@/lib/data";
import { Navbar } from "@/components/sections/navbar";
import { BackgroundGradient } from "@/components/sections/background-gradient";

const Footer = dynamic(() => import("@/components/sections/footer").then(mod => mod.Footer), { ssr: true });
import { ArrowRight, Sparkles, TrendingUp, Target, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#030712] selection:bg-indigo-500/30">
      <BackgroundGradient />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-40 pb-12 md:pb-20 px-6 overflow-hidden text-center">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold text-indigo-400 uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Our Impact
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8"
          >
            Delivering Measurable <br />
            <span className="text-gradient">Business Impact</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Explore how we've helped startups and enterprises solve complex problems 
            and achieve exponential growth through technology.
          </motion.p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto space-y-32">
          {CASE_STUDIES_DATA.map((study, index) => (
            <div key={study.id} className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                {/* Left Side: Context & Problem */}
                <div className="lg:col-span-4 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className={cn("text-xs font-bold uppercase tracking-widest mb-4 inline-block", "p-2 rounded-lg bg-indigo-500/10 text-indigo-400")}>
                      {study.category}
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {study.title}
                    </h2>
                    <p className="text-zinc-400 leading-relaxed italic border-l-2 border-zinc-800 pl-6 py-1 mb-8">
                      {study.context}
                    </p>
                    
                    <div className="p-8 rounded-3xl bg-white/2 border border-white/5">
                      <h3 className="text-sm font-bold text-rose-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" />
                        The Problem
                      </h3>
                      <ul className="space-y-4">
                        {study.problem.map((p, i) => (
                          <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500/50 mt-1.5 shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Right Side: Solution & Results */}
                <div className="lg:col-span-8 space-y-12">
                  {/* Solution Approach */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/2 border border-white/5 relative overflow-hidden"
                  >
                    <div className="relative z-10">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-8 flex items-center gap-2">
                        <Target className="w-5 h-5 md:w-6 md:h-6 text-indigo-500" />
                        Solution Approach
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {study.solution.map((sol, i) => (
                          <div key={i} className="space-y-2">
                            <div className="text-[10px] md:text-xs font-bold text-indigo-400 uppercase tracking-widest">
                              0{i + 1} · {sol.step}
                            </div>
                            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                              {sol.details}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {study.results.map((res, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-3xl bg-linear-to-br from-indigo-500/5 to-transparent border border-white/5 text-center"
                      >
                        <div className="text-2xl font-black text-white mb-1">{res.value}</div>
                        <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{res.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Takeaway */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-5 md:p-6 rounded-2xl bg-white/1 border border-white/10 flex flex-col sm:flex-row items-center gap-4 md:gap-6"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                      <Zap className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <p className="text-xs md:text-sm text-zinc-300 font-medium italic text-center sm:text-left">
                      <span className="text-indigo-400 font-bold not-italic mr-2">Key Takeaway:</span>
                      {study.takeaway}
                    </p>
                  </motion.div>
                </div>
              </div>
              
              {index !== CASE_STUDIES_DATA.length - 1 && (
                <div className="mt-32 w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto shadow-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 rounded-[4rem] bg-[#0a0f1c] border border-white/5 text-center relative overflow-hidden group shadow-2xl shadow-indigo-500/10"
          >
            <div className="absolute inset-0 bg-linear-to-br from-indigo-600/10 via-transparent to-violet-600/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <TrendingUp className="w-20 h-20 text-white/5 absolute -top-4 -right-4 -rotate-12" />
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10 leading-tight">
              Ready to achieve <br />
              <span className="text-gradient">Exponential Growth?</span>
            </h2>
            <p className="text-zinc-400 mb-10 text-lg relative z-10 max-w-xl mx-auto">
              Our data-driven strategies have delivered consistent results for our clients. 
              Let’s see what we can do for your business.
            </p>
            
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 bg-white text-black font-black rounded-2xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)] relative z-10"
            >
              Get Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
