"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_DATA, CONTACT_INFO } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center",
          scrolled ? "top-6 px-6" : "top-0 px-0"
        )}
      >
        <div
          className={cn(
            "transition-all duration-500 flex items-center justify-between",
            scrolled
              ? "w-full max-w-5xl bg-[#030712]/80 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-2.5 shadow-2xl shadow-black/40"
              : "w-full max-w-7xl px-6 py-5 bg-transparent"
          )}
        >
          <a href="/" className="flex items-center gap-3 group" data-magnetic>
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl transition-all duration-500 group-hover:border-indigo-500/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-black text-gradient">
                  {SITE_DATA.name.charAt(0)}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white leading-none">
                {SITE_DATA.name.split(' ')[0].toUpperCase()}
              </span>
              <span className="text-[9px] font-medium tracking-[0.3em] text-indigo-400/60 uppercase mt-0.5">
                {SITE_DATA.name.split(' ').slice(1).join(' ')}
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group">
                {link.children ? (
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                    {link.label}
                    <motion.span 
                      animate={{ rotate: 0 }}
                      className="inline-block group-hover:rotate-180 transition-transform duration-300"
                    >
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.span>
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group/link"
                    data-magnetic
                  >
                    {link.label}
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-indigo-500 group-hover/link:w-1/2 transition-all duration-300 rounded-full" />
                  </a>
                )}

                {link.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <div className="w-48 bg-[#030712] border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-3xl overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none" />
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-xs font-semibold text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-2.5 text-sm font-semibold text-white overflow-hidden rounded-full"
                data-magnetic
              >
                <div className="absolute inset-0 bg-linear-to-r from-indigo-600 via-violet-600 to-indigo-600 animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={cn(
                  "absolute inset-0 transition-colors duration-300 rounded-full",
                  scrolled ? "bg-white/5 border border-white/10" : "bg-[#0a0f1c] border border-white/10"
                )} />
                <span className="relative z-10 flex items-center gap-2">
                  Let's Build
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 flex items-center justify-center text-white rounded-full hover:bg-white/5 transition-colors lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#030712]/95 backdrop-blur-2xl pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-2 overflow-y-auto pb-10">
              {NAV_LINKS.map((link, i) => {
                if (link.children) {
                  return (
                    <div key={link.label} className="py-4 border-b border-white/5">
                      <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-4">{link.label}</div>
                      <div className="flex flex-col gap-4">
                        {link.children.map((child) => (
                          <motion.a
                            key={child.label}
                            href={child.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="text-lg font-bold text-white/90 hover:text-white"
                          >
                            {child.label}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-bold text-white py-6 border-b border-white/5 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-8 py-4 bg-linear-to-r from-indigo-600 to-violet-600 text-white font-bold rounded-2xl text-center"
              >
                Get Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
