"use client";

import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import content from "@/i18n/en.json";

export function HowItWorks() {
  return (
    <section className="py-24 bg-slate">
      <Container>
        <SectionHeading
          title={content.how_it_works.title}
          badge="Simple Process"
        />
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {content.how_it_works.steps.map((step, index) => (
            <div key={index} className="relative">
              {index < content.how_it_works.steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gold/20" style={{ transform: "translateX(-50%)" }} />
              )}
              <div className="relative bg-carbon/50 border border-gold/20 rounded-lg p-8 hover:border-gold/50 transition-colors">
                <div className="text-6xl font-bold text-gold/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-heading-md font-bold text-porcelain mb-3">
                  {step.title}
                </h3>
                <p className="text-body-md text-hint">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
