import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleAlert, CircleCheck, CircleDashed } from "lucide-react";
import { CapabilityLabel } from "./CapabilityLabel";
import { SectionShell } from "./SectionShell";

const signals = [
  {
    icon: CircleCheck,
    label: "Resolved",
    detail: "Questions answered from the available information.",
    className: "text-emerald-900 bg-emerald-900/[0.04] border-emerald-900/15",
  },
  {
    icon: CircleAlert,
    label: "Escalated",
    detail: "Questions that still need a person or developer action.",
    className: "text-amber-950 bg-amber-900/[0.04] border-amber-900/15",
  },
  {
    icon: CircleDashed,
    label: "Missing",
    detail: "Low-confidence answers and information gaps worth fixing.",
    className: "text-carbon/80 bg-carbon/[0.035] border-carbon/12",
  },
] as const;

export function DeveloperInsightSection() {
  return (
    <SectionShell id="developer-insight" tone="paper" className="border-b border-carbon/10">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-carbon/70">The developer view</p>
            <CapabilityLabel status="live" tone="light" />
          </div>
          <h2 className="mt-6 max-w-[11ch] font-editorial text-[clamp(3rem,5.8vw,5.8rem)] leading-[0.95] tracking-[-0.045em] text-carbon">
            See what homeowners need after keys.
          </h2>
        </div>
        <div className="max-w-xl lg:justify-self-end">
          <p className="text-base leading-relaxed text-carbon/70 sm:text-lg">
            The same interaction that helps one homeowner gives the developer a clearer view of recurring questions, genuine escalations and knowledge that is still missing.
          </p>
          <Link href="/developer-dashboard" className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#7e6415]">
            Explore the developer view
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="mt-14 overflow-hidden rounded-[2rem] border border-carbon/15 bg-carbon p-3 shadow-[0_35px_90px_rgba(42,34,18,0.16)] sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-4 sm:px-4">
          <div>
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-gold">Example scheme view</p>
            <p className="mt-1 text-sm text-porcelain/55">Questions across homeowners, with outcome status visible.</p>
          </div>
          <p className="rounded-full border border-white/10 px-3 py-1.5 text-[0.625rem] uppercase tracking-[0.14em] text-porcelain/48">Example data</p>
        </div>
        <Image
          src="/images/product/builder-homeowners-ui.png"
          alt="Example OpenHouse developer screen showing homeowner questions resolved by the assistant and escalated to the team"
          width={1070}
          height={610}
          sizes="(max-width: 1280px) 94vw, 1180px"
          className="h-auto w-full rounded-2xl"
        />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {signals.map((signal) => (
          <div key={signal.label} className={`rounded-2xl border p-5 ${signal.className}`}>
            <signal.icon className="h-5 w-5" aria-hidden="true" />
            <p className="mt-4 text-sm font-semibold">{signal.label}</p>
            <p className="mt-1.5 text-sm leading-relaxed">{signal.detail}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
