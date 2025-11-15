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

        <div className="mt-16 flex flex-col md:flex-row gap-10 md:gap-16 w-full">
          {/* CARD 1 - Platform Architecture */}
          <Reveal className="w-full md:w-1/2 bg-black/20 border border-white/5 rounded-2xl p-10 h-[700px] flex flex-col justify-start space-y-6">
            <h3 className="text-heading-lg font-bold text-porcelain">
              A Modern Multi-Tenant Platform Architected for Scale.
            </h3>

            <ul className="grid grid-rows-7 auto-rows-[1fr] gap-4 flex-1">
              {content.problem.bullets.map((bullet: string, index: number) => (
                <li key={index} className="flex items-start gap-3 leading-snug">
                  <Check className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                  <span className="block text-hint text-body-md">{bullet}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* CARD 2 - Business Outcomes */}
          <Reveal delay={0.1} className="w-full md:w-1/2 bg-black/20 border border-white/5 rounded-2xl p-10 h-[700px] flex flex-col justify-start space-y-6">
            <h3 className="text-heading-lg font-bold text-porcelain">
              Built for Developers. Loved by Residents.
            </h3>

            <ul className="grid grid-rows-7 auto-rows-[1fr] gap-4 flex-1">
              {content.solution.benefits.map((bullet: string, index: number) => (
                <li key={index} className="flex items-start gap-3 leading-snug">
                  <Check className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                  <span className="block text-hint text-body-md">{bullet}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
