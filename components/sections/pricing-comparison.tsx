"use client";

import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../effects/Reveal";
import content from "@/i18n/en.json";
import { Check, X } from "lucide-react";

export function PricingComparison() {
  return (
    <section 
      className="py-28 bg-slate"
      aria-labelledby="comparison-heading"
    >
      <Container>
        <SectionHeading
          title={content.pricingComparison.title}
        />

        <Reveal delay={0.2}>
          <div 
            className="mt-16 border border-white/10 rounded-xl p-8 bg-white/5 overflow-x-auto"
            role="region"
            aria-label="Feature comparison table"
          >
            <table className="w-full" role="table">
              <thead>
                <tr className="border-b border-white/10">
                  <th 
                    className="text-left py-4 px-4 text-porcelain font-semibold"
                    scope="col"
                  >
                    Feature
                  </th>
                  <th 
                    className="text-center py-4 px-4 text-porcelain font-semibold"
                    scope="col"
                  >
                    Starter
                  </th>
                  <th 
                    className="text-center py-4 px-4 text-porcelain font-semibold"
                    scope="col"
                  >
                    Growth
                  </th>
                  <th 
                    className="text-center py-4 px-4 text-porcelain font-semibold"
                    scope="col"
                  >
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.pricingComparison.features.map((feature: any, index: number) => (
                  <tr 
                    key={index} 
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td 
                      className="py-4 px-4 text-porcelain/80"
                      scope="row"
                    >
                      {feature.name}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {renderCell(feature.starter, feature.name, "Starter")}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {renderCell(feature.growth, feature.name, "Growth")}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {renderCell(feature.enterprise, feature.name, "Enterprise")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div 
            className="mt-20 border-2 border-gold/40 rounded-xl p-8 bg-gold/5 text-center"
            role="region"
            aria-label="Enterprise contact section"
          >
            <h3 className="text-heading-lg font-bold text-porcelain mb-4">
              {content.pricingComparison.enterpriseCta.title}
            </h3>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-carbon font-semibold rounded-lg hover:bg-gold/90 transition-all shadow-lg shadow-gold/20"
              aria-label="Contact sales for enterprise pricing"
            >
              {content.pricingComparison.enterpriseCta.button}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function renderCell(value: string, featureName: string, tierName: string) {
  if (value.toLowerCase() === "yes") {
    return (
      <span role="img" aria-label={`${featureName} is included in ${tierName}`}>
        <Check className="w-5 h-5 text-gold mx-auto" aria-hidden="true" />
      </span>
    );
  }
  if (value.toLowerCase() === "no") {
    return (
      <span role="img" aria-label={`${featureName} is not included in ${tierName}`}>
        <X className="w-5 h-5 text-porcelain/30 mx-auto" aria-hidden="true" />
      </span>
    );
  }
  return <span className="text-sm text-porcelain/80">{value}</span>;
}
