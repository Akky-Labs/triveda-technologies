"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ABOUT_PAGE_DATA, CONTACT_INFO, SITE_DATA } from "@/lib/data";
import { Navbar } from "@/components/sections/navbar";
import { BackgroundGradient } from "@/components/sections/background-gradient";

const Footer = dynamic(() => import("@/components/sections/footer").then(mod => mod.Footer), { ssr: true });
import { CheckCircle2, Target, Eye, Users, TrendingUp, Sparkles, Award, ShieldCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const d = ABOUT_PAGE_DATA;

  return (
    <main className="min-h-screen bg-[#030712] selection:bg-indigo-500/30">
      <BackgroundGradient />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {d.hero.badge}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="block text-white">{d.hero.heading1}</span>
            <span className="block text-gradient mt-2">{d.hero.heading2}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed"
          >
            {d.hero.subtext}
          </motion.p>
        </div>
      </section>

      {/* Intro & Approach */}
      <section className="py-20 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">
                Not just another tech services company — your <span className="text-indigo-400">strategic partner</span>.
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                {d.intro.content}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-4"
            >
              <div className="p-6 rounded-3xl bg-white/2 border border-white/5">
                <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-6">Our Simple Approach</h3>
                <div className="space-y-6">
                  {d.intro.approach.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 shrink-0 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-[10px]">
                        0{i + 1}
                      </div>
                      <p className="text-white font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Edge Section */}
      <section className="py-24 px-6 relative bg-white/1">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden p-8 md:p-10 flex flex-col justify-center min-h-[300px] md:min-h-[400px]"
            >
              <div className="absolute inset-0 bg-indigo-600/10 mix-blend-overlay" />
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500/20 to-transparent" />
              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-xs font-bold text-indigo-300 uppercase tracking-widest mb-6 md:mb-8">
                  {d.edge.title}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {d.edge.subtitle}
                </h2>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-md">
                  {d.edge.desc}
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {d.edge.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-zinc-300 font-medium leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border border-white/5 bg-linear-to-b from-white/2 to-transparent overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start relative z-10">
              <div className="flex-1 w-full text-center lg:text-left">
                <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-6">{d.leadership.title}</h2>
                <p className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">
                  {d.leadership.desc}
                </p>
                <div className="grid grid-cols-1 gap-4 text-left max-w-md mx-auto lg:mx-0">
                  {d.leadership.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-zinc-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                      <span className="text-base md:text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-10 border-t border-white/10 italic text-indigo-300">
                  {d.leadership.closing}
                </div>
              </div>
              <div className="hidden lg:block w-px h-80 bg-white/10" />
              <div className="w-full lg:w-1/3 flex flex-col items-center justify-center text-center py-6 md:py-0">
                <div className="text-6xl md:text-8xl font-black text-white/5 mb-2 md:mb-4">20+</div>
                <div className="text-lg md:text-xl font-bold text-white uppercase tracking-tighter">Years of Experience</div>
                <div className="text-zinc-500 mt-2 text-sm md:text-base">In Global Tech Leadership</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Segments */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-6">{d.philosophy.title}</h2>
            <p className="text-3xl font-bold text-white mb-8 leading-tight">
              {d.philosophy.desc}
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {d.philosophy.values.map((v, i) => (
                <div key={i} className="flex flex-col gap-3 p-6 rounded-2xl bg-white/2 border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-white/90">{v}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-zinc-400 border-l-2 border-indigo-500 pl-6 py-2">
              {d.philosophy.closing}
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-6">{d.segments.title}</h2>
            <div className="space-y-6">
              {d.segments.list.map((seg, i) => (
                <div key={i} className="group p-8 rounded-[2rem] bg-white/2 border border-white/5 hover:border-white/10 hover:bg-white/4 transition-all">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{seg.name}</h3>
                  <p className="text-zinc-400">{seg.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-24 px-6 bg-white/1">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/5 bg-linear-to-br from-indigo-500/5 to-transparent flex flex-col items-center text-center group overflow-hidden relative"
            >
              <Target className="w-12 h-12 md:w-16 md:h-16 text-indigo-500 mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h2 className="text-xs md:text-sm font-bold text-indigo-400 uppercase tracking-widest mb-6 leading-none">
                {d.mission.title}
              </h2>
              <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                {d.mission.content}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/5 bg-linear-to-br from-violet-500/5 to-transparent flex flex-col items-center text-center group overflow-hidden relative"
            >
              <Eye className="w-12 h-12 md:w-16 md:h-16 text-violet-500 mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h2 className="text-xs md:text-sm font-bold text-violet-400 uppercase tracking-widest mb-6 leading-none">
                {d.vision.title}
              </h2>
              <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                {d.vision.content}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Closing */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-6">{d.trust.title}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {d.trust.points.map((p, i) => (
                <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 text-xs font-medium hover:bg-white/10 hover:text-white transition-all cursor-default">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 rounded-[2.5rem] bg-[#0a0f1c] border border-white/5 text-center relative overflow-hidden group/cta shadow-2xl"
          >
            <div className="absolute inset-0 bg-linear-to-br from-indigo-600/10 via-transparent to-violet-600/10 opacity-50 group-hover/cta:opacity-100 transition-opacity duration-700" />
            
            <Award className="w-12 h-12 text-indigo-500/10 absolute -top-2 -right-2 rotate-12 group-hover/cta:scale-110 transition-transform duration-500" />
            
            <p className="text-xl md:text-2xl font-bold text-white mb-10 leading-relaxed relative z-10 max-w-xl mx-auto">
              {d.closing.line}
            </p>
            
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all shadow-xl z-10 text-sm"
            >
              <span className="relative z-10">Partner With Us</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
