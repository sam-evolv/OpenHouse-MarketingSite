"use client";

import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../effects/Reveal";
import { Check } from "lucide-react";
import content from "@/i18n/en.json";

export function ProblemSolutionEnhanced() {
  const leftItems = content.problem.bullets;
  const rightItems = content.solution.benefits;

  return (
    <section className="py-28 bg-slate">
      <Container>
        <SectionHeading
          title={content.solution.title}
          badge="Why OpenHouse AI"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {/* CARD 1 - Platform Architecture */}
          <Reveal>
            <div className="bg-black/20 border border-white/5 rounded-2xl p-10 h-full flex flex-col">
              <h2 className="text-3xl font-bold leading-tight text-porcelain mb-8 min-h-[72px]">
                A Modern Multi-Tenant Platform Architected for Scale.
              </h2>

              <ul className="flex-1 grid grid-rows-7 gap-0">
                {leftItems.map((bullet: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 py-3 border-b border-white/5 last:border-b-0">
                    <Check className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span className="text-hint text-body-md">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* CARD 2 - Business Outcomes */}
          <Reveal delay={0.1}>
            <div className="bg-black/20 border border-white/5 rounded-2xl p-10 h-full flex flex-col">
              <h2 className="text-3xl font-bold leading-tight text-porcelain mb-8 min-h-[72px]">
                Built for Developers. Loved by Residents.
              </h2>

              <ul className="flex-1 grid grid-rows-7 gap-0">
                {rightItems.map((bullet: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 py-3 border-b border-white/5 last:border-b-0">
                    <Check className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span className="text-hint text-body-md">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
