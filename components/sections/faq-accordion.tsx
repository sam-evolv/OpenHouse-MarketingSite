"use client";

import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../effects/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import content from "@/i18n/en.json";

export function FAQAccordion() {
  return (
    <section className="py-28 bg-carbon">
      <Container className="max-w-4xl">
        <SectionHeading
          title={content.faqExtended.title}
          badge="FAQ"
        />

        <Reveal delay={0.2}>
          <Accordion type="single" collapsible className="mt-16 space-y-4">
            {content.faqExtended.items.map((item: any, index: number) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/10 rounded-lg px-6 bg-white/5 hover:bg-white/10 transition-all"
              >
                <AccordionTrigger className="text-left text-porcelain font-semibold hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-hint text-body-md pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}
