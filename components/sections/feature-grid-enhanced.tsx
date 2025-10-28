"use client";

import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Reveal } from "../effects/Reveal";
import { Parallax } from "../effects/Parallax";
import content from "@/i18n/en.json";
import { MessageSquare, Zap, BarChart3, Lock } from "lucide-react";

const icons = [MessageSquare, Zap, BarChart3, Lock];

export function FeatureGridEnhanced() {
  return (
    <section className="py-24 bg-carbon">
      <Container>
        <SectionHeading
          title={content.features.title}
          description={content.features.description}
          badge="Features"
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.features.items.map((feature, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={index} delay={index * 0.1}>
                <Card className="h-full hover:border-gold/50 transition-all">
                  <CardHeader>
                    <Parallax strength={20}>
                      <div className="w-16 h-16 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-gold" />
                      </div>
                    </Parallax>
                    <CardTitle className="text-heading-md">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-hint text-body-md">{feature.description}</p>
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
