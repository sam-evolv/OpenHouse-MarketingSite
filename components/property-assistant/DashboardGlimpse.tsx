import Image from "next/image";
import {
  LayoutDashboard,
  TrendingUp,
  KeyRound,
  ShieldCheck,
  MessageSquare,
  Users,
  Archive,
  Ruler,
  Search,
  ChevronDown,
  CheckCircle2,
  CornerUpRight,
} from "lucide-react";
import ohMark from "@/attached_assets/property-assistant/openhouse-mark.png";

/* ────────────────────────────────────────────────────────────
   Developer Dashboard glimpse: the Homeowners tab.

   The feedback loop the section describes is "we see every resident
   question, across every home". This renders that exact view, in the
   Developer Dashboard chrome (dark sidebar with Homeowners highlighted,
   light content), built as a designed-for-marketing still rather than a
   raw screenshot. Data is illustrative.
   ──────────────────────────────────────────────────────────── */

const NAV_GROUPS = [
  {
    label: "Main",
    items: [
      { icon: LayoutDashboard, name: "Overview" },
      { icon: TrendingUp, name: "Sales Pipeline" },
    ],
  },
  {
    label: "Developer tools",
    items: [
      { icon: KeyRound, name: "Pre-Handover Portal" },
      { icon: ShieldCheck, name: "Compliance" },
      { icon: MessageSquare, name: "Communications" },
    ],
  },
  {
    label: "Management",
    items: [
      { icon: Users, name: "Homeowners", active: true },
      { icon: Archive, name: "Smart Archive" },
      { icon: Ruler, name: "Room Dimensions" },
    ],
  },
];

type Status = "resolved" | "escalated";

const QUESTIONS: {
  name: string;
  initials: string;
  unit: string;
  scheme: string;
  question: string;
  status: Status;
}[] = [
  { name: "Emma Byrne", initials: "EB", unit: "Unit 12", scheme: "Oak Hill Estate", question: "How do I bleed a radiator?", status: "resolved" },
  { name: "Liam Walsh", initials: "LW", unit: "Unit 7", scheme: "Oak Hill Estate", question: "Heat pump showing E3, what now?", status: "resolved" },
  { name: "Aoife Kelly", initials: "AK", unit: "Unit 21", scheme: "Marina Quarter", question: "When is my BER cert valid until?", status: "resolved" },
  { name: "Saoirse Nolan", initials: "SN", unit: "Unit 18", scheme: "Oak Hill Estate", question: "Heat pump pressure keeps dropping", status: "escalated" },
  { name: "Cian Murphy", initials: "CM", unit: "Unit 4", scheme: "Marina Quarter", question: "Warranty claim, kitchen tap is leaking", status: "escalated" },
  { name: "Niamh Doyle", initials: "ND", unit: "Unit 9", scheme: "Riverside Gardens", question: "Where is the water stopcock?", status: "resolved" },
];

function StatusPill({ status }: { status: Status }) {
  if (status === "resolved") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-600 whitespace-nowrap">
        <CheckCircle2 className="h-3 w-3" />
        Resolved by Assistant
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-[11px] font-semibold text-amber-600 whitespace-nowrap">
      <CornerUpRight className="h-3 w-3" />
      Escalated to you
    </span>
  );
}

