"use client";

import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import content from "@/i18n/en.json";

export function FAQSection() {
  return (
    <section className="py-24 bg-carbon">
      <Container>
        <SectionHeading
          title={content.faq.title}
          badge="FAQ"
        />

        <div className="mt-16 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {content.faq.items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-body-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-body-md">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center bg-slate/50 border border-gold/20 rounded-lg p-12">
          <h3 className="text-heading-lg font-bold text-porcelain mb-4">
            Ready to transform your development?
          </h3>
          <p className="text-body-lg text-hint mb-8 max-w-2xl mx-auto">
            Join leading developers using AI to deliver exceptional resident experiences.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center h-14 px-8 text-base font-medium rounded-lg bg-gold text-carbon hover:bg-gold/90 transition-colors"
          >
            Book your demo
          </a>
        </div>
      </Container>
    </section>
  );
}
