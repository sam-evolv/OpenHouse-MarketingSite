"use client";

import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Reveal } from "../effects/Reveal";
import { Parallax } from "../effects/Parallax";
import content from "@/i18n/en.json";
import { MessageSquare, Map, Bell, Globe, BarChart3, Shield, Lock, Server } from "lucide-react";

const icons = [MessageSquare, Map, Map, Bell, Globe, BarChart3, Shield, Lock];

export function FeatureGridEnhanced() {
  return (
    <section className="py-28 bg-carbon">
      <Container>
        <SectionHeading
          title={content.features.title}
          badge="Features"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.features.items.map((feature, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={index} delay={index * 0.1}>
                <Card className="min-h-[260px] flex flex-col justify-between p-6 hover:border-gold/50 transition-all">
                  <CardHeader className="p-0 mb-4">
                    <Parallax strength={20}>
                      <div className="w-16 h-16 rounded-lg bg-gold/10 flex items-center justify-center mb-4 hover-animate">
                        <Icon className="w-8 h-8 text-gold" aria-hidden="true" />
                      </div>
                    </Parallax>
                    <CardTitle className="text-heading-md line-clamp-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-hint text-body-md line-clamp-2">{feature.description}</p>
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
