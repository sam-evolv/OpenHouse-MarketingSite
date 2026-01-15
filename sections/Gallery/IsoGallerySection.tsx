"use client";

import { Container } from "@/components/ui/container";
import { SplitText } from "@/components/effects/SplitText";
import { IsoGrid } from "@/components/iso/IsoGrid";
import { Button } from "@/components/ui/button";
import { CASE_STUDIES } from "@/data/caseStudies";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouteFx } from "@/components/transitions/useRouteFx";

export function IsoGallerySection() {
  const { start } = useRouteFx();

  return (
    <section className="py-24 bg-carbon relative overflow-hidden">
      <Container>
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium mb-6">
            Case Studies
          </span>
          <SplitText
            as="h2"
            className="text-display-sm font-bold text-porcelain mb-4"
            stagger={0.06}
          >
            Proven results across properties
          </SplitText>
          <p className="text-hint text-heading-sm max-w-2xl mx-auto">
            See how OpenHouse Ai transforms resident experience and reduces support load
            across diverse property developments.
          </p>
        </div>

        <IsoGrid items={CASE_STUDIES.slice(0, 6)} />

        <div className="mt-16 text-center">
          <Link href="/case-studies" onClick={() => start()}>
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-carbon font-semibold group"
            >
              See all case studies
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-hint text-sm mt-4">
            Isometric view - scroll to explore on touch devices
          </p>
        </div>
      </Container>
    </section>
  );
}
