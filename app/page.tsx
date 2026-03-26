"use client";

import React, { useEffect } from "react";
import { useMagneticCursor } from "@/hooks/use-magnetic-cursor";
import { BackgroundGradient } from "@/components/sections/background-gradient";
import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WorkflowSection } from "@/components/sections/workflow-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { StatsSection } from "@/components/sections/stats-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Footer } from "@/components/sections/footer";
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
