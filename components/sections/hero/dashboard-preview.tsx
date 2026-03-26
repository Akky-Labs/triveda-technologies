"use client";

import React, { useCallback } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  MotionValue,
} from "framer-motion";
import { DASHBOARD_DATA } from "@/lib/data";

interface DashboardPreviewProps {
  scale: MotionValue<number>;
}

export function DashboardPreview({ scale }: DashboardPreviewProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 80 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 80 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleCardMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const xPct = (e.clientX - rect.left) / rect.width - 0.5;
      const yPct = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(xPct);
      mouseY.set(yPct);
    },
    [mouseX, mouseY]
  );

  const handleCardMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ scale }}
      className="mt-20 w-full max-w-6xl perspective-1000"
      onMouseMove={handleCardMouseMove}
      onMouseLeave={handleCardMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-2xl border border-white/10 bg-[#0a0f1c]/80 shadow-2xl shadow-indigo-500/5 backdrop-blur-sm aspect-4/5 sm:aspect-4/3 md:aspect-video group overflow-hidden"
      >
        <WindowChrome title={DASHBOARD_DATA.title} />

        <div className="p-3 pt-13 h-full w-full flex gap-3">
          <Sidebar />

          <div className="flex-1 flex flex-col gap-3 min-w-0 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 flex-1">
              {DASHBOARD_DATA.projects.slice(0, 3).map((project, i) => (
                <ProjectCard key={project.title} project={project} delay={0.3 + i * 0.15} />
              ))}
            </div>

            <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 flex-1">
              {DASHBOARD_DATA.projects.slice(3, 6).map((project, i) => (
                <ProjectCard key={project.title} project={project} delay={0.75 + i * 0.15} />
              ))}
            </div>
          </div>
        </div>

        <AnalyticsWidget metrics={DASHBOARD_DATA.analytics} />
        <TerminalWidget />

        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/3 to-transparent pointer-events-none rounded-2xl" />
        <div className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-indigo-400/30 to-transparent pointer-events-none animate-scan-line" />
      </motion.div>
    </motion.div>
  );
}

function WindowChrome({ title }: { title: string }) {
  return (
    <div className="absolute top-0 left-0 right-0 h-10 border-b border-white/5 flex items-center px-4 gap-2 z-10">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/50" />
      </div>
      <div className="mx-auto px-3 sm:px-4 py-1 rounded-lg bg-white/5 border border-white/5 text-[9px] sm:text-[11px] text-zinc-500 font-mono flex items-center gap-1.5 sm:gap-2">
        <svg className="w-3 h-3 text-zinc-600 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        {title}
      </div>
    </div>
  );
}

