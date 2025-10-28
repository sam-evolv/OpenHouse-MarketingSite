"use client";

import { Container } from "../ui/container";
import content from "@/i18n/en.json";
import { Shield, Lock, Database, Globe } from "lucide-react";

const icons = [Database, Shield, Lock, Globe];

export function SecurityStrip() {
  return (
    <section className="py-16 bg-slate border-y border-hint/10">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-heading-lg font-bold text-porcelain mb-2">
            {content.security.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.security.bullets.map((bullet, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-porcelain text-sm font-medium">{bullet}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