export function DashboardGlimpse() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-carbon shadow-2xl">
      <div className="flex">
        {/* ── Sidebar (dark) ── */}
        <aside className="hidden w-[210px] flex-shrink-0 flex-col border-r border-white/[0.06] bg-[#0b0c0f] py-4 md:flex">
          <div className="flex items-center gap-2 px-4 pb-4">
            <Image src={ohMark} alt="OpenHouse Ai" width={22} height={22} className="h-[22px] w-[22px]" />
            <span className="text-[13px] font-bold text-gold">OpenHouse Ai</span>
          </div>

          <div className="mx-3 mb-4 flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gold/15 text-[10px] font-bold text-gold">
              OH
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[8px] font-semibold uppercase tracking-wider text-porcelain/40">
                Current scheme
              </span>
              <span className="block truncate text-[12px] font-semibold text-porcelain">
                Oak Hill Estate
              </span>
            </span>
            <ChevronDown className="h-3.5 w-3.5 text-porcelain/40" />
          </div>

          <nav className="flex flex-col gap-4 px-3">
            {NAV_GROUPS.map((group) => (
              <div key={group.label}>
                <p className="mb-1.5 px-2 text-[8px] font-semibold uppercase tracking-[0.15em] text-porcelain/35">
                  {group.label}
                </p>
                <div className="flex flex-col gap-0.5">
                  {group.items.map((item) => {
                    const active = "active" in item && item.active;
                    return (
                      <span
                        key={item.name}
                        className={`flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[12px] font-medium ${
                          active
                            ? "bg-gold/[0.12] text-gold"
                            : "text-porcelain/55"
                        }`}
                      >
                        <item.icon className={`h-3.5 w-3.5 ${active ? "text-gold" : "text-porcelain/40"}`} />
                        {item.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* ── Main content (light) ── */}
        <div className="min-w-0 flex-1 bg-white">
          {/* Header */}
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-neutral-200 px-5 py-4 sm:px-6">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 sm:text-xl">Homeowners</h3>
              <p className="mt-0.5 text-[13px] text-neutral-500">
                Every resident question, across every scheme.
              </p>
            </div>
            <div className="flex h-9 w-full max-w-[220px] items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-neutral-400 sm:w-auto">
              <Search className="h-3.5 w-3.5" />
              <span className="text-[12px]">Search residents or questions</span>
            </div>
          </div>

          {/* Pattern callout */}
          <div className="px-5 pt-4 sm:px-6">
            <div className="flex items-center gap-3 rounded-xl border border-gold/30 bg-gold/[0.06] px-4 py-3">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <TrendingUp className="h-[18px] w-[18px]" />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-700/80">
                  Top topic this month
                </p>
                <p className="text-[14px] font-bold text-neutral-900">
                  Heat pump pressure
                  <span className="ml-2 text-[12px] font-medium text-neutral-500">
                    23 questions across 3 schemes
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Questions table */}
          <div className="px-5 py-4 sm:px-6">
            {/* Column headers */}
            <div className="grid grid-cols-[1.4fr_2.6fr_1.4fr] items-center gap-3 border-b border-neutral-100 px-2 pb-2 text-[10px] font-semibold uppercase tracking-wider text-neutral-400 sm:grid-cols-[1.2fr_0.6fr_1fr_2fr_1.4fr]">
              <span>Resident</span>
              <span className="hidden sm:block">Unit</span>
              <span className="hidden sm:block">Scheme</span>
              <span>Question</span>
              <span className="text-right sm:text-left">Status</span>
            </div>

            {QUESTIONS.map((q) => (
              <div
                key={q.name}
                className="grid grid-cols-[1.4fr_2.6fr_1.4fr] items-center gap-3 border-b border-neutral-100 px-2 py-3 sm:grid-cols-[1.2fr_0.6fr_1fr_2fr_1.4fr]"
              >
                {/* Resident */}
                <div className="flex min-w-0 items-center gap-2">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-[10px] font-bold text-amber-700">
                    {q.initials}
                  </span>
                  <span className="truncate text-[13px] font-semibold text-neutral-800">
                    {q.name}
                  </span>
                </div>
                {/* Unit */}
                <span className="hidden text-[12px] text-neutral-500 sm:block">{q.unit}</span>
                {/* Scheme */}
                <span className="hidden truncate text-[12px] text-neutral-500 sm:block">
                  {q.scheme}
                </span>
                {/* Question */}
                <span className="truncate text-[12.5px] text-neutral-700">
                  &ldquo;{q.question}&rdquo;
                </span>
                {/* Status */}
                <div className="flex justify-end sm:justify-start">
                  <StatusPill status={q.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
