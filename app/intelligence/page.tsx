import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { IntelligenceFloatingCards } from "@/components/hero/cards/IntelligenceCards";
import heroBackground from "@/attached_assets/stock_images/intelligence_data_network.png";
import { Zap, CircleEuro, ThermometerSun, ShieldCheck, Building2, GraduationCap, FileCheck2, ArrowRight, Check, LockKeyhole } from "lucide-react";

export const metadata = {
  title: "OpenHouse Energy Intelligence, Money Comfort and Risk",
  description: "Energy guidance grounded in the home, its fabric, systems, tariff, bills and consented usage data, with anonymised insight for builders.",
};

const lenses = [
  { icon: CircleEuro, title: "Money", body: "Explain bills, tariffs, peak use, EV charging windows and where avoidable cost may be coming from." },
  { icon: ThermometerSun, title: "Comfort", body: "Connect heating, ventilation and household settings to how the home actually feels." },
  { icon: ShieldCheck, title: "Risk", body: "Surface maintenance needs, warranty relevance, unusual patterns and the safest next step." },
];

const questions = ["Why was my electricity bill higher this month?", "Should I charge the car overnight?", "Is the heat pump running as expected?", "How much of my solar generation did I use?", "What changed compared with last month?", "What should I check before calling aftercare?"];

export default function IntelligencePage() {
  return (
    <div>
      <ModuleHero
        backgroundImage={heroBackground}
        backgroundAlt="A connected data pattern representing home energy intelligence"
        accentColor="gold"
        badge={<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30"><Zap className="w-4 h-4 text-gold" aria-hidden="true" /><span className="text-sm font-medium text-gold">Home energy intelligence</span></div>}
        title={<>Understand what your home is doing, <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">and why.</span></>}
        subtitle="Smart meters show what happened. OpenHouse connects usage to the fabric, systems, tariff and behaviour of the home so the next decision makes sense."
        primaryCta={{ href: "#energy-value", label: "See the energy layer" }}
        secondaryCta={{ href: "/contact", label: "Book a Demo" }}
      >
        <IntelligenceFloatingCards />
      </ModuleHero>

      <section id="energy-value" className="relative py-24 bg-porcelain scroll-mt-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-4 font-semibold">One clear standard</p>
            <h2 className="text-[32px] sm:text-5xl font-bold text-carbon font-heading leading-tight mb-6">Every recommendation explained through Money, Comfort and Risk.</h2>
            <p className="text-[17px] sm:text-xl text-carbon/70 leading-relaxed">Energy data becomes useful when people can connect it to the bill, the way the home feels and the systems they need to maintain.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {lenses.map((item) => <div key={item.title} className="p-7 rounded-2xl border border-carbon/10 bg-white hover:border-amber-600/35 transition-all duration-500"><div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-5"><item.icon className="w-5 h-5 text-amber-700" aria-hidden="true" /></div><h3 className="text-2xl font-semibold text-carbon font-heading mb-3">{item.title}</h3><p className="text-[16px] text-carbon/70 leading-relaxed">{item.body}</p></div>)}
          </div>
        </Container>
      </section>

      <section className="relative py-24 sm:py-32 bg-carbon overflow-hidden">
        <Container>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">Questions, not dashboards</p>
            <h2 className="text-[32px] sm:text-5xl font-bold text-white font-heading leading-tight mb-6">Energy guidance in ordinary language.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {questions.map((question) => <div key={question} className="p-5 rounded-2xl border border-white/10 bg-white/[0.04] text-[16px] text-porcelain/85 leading-relaxed">“{question}”</div>)}
          </div>
        </Container>
      </section>

      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            <div>
              <Building2 className="w-8 h-8 text-amber-700 mb-6" aria-hidden="true" />
              <h2 className="text-[32px] sm:text-5xl font-bold text-carbon font-heading leading-tight mb-6">For builders, performance becomes a learning loop.</h2>
              <p className="text-[17px] sm:text-xl text-carbon/70 leading-relaxed">OpenHouse can turn anonymised scheme patterns into better purchaser education, stronger documentation and clearer evidence of how homes are understood after occupation.</p>
            </div>
            <div className="space-y-3">
              {["Common heat pump, ventilation, solar and tariff questions", "Homeowner engagement with energy guidance", "Documentation and education gaps by house type", "Anonymised scheme-level patterns, not household surveillance", "A clearer basis for improving future handover and aftercare"].map((item) => <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-carbon/10 bg-white"><Check className="w-4 h-4 text-amber-700 flex-shrink-0 mt-1" aria-hidden="true" /><span className="text-[15px] text-carbon/75 leading-relaxed">{item}</span></div>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-24 bg-carbon">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <GraduationCap className="w-8 h-8 text-gold mx-auto mb-6" aria-hidden="true" />
            <h2 className="text-[32px] sm:text-5xl font-bold text-white font-heading leading-tight mb-6">Support the standards story with real homeowner education.</h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">OpenHouse can organise home-specific guidance and delivery evidence relevant to BER, NZEB, Part L, Part F and IGBC Home Performance Index workflows.</p>
          </div>
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl border border-gold/25 bg-gold/[0.05] flex items-start gap-4">
            <FileCheck2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" aria-hidden="true" />
            <div><h3 className="text-lg font-semibold text-white mb-2">A support layer, not a certification claim.</h3><p className="text-[15px] text-porcelain/70 leading-relaxed">OpenHouse does not certify a home, determine legal compliance or replace the relevant professional. It keeps approved source documents, homeowner guidance and engagement evidence accessible in one place.</p></div>
          </div>
        </Container>
      </section>

      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <LockKeyhole className="w-8 h-8 text-amber-700 mx-auto mb-6" aria-hidden="true" />
            <h2 className="text-[32px] sm:text-5xl font-bold text-carbon font-heading leading-tight mb-6">Consent before connection. Rules before control.</h2>
            <p className="text-[17px] sm:text-xl text-carbon/70 leading-relaxed">Energy usage and connected-device permissions stay under homeowner control. OpenHouse begins with explanation and recommendations. Any future optimisation must operate within explicit consent, clear limits and an easy override.</p>
          </div>
        </Container>
      </section>

      <section className="relative py-28 sm:py-36 bg-carbon overflow-hidden">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[32px] sm:text-5xl lg:text-[60px] font-bold text-white font-heading leading-[1.05] mb-6">Make an efficient home easier to live in.</h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed max-w-2xl mx-auto mb-10">Start with the context of one real house type and show purchasers what their home, systems and energy choices mean.</p>
            <Link href="/contact" className="group inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-carbon hover:scale-[1.03] transition-all duration-300">Book a Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" /></Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
