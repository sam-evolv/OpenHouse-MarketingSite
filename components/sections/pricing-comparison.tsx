"use client";

import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../effects/Reveal";
import content from "@/i18n/en.json";
import { Check, X } from "lucide-react";

export function PricingComparison() {
  return (
    <section className="py-28 bg-slate">
      <Container>
        <SectionHeading
          title={content.pricingComparison.title}
        />

        <Reveal delay={0.2}>
          <div className="mt-16 border border-white/10 rounded-xl p-8 bg-white/5 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-porcelain font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-porcelain font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 text-porcelain font-semibold">Growth</th>
                  <th className="text-center py-4 px-4 text-porcelain font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {content.pricingComparison.features.map((feature: any, index: number) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 text-hint">{feature.name}</td>
                    <td className="py-4 px-4 text-center text-hint">
                      {renderCell(feature.starter)}
                    </td>
                    <td className="py-4 px-4 text-center text-hint">
                      {renderCell(feature.growth)}
                    </td>
                    <td className="py-4 px-4 text-center text-hint">
                      {renderCell(feature.enterprise)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Enterprise CTA */}
        <Reveal delay={0.4}>
          <div className="mt-20 border-2 border-gold/40 rounded-xl p-8 bg-gold/5 text-center">
            <h3 className="text-heading-lg font-bold text-porcelain mb-4">
              {content.pricingComparison.enterpriseCta.title}
            </h3>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-carbon font-semibold rounded-lg hover:bg-gold/90 transition-all shadow-lg shadow-gold/20"
            >
              {content.pricingComparison.enterpriseCta.button}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function renderCell(value: string) {
  if (value.toLowerCase() === "yes") {
    return <Check className="w-5 h-5 text-gold mx-auto" />;
  }
  if (value.toLowerCase() === "no") {
    return <X className="w-5 h-5 text-hint/30 mx-auto" />;
  }
  return <span className="text-sm">{value}</span>;
}
