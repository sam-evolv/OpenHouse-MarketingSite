"use client";

import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import content from "@/i18n/en.json";
import {
  MessageSquare,
  FileText,
  Map,
  Bell,
  Globe,
  BarChart3,
  Shield,
  Lock,
} from "lucide-react";

const icons = [
  MessageSquare,
  FileText,
  Map,
  Bell,
  Globe,
  BarChart3,
  Shield,
  Lock,
];

export function FeatureGrid() {
  return (
    <section className="py-24 bg-carbon">
      <Container>
        <SectionHeading
          title={content.features.title}
          description="Built for modern property developers and managing agents"
          badge="Features"
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.features.items.map((feature, index) => {
            const Icon = icons[index];
            return (
              <Card key={index} className="group hover:border-gold/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center h-14 px-8 text-base font-medium rounded-lg border-2 border-gold/60 text-gold hover:border-gold hover:bg-gold/10 transition-colors"
          >
            See it in action
          </a>
        </div>
      </Container>
    </section>
  );
}
