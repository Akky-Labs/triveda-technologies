"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_INFO, SITE_DATA } from "@/lib/data";

export function ContactCTA() {
  const contactItems = [
    { icon: Mail, label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
    { icon: Phone, label: "Phone", value: CONTACT_INFO.phoneDisplay, href: `tel:${CONTACT_INFO.phone}` },
    { icon: MapPin, label: "Office", value: CONTACT_INFO.address, href: "#" },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden scroll-mt-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[2.5rem] overflow-hidden group/card"
        >
          <div className="absolute inset-0 bg-linear-to-br from-indigo-600/10 via-transparent to-violet-600/10 opacity-50 group-hover/card:opacity-100 transition-opacity duration-700" />
          
          <div className="absolute inset-0 p-[1px] bg-linear-to-br from-white/20 via-white/10 to-white/20 rounded-[2.5rem]">
            <div className="absolute inset-0 bg-[#030712] rounded-[calc(2.5rem-1px)]" />
          </div>

          <div className="relative py-16 px-8 md:px-12 lg:px-20">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] -translate-y-1/2 translate-x-1/4 rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-600/5 blur-[100px] translate-y-1/2 -translate-x-1/4 rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                    Ready to transform <br />
                    <span className="text-gradient">your business?</span>
                  </h2>
                  <p className="text-lg text-zinc-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    Join forward-thinking companies that trust {SITE_DATA.name} 
                    to engineer their next-generation digital presence.
                  </p>
                </motion.div>

                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-white/90 transition-all flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    data-magnetic
                  >
                    <span className="relative z-10">Get in Touch</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="group px-8 py-4 text-white font-semibold transition-all flex items-center justify-center gap-2 hover:text-indigo-400"
                    data-magnetic
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>

              <div className="w-full lg:w-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="group relative p-4 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/4 hover:border-white/10 transition-all duration-300 flex items-center gap-4 min-w-[280px]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-[0.1em] font-semibold mb-0.5">
                        {item.label}
                      </div>
                      <a
                        href={item.href}
                        className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors block max-w-[200px] leading-tight"
                      >
                        {item.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
