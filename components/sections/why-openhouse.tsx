"use client";

import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Reveal } from "../effects/Reveal";
import content from "@/i18n/en.json";
import { Building2, TrendingDown, Shield, Zap, Cpu } from "lucide-react";

const icons = [Building2, TrendingDown, Shield, Zap, Cpu];

export function WhyOpenHouse() {
  return (
    <section className="py-28 bg-slate">
      <Container>
        <SectionHeading
          title={content.whyOpenHouse.title}
          badge="Trust"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {content.whyOpenHouse.cards.map((card: any, index: number) => {
            const Icon = icons[index];
            return (
              <Reveal key={index} delay={index * 0.1}>
                <Card className="p-6 hover:border-gold/50 transition-all flex flex-col h-[220px] justify-between">
                  <CardHeader className="p-0">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <CardTitle className="text-heading-sm">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-hint text-body-sm">{card.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
