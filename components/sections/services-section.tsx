"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useTransform,
  useScroll,
} from "framer-motion";
import { SERVICES_DATA, SERVICES_SECTION_DATA } from "@/lib/data";
import { ServiceCard } from "@/components/ui/service-card";

export function ServicesSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (stripRef.current) {
        const totalWidth = stripRef.current.scrollWidth;
        const viewWidth = window.innerWidth;
        setScrollRange(totalWidth - viewWidth + 48);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section id="services" ref={targetRef} className="relative h-[500vh] bg-[#030712] scroll-mt-32">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-indigo-500/20 to-transparent" />

        <div className="px-6 md:px-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold tracking-[0.25em] text-indigo-400 uppercase mb-4">
                What We Do
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.2]">
                {SERVICES_SECTION_DATA.heading.split(' ').slice(0, -2).join(' ')}{" "}
                <span className="text-gradient">
                  {SERVICES_SECTION_DATA.heading.split(' ').slice(-2).join(' ')}
                </span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                {SERVICES_SECTION_DATA.intro}
              </p>
            </div>


          </motion.div>
        </div>

        <motion.div ref={stripRef} style={{ x }} className="flex gap-6 px-6 md:px-12">
          {SERVICES_DATA.map((service, i) => (
            <div key={service.title} className="w-[85vw] md:w-[450px] shrink-0">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
