"use client";

import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../effects/Reveal";
import { Check } from "lucide-react";
import content from "@/i18n/en.json";

export function ProblemSolutionEnhanced() {
  return (
    <section className="py-28 bg-slate">
      <Container>
        <SectionHeading
          title={content.solution.title}
          badge="Why OpenHouse AI"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT COLUMN - Platform Architecture */}
          <div>
            <Reveal>
              <h3 className="text-heading-lg font-bold text-porcelain mb-8">
                {content.problem.title}
              </h3>
            </Reveal>

            <Reveal stagger staggerDelay={0.1} className="space-y-4">
              {content.problem.bullets.map((bullet: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <p className="text-hint text-body-md">{bullet}</p>
                </div>
              ))}
            </Reveal>
          </div>

          {/* RIGHT COLUMN - Developer Value Points */}
          <div>
            <Reveal>
              <h3 className="text-heading-lg font-bold text-porcelain mb-8">
                Built for Developers. Loved by Residents.
              </h3>
            </Reveal>

            <Reveal stagger staggerDelay={0.1} className="space-y-6">
              {content.solution.benefits.map((bullet: string, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-porcelain text-body-lg font-medium">{bullet}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
