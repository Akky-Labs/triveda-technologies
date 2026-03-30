"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { DETAILED_SERVICES_DATA, CONTACT_INFO } from "@/lib/data";
import { Navbar } from "@/components/sections/navbar";
import { BackgroundGradient } from "@/components/sections/background-gradient";

const Footer = dynamic(() => import("@/components/sections/footer").then(mod => mod.Footer), { ssr: true });
import { CheckCircle2, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = DETAILED_SERVICES_DATA[slug];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#030712] selection:bg-indigo-500/30">
      <BackgroundGradient />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-40 pb-12 md:pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8",
              "text-indigo-400"
            )}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Service Excellence
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 md:mb-8"
          >
            {data.heading.split(' ').slice(0, -3).join(' ')}{" "}
            <span className="text-gradient">
              {data.heading.split(' ').slice(-3).join(' ')}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 leading-tight">
                What We Do
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.features.map((feature: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-6 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/5 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-zinc-300 font-medium leading-snug">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-linear-to-br from-indigo-500/5 to-transparent border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-indigo-400 mb-8 font-bold">
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />
                  <h2 className="text-xl md:text-2xl font-bold text-white">Business Impact</h2>
                </div>
                <div className="space-y-6">
                  {data.impact.map((impact: string, i: number) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-[10px] shrink-0 mt-1">
                        0{i + 1}
                      </div>
                      <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-medium">
                        {impact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 rounded-[3rem] bg-[#0a0f1c] border border-white/5 text-center relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-linear-to-br from-indigo-600/10 via-transparent to-violet-600/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight relative z-10">
              Ready to scale your {data.heading.split(' ').slice(0, 1).join(' ')}?
            </h2>
            <p className="text-zinc-400 mb-10 relative z-10 max-w-lg mx-auto">
              Partner with a team that understands technology, business, and growth at scale.
            </p>
            
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all shadow-xl relative z-10"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
