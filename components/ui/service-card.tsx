"use client";

import React, { useRef, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceItem {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  tags: string[];
  subServices: string[];
}

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 400, damping: 90 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 90 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative h-full rounded-3xl bg-white/2 border border-white/5 hover:border-white/10 p-8 transition-colors duration-500 overflow-hidden bento-card"
      >
        <div className="relative z-10 flex flex-col h-full">
          <div
            className={cn(
              "w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-6 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/10"
            )}
          >
            <service.icon className="w-6 h-6 text-white relative z-10" />
          </div>

          <h3 className="text-xl font-bold text-white mb-3 whitespace-nowrap">
            {service.title}
          </h3>

          <p className="text-zinc-400 text-sm leading-relaxed mb-8">
            {service.desc}
          </p>

          <div className="space-y-3 mb-8 grow">
            {service.subServices.map((sub, i) => (
              <div key={i} className="flex items-start gap-3 group/sub">
                <div className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500/50 group-hover/sub:bg-indigo-400 group-hover/sub:scale-125 transition-all" />
                <span className="text-xs text-zinc-500 group-hover/sub:text-zinc-300 transition-colors leading-snug">
                  {sub}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[9px] font-bold tracking-wider uppercase rounded-full bg-white/5 text-zinc-600 border border-white/5 group-hover:text-indigo-300 group-hover:border-indigo-500/20 group-hover:bg-indigo-500/5 transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 -right-8 -translate-y-1/2 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
          <service.icon className="w-48 h-48" />
        </div>
      </motion.div>
    </motion.div>
  );
}
