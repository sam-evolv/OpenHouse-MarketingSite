import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { PlatformFloatingCards } from "@/components/hero/cards/PlatformCards";
import heroBackground from "@/attached_assets/stock_images/build_construction_aerial.png";
import { Building2, Database, GraduationCap, LineChart, ShieldCheck, ArrowRight, Check, FileCheck2, Home } from "lucide-react";

export const metadata = {
  title: "OpenHouse for Builders, Better homes beyond handover",
  description: "Capture home context during construction, give purchasers better support, and build an evidence layer for energy education and portfolio improvement.",
};

const outcomes = [
  { icon: Database, title: "Capture the truth at source", body: "Drawings, specifications, dimensions, materials, systems, manuals, warranties and commissioning records stay connected to each home." },
  { icon: GraduationCap, title: "Educate every purchaser", body: "Turn technical documents into home-specific guidance for heating, ventilation, solar, EV charging, warranties and everyday care." },
  { icon: LineChart, title: "Learn across the scheme", body: "See recurring questions, missing information and common system misunderstandings as anonymised portfolio patterns." },
  { icon: ShieldCheck, title: "Support evidence, not claims", body: "Organise the homeowner education and source documents relevant to BER, NZEB, Part L, Part F and HPI-aligned delivery." },
];

const standards = [
  "BER and NZEB context for the individual home",
  "Part L energy and carbon source documents",
  "Part F ventilation guidance and commissioning records",
  "Heat pump, solar, EV charger and smart-meter education",
  "Home User Guide and aftercare evidence relevant to IGBC Home Performance Index workflows",
  "An audit trail showing what information was delivered and used",
];

export default function DeveloperDashboardPage() {
  return (
    <div>
      <ModuleHero
        backgroundImage={heroBackground}
        backgroundAlt="A new residential development under construction"
        imagePosition="object-center"
        accentColor="gold"
        badge={<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30"><Building2 className="w-4 h-4 text-gold" aria-hidden="true" /><span className="text-sm font-medium text-gold">For builders and developers</span></div>}
        title={<>Build the home once. Keep its <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">intelligence</span> for life.</>}
        subtitle="OpenHouse captures construction-stage home context, turns it into a living home model, and gives purchasers useful support from the day they move in."
        primaryCta={{ href: "#builder-value", label: "See the builder value" }}
        secondaryCta={{ href: "/contact", label: "Book a Demo" }}
      >
        <PlatformFloatingCards />
      </ModuleHero>

      <section id="builder-value" className="relative py-24 bg-porcelain scroll-mt-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-4 font-semibold">Why construction matters</p>
            <h2 className="text-[32px] sm:text-5xl font-bold text-carbon font-heading leading-tight mb-6">The best time to make a home intelligent is while it is being built.</h2>
            <p className="text-[17px] sm:text-xl text-carbon/70 leading-relaxed">After handover, the context of a home gets scattered across teams, folders, suppliers and owners. OpenHouse captures it once and keeps it useful.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {outcomes.map((item) => (
              <div key={item.title} className="p-7 rounded-2xl border border-carbon/10 bg-white hover:border-amber-600/35 transition-all duration-500">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-5"><item.icon className="w-5 h-5 text-amber-700" aria-hidden="true" /></div>
                <h3 className="text-xl font-semibold text-carbon font-heading mb-3">{item.title}</h3>
                <p className="text-[16px] text-carbon/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-24 sm:py-32 bg-carbon overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.05] via-transparent to-gold/[0.06]" aria-hidden="true" />
        <Container>
          <div className="relative max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">From paperwork to purchaser value</p>
            <h2 className="text-[32px] sm:text-5xl font-bold text-white font-heading leading-tight mb-6">A better home experience is part of the build.</h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">OpenHouse turns the information already produced during construction into an assistant, an education layer and a long-term record for the purchaser.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {["Before keys: organise home-specific documents, systems and guidance.", "First 90 days: explain heating, ventilation, tariffs, warranties and common questions.", "Over time: identify recurring education gaps and improve future schemes."].map((item) => (
              <div key={item} className="flex items-start gap-3 p-6 rounded-2xl border border-white/10 bg-white/[0.04]"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" /><p className="text-[16px] text-porcelain/80 leading-relaxed">{item}</p></div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-6"><FileCheck2 className="w-6 h-6 text-amber-700" aria-hidden="true" /></div>
            <h2 className="text-[32px] sm:text-5xl font-bold text-carbon font-heading leading-tight mb-6">Make education and evidence easier to deliver.</h2>
            <p className="text-[17px] sm:text-xl text-carbon/70 leading-relaxed">OpenHouse does not certify regulatory compliance and does not replace the builder, BER assessor, engineer or sustainability consultant. It helps organise the source information, purchaser guidance and evidence around the home.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {standards.map((item) => <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-carbon/10 bg-white"><Check className="w-4 h-4 text-amber-700 flex-shrink-0 mt-1" aria-hidden="true" /><span className="text-[15px] text-carbon/75 leading-relaxed">{item}</span></div>)}
          </div>
        </Container>
      </section>

      <section className="relative py-28 sm:py-36 bg-carbon overflow-hidden">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Home className="w-8 h-8 text-gold mx-auto mb-6" aria-hidden="true" />
            <h2 className="text-[32px] sm:text-5xl lg:text-[60px] font-bold text-white font-heading leading-[1.05] mb-6">Start with one real scheme.</h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed max-w-2xl mx-auto mb-10">Bring one house type, its systems and its purchaser information. We will show you what the living home model looks like against your own build context.</p>
            <Link href="/contact" className="group inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-carbon hover:scale-[1.03] transition-all duration-300">Book a Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" /></Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
