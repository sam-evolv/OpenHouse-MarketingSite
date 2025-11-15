"use client";

import { Container } from "../ui/container";
import { Reveal } from "../effects/Reveal";
import content from "@/i18n/en.json";
import { ArrowRight, Download } from "lucide-react";

export function FooterCTA() {
  return (
    <section className="py-28 bg-slate">
      <Container>
        <Reveal>
          <div className="bg-carbon/30 rounded-2xl p-12 md:p-16 text-center border border-gold/20">
            <h2 className="text-heading-xl md:text-display-sm font-bold text-porcelain mb-6">
              {content.footerCta.title}
            </h2>
            <p className="text-body-lg text-hint mb-10 max-w-3xl mx-auto">
              {content.footerCta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-carbon font-semibold rounded-lg hover:bg-gold/90 transition-all shadow-lg shadow-gold/20 hover:shadow-gold/30"
              >
                {content.footerCta.buttons.primary}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/overview.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-gold/40 text-gold font-semibold rounded-lg hover:border-gold hover:bg-gold/10 transition-all"
              >
                <Download className="w-5 h-5" />
                {content.footerCta.buttons.secondary}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
