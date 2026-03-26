"use client";

import React from "react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { SITE_DATA, FOOTER_LINKS, CONTACT_INFO } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#020510]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-black text-gradient">T</span>
                </div>
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white block">
                  {SITE_DATA.name.toUpperCase()}
                </span>
              </div>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-sm mb-6">
              Engineering intelligent digital ecosystems for forward-thinking
              organizations worldwide. Your vision, our expertise.
            </p>
            <div className="flex gap-3">
              {[
                { 
                  href: CONTACT_INFO.linkedin, 
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )
                },
                { href: `mailto:${CONTACT_INFO.email}`, icon: <Mail className="w-4 h-4" /> },
                { href: `tel:${CONTACT_INFO.phone}`, icon: <Phone className="w-4 h-4" /> }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-indigo-400 hover:border-indigo-500/20 hover:bg-indigo-500/5 transition-all"
                  data-magnetic
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map(
                (link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} {SITE_DATA.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-zinc-600">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
