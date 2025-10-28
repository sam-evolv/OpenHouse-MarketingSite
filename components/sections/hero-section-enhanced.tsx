"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { SplitText } from "@/components/effects/SplitText";
import { Magnetic } from "@/components/interactive/Magnetic";
import { Reveal } from "@/components/effects/Reveal";
import content from "@/i18n/en.json";

const Hero3D = dynamic(() => import("@/components/three/Hero3D").then((mod) => ({ default: mod.Hero3D })), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-carbon">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-poster.jpg"
        className="w-full h-full object-cover opacity-50"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
    </div>
  ),
});

export function HeroSectionEnhanced() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-carbon">
      <div className="absolute inset-0 z-0">
        <Hero3D />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <SplitText
          as="h1"
          className="text-display-lg font-bold mb-6 text-porcelain"
          stagger={0.08}
          delay={0.2}
        >
          {content.hero.title}
        </SplitText>

        <Reveal delay={0.8}>
          <p className="text-heading-md text-hint max-w-3xl mx-auto mb-8">
            {content.hero.description}
          </p>
        </Reveal>

        <Reveal delay={1.2}>
          <div className="flex gap-4 justify-center">
            <Magnetic>
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-carbon font-semibold">
                {content.hero.cta.primary}
              </Button>
            </Magnetic>
            <Magnetic>
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10">
                {content.hero.cta.secondary}
              </Button>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={1.5}>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gold"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
