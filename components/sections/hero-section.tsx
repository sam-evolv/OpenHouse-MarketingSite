"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";
import content from "@/i18n/en.json";

const Hero3D = dynamic(() => import("../three/Hero3D").then((mod) => ({ default: mod.Hero3D })), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-slate to-carbon">
      <div className="text-gold">Loading experience...</div>
    </div>
  ),
});

export function HeroSection() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 3D Canvas or Fallback */}
      <div className="absolute inset-0 z-0">
        {prefersReducedMotion ? (
          <div className="w-full h-full bg-gradient-to-b from-slate via-carbon to-carbon flex items-center justify-center">
            <video
              poster="/hero-poster.jpg"
              className="w-full h-full object-cover opacity-50"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
          </div>
        ) : (
          <Hero3D />
        )}
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <h1 className="text-display-md sm:text-display-lg font-bold text-porcelain mb-6 animate-fade-in-up">
              {content.hero.title}
            </h1>
            <p className="text-body-lg sm:text-heading-md text-hint mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {content.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" asChild>
                <a href="/contact">{content.hero.cta_primary}</a>
              </Button>
              <Button size="lg" variant="outline" onClick={() => setShowVideo(true)}>
                {content.hero.cta_secondary}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2" />
        </div>
      </div>

      {/* noscript fallback */}
      <noscript>
        <div className="absolute inset-0 z-20 bg-carbon flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h1 className="text-display-md font-bold text-porcelain mb-6">
              {content.hero.title}
            </h1>
            <p className="text-body-lg text-hint mb-8">
              {content.hero.subtitle}
            </p>
            <img src="/hero-poster.jpg" alt="OpenHouse AI" className="w-full rounded-lg" />
          </div>
        </div>
      </noscript>
    </section>
  );
}
