import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { heroContent } from "./home-content";
import { LivingHomeDiagram } from "./LivingHomeDiagram";
import { HeroSequencePlayer } from "./HeroSequencePlayer";

export function LivingHomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-carbon pt-32 text-white sm:pt-36 lg:min-h-[900px] lg:pt-44" aria-labelledby="home-hero-title">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_28%,rgba(212,175,55,0.12),transparent_34%),linear-gradient(180deg,#0A0A0A_0%,#0A0A0A_72%,#0D0D0B_100%)]" aria-hidden="true" />
      <div className="absolute inset-y-0 left-[8%] -z-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" aria-hidden="true" />
      <div className="absolute inset-y-0 right-[8%] -z-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" aria-hidden="true" />

      <Container>
        <div className="grid items-center gap-14 pb-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10 lg:pb-28">
          <div className="relative z-30 max-w-2xl">
            <p className="mb-6 text-[0.6875rem] font-semibold uppercase tracking-[0.26em] text-gold">{heroContent.eyebrow}</p>
            <h1 id="home-hero-title" className="max-w-[12ch] font-heading text-[clamp(3.2rem,7.2vw,6.8rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-white">
              {heroContent.headline}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-porcelain/65 sm:text-lg lg:text-xl">{heroContent.support}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={heroContent.primaryAction.href}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-carbon transition-colors hover:bg-[#e1c25c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {heroContent.primaryAction.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                href={heroContent.commercialAction.href}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-porcelain/82 transition-colors hover:border-gold/45 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {heroContent.commercialAction.label}
              </Link>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-porcelain/40">{heroContent.proof}</p>
          </div>

          <div className="relative z-10 mx-auto h-[520px] w-full max-w-[720px] sm:h-[600px] lg:-mr-16 lg:h-[640px] lg:max-w-none">
            <LivingHomeDiagram />
            <HeroSequencePlayer />
          </div>
        </div>
      </Container>

      <div className="border-t border-white/8">
        <Container>
          <div className="grid gap-4 py-6 text-[0.6875rem] uppercase tracking-[0.14em] text-porcelain/35 sm:grid-cols-3 sm:items-center sm:gap-6">
            <p>House-type and home-specific context</p>
            <p className="sm:text-center">Answers with visible sources</p>
            <p className="sm:text-right">Developer gaps and recurring questions</p>
          </div>
        </Container>
      </div>
    </section>
  );
}
