"use client";

import { ArrowRight, Download } from "lucide-react";

export function FooterCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-carbon to-slate border-t border-gold/10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-porcelain mb-4">
            Ready to transform your resident experience?
          </h2>
          <p className="text-lg text-porcelain/60 mb-10 max-w-2xl mx-auto">
            Join leading developers using AI to deliver exceptional support and reduce after-sales costs by up to 90%.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-carbon font-semibold rounded-full hover:bg-gold/90 transition-all shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:scale-105"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/overview.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 text-porcelain/70 hover:text-gold transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Overview PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
