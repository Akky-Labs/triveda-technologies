"use client";

import React from "react";
import { motion } from "framer-motion";
import { TEAM_DATA } from "@/lib/data";
import { ExternalLink, Users, User } from "lucide-react";


export function TeamSection() {
  return (
    <section id="team" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.25em] text-indigo-400 uppercase mb-4">
            Our Talent
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Team <span className="text-gradient">Triveda</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Meet the strategic minds driving innovation and delivering growth for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_DATA.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative aspect-4/5 rounded-[2rem] overflow-hidden bg-white/2 border border-white/5 group-hover:border-indigo-500/30 transition-all duration-500">
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/50 group-hover:bg-indigo-900/10 transition-colors duration-500">
                  <div className="relative">
                    <div className="absolute -inset-8 bg-indigo-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <User className="w-24 h-24 text-zinc-700 group-hover:text-indigo-400 transition-all duration-500 group-hover:scale-110 relative z-10" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-[#030712] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-indigo-400 text-sm font-semibold uppercase tracking-wider">{member.role}</p>
                      <p className="text-zinc-400 text-xs mt-1">{member.specialization}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
