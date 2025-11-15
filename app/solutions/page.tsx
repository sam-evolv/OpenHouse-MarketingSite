"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/effects/Reveal";
import content from "@/i18n/en.json";
import { Building2, Users, Home, Headphones, FileCheck, Globe, MessageSquare, Check } from "lucide-react";

const stakeholderIcons = {
  developers: Building2,
  omcs: Users,
  residents: Home,
};

const useCaseIcons = [Headphones, FileCheck, Globe, MessageSquare];

export default function SolutionsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-carbon">
      <Container>
        <SectionHeading
          title={content.solutions.title}
          description={content.solutions.subtitle}
          badge="Solutions"
        />

        {/* THREE STAKEHOLDER COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-28">
          {/* Developers */}
          <Reveal>
            <Card className="h-[540px] flex flex-col justify-start p-8 hover:border-gold/50 transition-all">
              <CardHeader className="p-0 mb-6 flex-shrink-0">
                <div className="w-16 h-16 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <Building2 className="w-8 h-8 text-gold" />
                </div>
                <CardTitle className="text-heading-lg">{content.solutions.stakeholders.developers.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 flex flex-col justify-start">
                <ul className="space-y-3">
                  {content.solutions.stakeholders.developers.bullets.map((bullet: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-hint text-body-md">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>

          {/* Property Managers */}
          <Reveal delay={0.1}>
            <Card className="h-[540px] flex flex-col justify-start p-8 hover:border-gold/50 transition-all">
              <CardHeader className="p-0 mb-6 flex-shrink-0">
                <div className="w-16 h-16 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-gold" />
                </div>
                <CardTitle className="text-heading-lg">{content.solutions.stakeholders.omcs.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 flex flex-col justify-start">
                <ul className="space-y-3">
                  {content.solutions.stakeholders.omcs.bullets.map((bullet: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-hint text-body-md">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>

          {/* Residents */}
          <Reveal delay={0.2}>
            <Card className="h-[540px] flex flex-col justify-start p-8 hover:border-gold/50 transition-all">
              <CardHeader className="p-0 mb-6 flex-shrink-0">
                <div className="w-16 h-16 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <Home className="w-8 h-8 text-gold" />
                </div>
                <CardTitle className="text-heading-lg">{content.solutions.stakeholders.residents.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 flex flex-col justify-start">
                <ul className="space-y-3">
                  {content.solutions.stakeholders.residents.bullets.map((bullet: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-hint text-body-md">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        {/* USE-CASE BLOCKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-20">
          {content.solutions.useCases.map((useCase: any, idx: number) => {
            const Icon = useCaseIcons[idx];
            return (
              <Reveal key={idx} delay={idx * 0.1}>
                <Card className="h-[220px] flex flex-col justify-start p-6 hover:border-gold/50 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 flex-shrink-0">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-heading-sm font-semibold text-porcelain mb-2 flex-shrink-0">
                    {useCase.title}
                  </h3>
                  <p className="text-hint text-body-sm flex-1">
                    {useCase.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* VISUAL PLACEHOLDER */}
        <Reveal>
          <div className="mt-20 rounded-xl border border-white/10 bg-white/5 p-12 flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-10 h-10 text-gold" />
              </div>
              <h3 className="text-heading-lg font-bold text-porcelain mb-3">
                Dashboard Preview Coming Soon
              </h3>
              <p className="text-hint text-body-md max-w-md mx-auto">
                Unified developer dashboard for managing multiple schemes, uploading documents, and tracking analytics across all developments.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
