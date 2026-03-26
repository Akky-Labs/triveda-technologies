"use client";

import React from "react";

export function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Ambient glow orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/15 blur-[150px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[45%] h-[45%] rounded-full bg-violet-600/10 blur-[150px] animate-pulse delay-1000" />
      <div className="absolute top-[30%] left-[40%] w-[25%] h-[25%] rounded-full bg-blue-600/8 blur-[120px]" />
      <div className="absolute top-[60%] right-[20%] w-[20%] h-[20%] rounded-full bg-cyan-500/5 blur-[100px]" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay opacity-20" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,7,18,0.4)_70%,rgba(3,7,18,0.8)_100%)]" />
    </div>
  );
}
