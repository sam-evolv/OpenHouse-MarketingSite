import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  CalendarClock,
  FileCheck,
} from "lucide-react";

/* The full Intelligence interface, mid-conversation. A bespoke product
   mockup for the money shot: scheme selector, sourced conversation, and a
   Today's briefing side panel. Built to fill the container width. */

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gold/25 bg-gold/[0.08] px-2 py-0.5 text-[10px] font-medium text-gold/90">
      {children}
    </span>
  );
}

function Exchange({
  question,
  answer,
  sources,
}: {
  question: string;
  answer: React.ReactNode;
  sources: string[];
}) {
  return (
    <div className="space-y-2.5">
      <div className="flex justify-end">
        <span className="max-w-[80%] rounded-2xl rounded-br-md bg-gold/15 px-3.5 py-2 text-[13px] font-medium text-porcelain ring-1 ring-gold/25">
          {question}
        </span>
      </div>
      <div className="flex gap-2.5">
        <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gold/15">
          <Sparkles className="h-4 w-4 text-gold" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[13px] leading-relaxed text-porcelain">{answer}</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {sources.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BriefItem({
  icon: Icon,
  tone,
  label,
  value,
}: {
  icon: typeof TrendingUp;
  tone: "gold" | "amber" | "emerald";
  label: string;
  value: string;
}) {
  const tones = {
    gold: "bg-gold/10 text-gold",
    amber: "bg-amber-500/15 text-amber-400",
    emerald: "bg-emerald-500/15 text-emerald-400",
  };
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
      <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${tones[tone]}`}>
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-wider text-hint">{label}</p>
        <p className="mt-0.5 text-[13px] font-medium leading-snug text-porcelain">{value}</p>
      </div>
    </div>
  );
}

export function IntelligenceConsole() {
  const schemes = ["All schemes", "Riverside Gardens", "Meadow View", "Orchard Close"];
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate/80 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.7)] backdrop-blur-md">
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-carbon/40 px-4 py-3 sm:px-5">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gold/15">
          <Sparkles className="h-4 w-4 text-gold" />
        </span>
        <span className="text-sm font-semibold text-porcelain">OpenHouse Intelligence</span>
        <span className="ml-auto hidden text-[11px] text-hint sm:block">Longview Estates</span>
      </div>

      {/* Scheme selector */}
      <div className="flex flex-wrap gap-2 border-b border-white/10 px-4 py-3 sm:px-5">
        {schemes.map((s, i) => (
          <span
            key={s}
            className={`rounded-full px-3 py-1.5 text-[12px] font-medium ${
              i === 0
                ? "bg-gold/15 text-gold ring-1 ring-gold/30"
                : "border border-white/10 text-porcelain/70"
            }`}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Body: conversation + briefing */}
      <div className="grid grid-cols-1 gap-5 p-4 sm:p-6 lg:grid-cols-12 lg:gap-6">
        {/* Conversation */}
        <div className="space-y-5 lg:col-span-8">
          <Exchange
            question="What's our projected revenue this month?"
            answer={
              <>
                <span className="font-semibold text-gold">€1.84m</span> across
                your three developments, based on 9 sale agreed contracts ready
                to sign. Riverside Gardens leads at €910k.
              </>
            }
            sources={["Riverside Gardens pipeline", "Meadow View pipeline", "Sale agreed contracts"]}
          />
          <Exchange
            question="Any compliance gaps I should know about?"
            answer={
              <>
                Two items. Three units in Orchard Close are missing fire safety
                certs, units 4, 7, and 11. The Part F ventilation assessment for
                Orchard Close is also outstanding from your M&E engineer.
              </>
            }
            sources={["Compliance tracker", "Building Regulations Part F", "Orchard Close M&E file"]}
          />
          <Exchange
            question="Which sale agreed buyers have gone quiet?"
            answer={
              <>
                Two buyers at Meadow View have not responded in over 10 days.
                Their solicitors are holding the contracts. The other 7 sale
                agreed contracts are progressing on schedule.
              </>
            }
            sources={["Meadow View pipeline", "Solicitor correspondence log"]}
          />
        </div>

        {/* Today's briefing */}
        <div className="lg:col-span-4">
          <div className="rounded-2xl border border-gold/15 bg-gold/[0.03] p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-heading text-sm font-bold text-white">Today&apos;s briefing</h3>
              <span className="text-[10px] text-hint">Mon 24 Mar</span>
            </div>
            <div className="space-y-2.5">
              <BriefItem
                icon={TrendingUp}
                tone="gold"
                label="Projected to close"
                value="€1.84m this month, 9 contracts ready"
              />
              <BriefItem
                icon={AlertTriangle}
                tone="amber"
                label="Needs your attention"
                value="3 units missing fire safety certs, Orchard Close"
              />
              <BriefItem
                icon={CalendarClock}
                tone="amber"
                label="Compliance deadline"
                value="Part F assessment, Orchard Close, 14 days overdue"
              />
              <BriefItem
                icon={FileCheck}
                tone="emerald"
                label="Progressing"
                value="158 units sale agreed across three schemes"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
