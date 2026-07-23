import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { PlatformFloatingCards } from "@/components/hero/cards/PlatformCards";
import heroBackground from "@/attached_assets/stock_images/modern_apartment_liv_8293bb50.jpg";
import { MessageSquare, BookOpen, Camera, ShieldCheck, Zap, ThermometerSun, ArrowRight, Check, House } from "lucide-react";

export const metadata = {
  title: "OpenHouse for Purchasers, Understand and run your home",
  description: "A practical assistant for questions, warranties, systems, maintenance and energy guidance, grounded in the actual home you bought.",
};

const questions = ["Where is my stopcock?", "How do I reset the heat pump?", "Can I fix a TV to this wall?", "What warranty covers the oven?", "Why was my electricity bill higher?", "Is this crack something I should report?"];

const value = [
  { icon: MessageSquare, title: "Ask about your actual home", body: "Answers use the drawings, specifications, manuals, warranties and systems connected to your property." },
  { icon: BookOpen, title: "Learn how the home works", body: "Short, home-specific guidance replaces the folder of PDFs nobody wants to read." },
  { icon: Camera, title: "Show, do not just describe", body: "Upload a photo of an issue or device and add useful evidence before support or warranty routing." },
  { icon: Zap, title: "Understand energy in context", body: "Connect bills and consented usage data to the heat pump, solar, EV charger, tariff and fabric of the home." },
];

export default function PropertyAssistantPage() {
  return (
    <div>
      <ModuleHero
        backgroundImage={heroBackground}
        backgroundAlt="A calm modern home interior"
        accentColor="gold"
        badge={<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30"><House className="w-4 h-4 text-gold" aria-hidden="true" /><span className="text-sm font-medium text-gold">For purchasers and homeowners</span></div>}
        title={<>Understand the home you <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">actually bought.</span></>}
        subtitle="OpenHouse is the practical assistant for your home, its systems, its documents, its warranties and the questions that start after you move in."
        primaryCta={{ href: "#purchaser-value", label: "See what it does" }}
        secondaryCta={{ href: "/intelligence", label: "Energy intelligence" }}
      >
        <PlatformFloatingCards />
      </ModuleHero>

      <section id="purchaser-value" className="relative py-24 bg-porcelain scroll-mt-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-4 font-semibold">Useful from day one</p>
            <h2 className="text-[32px] sm:text-5xl font-bold text-carbon font-heading leading-tight mb-6">The assistant is the interface. Your home model is underneath it.</h2>
            <p className="text-[17px] sm:text-xl text-carbon/70 leading-relaxed">OpenHouse remembers what was built, what was installed, what guidance applies and what has happened over time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {value.map((item) => <div key={item.title} className="p-7 rounded-2xl border border-carbon/10 bg-white hover:border-amber-600/35 transition-all duration-500"><div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-5"><item.icon className="w-5 h-5 text-amber-700" aria-hidden="true" /></div><h3 className="text-xl font-semibold text-carbon font-heading mb-3">{item.title}</h3><p className="text-[16px] text-carbon/70 leading-relaxed">{item.body}</p></div>)}
          </div>
        </Container>
      </section>

      <section className="relative py-24 sm:py-32 bg-carbon overflow-hidden">
        <Container>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">Everyday questions</p>
            <h2 className="text-[32px] sm:text-5xl font-bold text-white font-heading leading-tight mb-6">No manual hunting. No generic answer.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {questions.map((question) => <div key={question} className="p-5 rounded-2xl border border-white/10 bg-white/[0.04] text-[16px] text-porcelain/85 leading-relaxed">“{question}”</div>)}
          </div>
        </Container>
      </section>

      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
            <div>
              <ThermometerSun className="w-8 h-8 text-amber-700 mb-6" aria-hidden="true" />
              <h2 className="text-[32px] sm:text-5xl font-bold text-carbon font-heading leading-tight mb-6">Live comfortably without becoming an energy expert.</h2>
              <p className="text-[17px] sm:text-xl text-carbon/70 leading-relaxed">A-rated and low-carbon homes can still be confusing. OpenHouse explains heating, ventilation, solar, EV charging, tariffs and bills in the context of your own systems.</p>
            </div>
            <div className="space-y-3">
              {["Money: what is costing you and when you use it", "Comfort: how settings and systems affect the way the home feels", "Risk: maintenance, warranty relevance and unusual behaviour", "Education: clear guidance for the first 90 days and each season"].map((item) => <div key={item} className="flex items-start gap-3 p-5 rounded-2xl border border-carbon/10 bg-white"><Check className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" /><span className="text-[16px] text-carbon/75 leading-relaxed">{item}</span></div>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-24 bg-carbon">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <ShieldCheck className="w-8 h-8 text-gold mx-auto mb-6" aria-hidden="true" />
            <h2 className="text-[32px] sm:text-5xl font-bold text-white font-heading leading-tight mb-6">Your home data remains your home data.</h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">You control personal information, energy usage and connected-device permissions. Builders can receive anonymised scheme insight, not a window into an individual household.</p>
          </div>
        </Container>
      </section>

      <section className="relative py-28 sm:py-36 bg-carbon overflow-hidden border-t border-white/5">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[32px] sm:text-5xl lg:text-[60px] font-bold text-white font-heading leading-[1.05] mb-6">A home should come with understanding.</h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed max-w-2xl mx-auto mb-10">OpenHouse starts with practical answers and becomes more useful as the home, its systems and its history become connected.</p>
            <Link href="/contact" className="group inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-carbon hover:scale-[1.03] transition-all duration-300">See OpenHouse <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" /></Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
