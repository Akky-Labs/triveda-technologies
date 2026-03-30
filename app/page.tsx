"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useMagneticCursor } from "@/hooks/use-magnetic-cursor";
import { BackgroundGradient } from "@/components/sections/background-gradient";
import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";

const ServicesSection = dynamic(() => import("@/components/sections/services-section").then(mod => mod.ServicesSection), { ssr: true });
const WorkflowSection = dynamic(() => import("@/components/sections/workflow-section").then(mod => mod.WorkflowSection), { ssr: true });
const WhyChooseSection = dynamic(() => import("@/components/sections/why-choose-section").then(mod => mod.WhyChooseSection), { ssr: true });
const TeamSection = dynamic(() => import("@/components/sections/team-section").then(mod => mod.TeamSection), { ssr: true });
const StatsSection = dynamic(() => import("@/components/sections/stats-section").then(mod => mod.StatsSection), { ssr: true });
const IndustriesSection = dynamic(() => import("@/components/sections/industries-section").then(mod => mod.IndustriesSection), { ssr: true });
const FAQSection = dynamic(() => import("@/components/sections/faq-section").then(mod => mod.FAQSection), { ssr: true });
const ContactCTA = dynamic(() => import("@/components/sections/contact-cta").then(mod => mod.ContactCTA), { ssr: true });
const Footer = dynamic(() => import("@/components/sections/footer").then(mod => mod.Footer), { ssr: true });

import { FloatingActions } from "@/components/ui/floating-actions";
import { CinematicPanel } from "@/components/ui/cinematic-panel";
import { PortalRevealSection } from "@/components/ui/portal-reveal";
import { ParallaxTextStrip } from "@/components/ui/parallax-text-strip";

export default function HomePage() {
  useMagneticCursor();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen selection:bg-indigo-500/30 selection:text-white">
      <BackgroundGradient />
      <Navbar />

      <HeroSection />

      <div className="relative">
        <CinematicPanel index={0}>
          <AboutSection />
        </CinematicPanel>
      </div>

      <ServicesSection />
      <WorkflowSection />

      <div className="relative">
        <CinematicPanel index={0}>
          <WhyChooseSection />
        </CinematicPanel>
      </div>

      <TeamSection />

      <ParallaxTextStrip />
      <StatsSection />

      <PortalRevealSection>
        <IndustriesSection />
      </PortalRevealSection>

      <FAQSection />
      <ContactCTA />
      <Footer />
      <FloatingActions />
    </main>
  );
}
