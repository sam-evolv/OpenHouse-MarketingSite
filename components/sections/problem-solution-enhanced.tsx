"use client";

import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../effects/Reveal";
import { MaskImage } from "../effects/MaskImage";
import { Check, X } from "lucide-react";
import content from "@/i18n/en.json";

export function ProblemSolutionEnhanced() {
  return (
    <section className="py-24 bg-slate">
      <Container>
        <SectionHeading
          title={content.solution.title}
          description={content.solution.description}
          badge="The Challenge"
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-16">
          <div>
            <Reveal>
              <h3 className="text-heading-lg font-bold text-porcelain mb-8">
                {content.problem.title}
              </h3>
            </Reveal>

            <Reveal stagger staggerDelay={0.1} className="space-y-4">
              {content.problem.bullets.map((bullet: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-1">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-hint text-body-md">{bullet}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <div>
            <Reveal>
              <h3 className="text-heading-lg font-bold text-porcelain mb-8">
                How OpenHouse Helps
              </h3>
            </Reveal>

            <Reveal stagger staggerDelay={0.1} className="space-y-4">
              {["24/7 instant answers", "Centralized knowledge base", "Reduced support load", "Better buyer experience"].map((bullet: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <p className="text-hint text-body-md">{bullet}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        <div className="mt-16">
          <MaskImage
            src="/images/dashboard.jpg"
            alt="OpenHouse AI Dashboard"
            width={1200}
            height={675}
            className="rounded-lg overflow-hidden border border-hint/20"
          />
        </div>
      </Container>
    </section>
  );
}
