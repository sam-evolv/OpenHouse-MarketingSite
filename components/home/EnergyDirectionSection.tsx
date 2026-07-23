import { Banknote, ShieldAlert, ThermometerSun } from "lucide-react";
import { CapabilityLabel } from "./CapabilityLabel";
import { SectionShell } from "./SectionShell";

const lenses = [
  {
    icon: Banknote,
    title: "Money",
    question: "Why did the bill rise?",
    answer: "Explain cost in the context of usage, tariff and the systems in the home.",
  },
  {
    icon: ThermometerSun,
    title: "Comfort",
    question: "Why is this room slow to warm?",
    answer: "Relate comfort to the home, its heating setup and the available evidence.",
  },
  {
    icon: ShieldAlert,
    title: "Risk",
    question: "Is something drifting from normal?",
    answer: "Surface patterns that may deserve attention before presenting a definite diagnosis.",
  },
] as const;

export function EnergyDirectionSection() {
  return (
    <SectionShell id="energy-direction" tone="ink" className="border-b border-white/[0.07]">
      <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-end lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-gold">Energy intelligence</p>
            <CapabilityLabel status="direction" />
          </div>
          <h2 className="mt-6 max-w-[11ch] font-heading text-[clamp(3rem,6vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-white">
            Energy, explained through the home.
          </h2>
        </div>
        <div className="max-w-xl lg:justify-self-end">
          <p className="text-base leading-relaxed text-porcelain/63 sm:text-lg">
            The next layer extends the same home context into practical energy explanation. Money, Comfort and Risk make performance easier to understand than another abstract dashboard.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <CapabilityLabel status="example" qualifier="Data below" />
            <p className="text-xs leading-relaxed text-porcelain/38">Concept model, not live telemetry or automatic optimisation.</p>
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {lenses.map((lens, index) => (
          <article key={lens.title} className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#141410] p-6 transition-colors hover:border-gold/30 sm:p-8">
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-gold/[0.08] blur-3xl" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/25 bg-gold/[0.08] text-gold">
                  <lens.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-porcelain/28">0{index + 1}</span>
              </div>
              <h3 className="mt-12 text-2xl font-semibold tracking-[-0.03em] text-white">{lens.title}</h3>
              <p className="mt-3 text-sm font-medium text-gold">{lens.question}</p>
              <p className="mt-4 text-sm leading-relaxed text-porcelain/52">{lens.answer}</p>
              <div className="mt-8 h-px bg-gradient-to-r from-gold/45 to-transparent" aria-hidden="true" />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
        <p className="text-sm font-semibold text-porcelain/80">The design principle stays the same.</p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-porcelain/48 sm:mt-0 sm:text-right">
          Use the home’s context to explain what the data may mean, show where the explanation came from and stop when the evidence is insufficient.
        </p>
      </div>
    </SectionShell>
  );
}
