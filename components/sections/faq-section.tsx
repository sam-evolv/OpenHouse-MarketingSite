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
    <section className="py-28 bg-slate">
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

      </Container>
    </section>
  );
}
