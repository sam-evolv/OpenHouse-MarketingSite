"use client";

import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../effects/Reveal";
import content from "@/i18n/en.json";
import { Shield, Lock, Database, Globe, FileCheck, Building2 } from "lucide-react";

const icons = [Shield, Database, FileCheck, Globe, Lock, Building2];

export function SecurityStrip() {
  return (
    <section className="py-28 bg-carbon">
      <Container>
        <SectionHeading
          title={content.security.title}
          badge="Security & Compliance"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.security.bullets.map((bullet, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={index} delay={index * 0.05}>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-gold/40 hover:shadow-lg hover:shadow-black/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div className="flex-1">
                      <p className="text-porcelain text-body-md font-medium">{bullet}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
