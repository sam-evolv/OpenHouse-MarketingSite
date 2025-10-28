"use client";

import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import content from "@/i18n/en.json";
import { CheckCircle2 } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-24 bg-carbon">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <div>
            <SectionHeading
              title={content.problem.title}
              className="text-left"
            />
            <ul className="mt-8 space-y-4">
              {content.problem.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="text-gold mt-1">✗</div>
                  <span className="text-body-lg text-hint">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-slate/50 border border-gold/20 rounded-lg p-8">
            <h3 className="text-heading-lg font-bold text-gold mb-4">
              {content.solution.title}
            </h3>
            <p className="text-body-lg text-porcelain leading-relaxed">
              {content.solution.description}
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-gold">
              <CheckCircle2 className="w-5 h-5" />
              <span>One platform. All answers.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
