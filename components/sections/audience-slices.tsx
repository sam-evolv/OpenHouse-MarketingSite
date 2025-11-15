"use client";

import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import content from "@/i18n/en.json";
import { Building2, Users, Home } from "lucide-react";

const icons = [Building2, Users, Home];
const audiences = [
  { ...content.audience.developers, icon: 0 },
  { ...content.audience.agents, icon: 1 },
  { ...content.audience.residents, icon: 2 },
];

export function AudienceSlices() {
  return (
    <section className="py-28 bg-carbon">
      <Container>
        <SectionHeading
          title={content.audience.title}
          badge="Who We Serve"
        />

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = icons[audience.icon];
            return (
              <Card key={index} className="hover:border-gold/50 transition-all">
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <CardTitle className="text-heading-md">{audience.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-hint text-body-md">{audience.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