function Sidebar() {
  const icons = [
    <svg key="1" className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
    <svg key="2" className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    <svg key="3" className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>,
    <svg key="4" className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>,
    <svg key="5" className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="m3 11 18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
  ];

  return (
    <div className="hidden md:flex flex-col gap-2.5 w-11 shrink-0 items-center pt-2 border-r border-white/5 pr-3">
      {icons.map((icon, i) => (
        <div key={i} className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-500 ${i === 0 ? "border border-indigo-500/40 bg-indigo-500/10" : "hover:bg-white/5 border border-transparent hover:border-white/10"}`}>
          {icon}
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, delay }: { project: any; delay: number }) {
  const colorMap: Record<string, string> = {
    blue: "text-blue-400 border-white/5 bg-white/[0.03]",
    violet: "text-violet-400 border-violet-500/10 bg-violet-500/[0.03]",
    emerald: "text-emerald-400 border-emerald-500/10 bg-emerald-500/[0.03]",
    pink: "text-pink-400 border-pink-500/10 bg-pink-500/[0.03]",
    amber: "text-amber-400 border-amber-500/10 bg-amber-500/[0.03]",
    cyan: "text-cyan-400 border-cyan-500/10 bg-cyan-500/[0.03]",
  };

  const progressColorMap: Record<string, string> = {
    blue: "from-blue-500 to-indigo-500",
    violet: "from-violet-500 to-purple-500",
    emerald: "from-emerald-500 to-green-500",
    pink: "from-pink-500 to-rose-500",
    amber: "from-amber-500 to-orange-500",
    cyan: "from-cyan-500 to-blue-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`rounded-xl border p-3 flex flex-col ${colorMap[project.color] || colorMap.blue}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className={`text-[9px] font-bold tracking-wider uppercase ${colorMap[project.color].split(' ')[0]}`}>{project.type}</span>
        <span className="w-5 h-5 rounded-md border border-white/10 bg-white/5 flex items-center justify-center">
          <svg className={`w-3 h-3 ${colorMap[project.color].split(' ')[0]}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {project.type === "Enterprise" && (
              <>
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </>
            )}
            {project.type === "AI / ML" && (
              <>
                <path d="M9 9h6v6H9z"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3"/>
              </>
            )}
            {project.type === "Cloud" && <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>}
            {project.type === "Marketing" && <path d="m3 11 18-5v12L3 13v-2z"/>}
            {project.type === "CX Design" && <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>}
            {project.type === "Consulting" && (
              <>
                <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
              </>
            )}
          </svg>
        </span>
      </div>
      <p className="text-[11px] font-semibold text-zinc-200 mb-1">{project.title}</p>
      <p className="text-[9px] text-zinc-500 mb-2">{project.tech}</p>
      <div className="mt-auto">
        {project.completed ? (
          <div className="flex items-center gap-1.5">
            <svg className={`w-3 h-3 ${colorMap[project.color].split(' ')[0]}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
            <span className={`text-[9px] font-semibold ${colorMap[project.color].split(' ')[0]}`}>Completed</span>
          </div>
        ) : (
          <>
            <div className="flex justify-between text-[8px] text-zinc-500 mb-1">
              <span>Progress</span>
              <span className={colorMap[project.color].split(' ')[0]}>{project.progress}%</span>
            </div>
            <div className="w-full h-1 rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${project.progress}%` }}
                transition={{ duration: 1.5, delay: delay + 0.3 }}
                viewport={{ once: true }}
                className={`h-full rounded-full bg-linear-to-r ${progressColorMap[project.color]}`}
              />
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

function AnalyticsWidget({ metrics }: { metrics: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, y: -10 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay: 1.2 }}
      viewport={{ once: true }}
      className="hidden md:block absolute top-14 right-4 md:right-5 w-40 md:w-48 rounded-xl border border-white/10 bg-[#0c1220]/90 backdrop-blur-md p-3 shadow-xl shadow-black/30 z-20"
      style={{ transform: "translateZ(40px)" }}
    >
      <div className="flex items-center gap-1.5 mb-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span className="text-[10px] font-bold text-white tracking-wide">Live Analytics</span>
      </div>
      <div className="space-y-2">
        <Metric metric="Revenue" value={metrics.revenue} color="emerald" delay={1.4} />
        <Metric metric="Conversion" value={metrics.conversion} color="indigo" delay={1.6} />
        <Metric metric="Active Users" value={metrics.users} color="amber" delay={1.8} />
      </div>
    </motion.div>
  );
}

function Metric({ metric, value, color, delay }: any) {
  const gradientMap: Record<string, string> = {
    emerald: "from-emerald-500 to-green-400",
    indigo: "from-indigo-500 to-violet-500",
    amber: "from-amber-500 to-orange-400",
  };
  const textMap: Record<string, string> = {
    emerald: "text-emerald-400",
    indigo: "text-indigo-400",
    amber: "text-amber-400",
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <span className="text-[9px] text-zinc-500">{metric}</span>
        <span className={`text-[10px] font-bold ${textMap[color]}`}>{value}</span>
      </div>
      <div className="w-full h-0.5 rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "70%" }}
          transition={{ duration: 1.5, delay }}
          viewport={{ once: true }}
          className={`h-full rounded-full bg-linear-to-r ${gradientMap[color]}`}
        />
      </div>
    </>
  );
}

function TerminalWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20, y: 10 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay: 1.4 }}
      viewport={{ once: true }}
      className="hidden md:block absolute bottom-3 left-3 md:left-16 w-56 md:w-64 rounded-xl border border-white/10 bg-[#0c1220]/90 backdrop-blur-md p-3 shadow-xl shadow-black/30 z-20"
      style={{ transform: "translateZ(30px)" }}
    >
      <div className="flex items-center gap-1.5 mb-2">
        <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
        <span className="text-[11px] font-semibold text-zinc-300">Terminal</span>
      </div>
      <div className="font-mono text-[10px] text-zinc-500 leading-relaxed space-y-0.5 mb-2.5">
        <div>
          <span className="text-indigo-400">$</span>{" "}
          <span className="text-zinc-300">triveda deploy --production</span>
        </div>
        <div className="text-zinc-600">Building enterprise modules...</div>
        <div>
          <span className="text-emerald-400">✓</span>{" "}
          <span className="text-zinc-400">API Gateway configured</span>
        </div>
        <div>
          <span className="text-emerald-400">✓</span>{" "}
          <span className="text-zinc-400">Cloud infrastructure ready</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 w-fit">
        <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <span className="text-[10px] font-semibold text-emerald-400">Deployed Successfully</span>
      </div>
    </motion.div>
  );
}
