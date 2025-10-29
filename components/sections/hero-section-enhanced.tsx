"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { HeadlineMaskScroll } from "@/components/fx/HeadlineMaskScroll";
import { Magnetic } from "@/components/interactive/Magnetic";
import { Reveal } from "@/components/effects/Reveal";
import content from "@/i18n/en.json";

const ArchitecturalScene = dynamic(
  () => import("@/components/FX/ArchitecturalScene").then((mod) => ({ default: mod.ArchitecturalScene })),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-b from-carbon via-slate-900 to-carbon animate-pulse" />
    ),
  }
);

export function HeroSectionEnhanced() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-carbon">
      {/* Architectural R3F Background with static fallback */}
      <div className="absolute inset-0 -z-10">
        {/* Static architectural gradient - always visible */}
        <div 
          className="absolute inset-0" 
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 40%, rgba(246, 197, 110, 0.12) 0%, transparent 50%),
              linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 50%, #0A0A0A 100%)
            `
          }}
        >
          {/* Subtle grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(246, 197, 110, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(246, 197, 110, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        {/* R3F Scene (currently not rendering - debugging in progress) */}
        {/* <ArchitecturalScene /> */}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <HeadlineMaskScroll
          text={content.hero.title}
          sub={content.hero.subtitle}
          className="mb-8"
        />

        <Reveal delay={1.2}>
          <div className="flex gap-4 justify-center">
            <Magnetic>
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-carbon font-semibold" asChild>
                <a href="/contact">{content.hero.cta_primary}</a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10">
                {content.hero.cta_secondary}
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
