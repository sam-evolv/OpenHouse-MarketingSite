"use client";

import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../effects/Reveal";
import content from "@/i18n/en.json";
import { User, Bot, Database, LayoutDashboard, Building, ArrowRight } from "lucide-react";

const flowIcons = [User, Bot, Database, LayoutDashboard, Building];

export function ArchitectureDiagram() {
  return (
    <section className="py-28 bg-carbon">
      <Container className="max-w-5xl">
        <SectionHeading
          title={content.architecture.title}
          description={content.architecture.subtitle}
        />

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {content.architecture.flow.map((step: any, index: number) => {
              const Icon = flowIcons[index];
              return (
                <div key={index} className="flex items-center gap-4 md:gap-6">
                  {/* Box */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl border-2 border-gold/30 bg-gold/5 flex items-center justify-center mb-3 hover:border-gold/60 hover:bg-gold/10 transition-all">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-gold" />
                    </div>
                    <p className="text-porcelain font-semibold text-sm md:text-base mb-1">
                      {step.label}
                    </p>
                    <p className="text-hint text-xs md:text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (not on last item) */}
                  {index < content.architecture.flow.length - 1 && (
                    <ArrowRight className="hidden md:block w-6 h-6 text-gold/40 shrink-0" />
                  )}
                  {index < content.architecture.flow.length - 1 && (
                    <ArrowRight className="md:hidden w-5 h-5 text-gold/40 shrink-0 rotate-90" />
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
