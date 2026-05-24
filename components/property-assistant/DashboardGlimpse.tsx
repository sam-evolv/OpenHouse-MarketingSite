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
  ChevronDown,
  Lock,
  Lightbulb,
  Paperclip,
} from "lucide-react";
import ohMark from "@/attached_assets/property-assistant/openhouse-mark.png";

/* ────────────────────────────────────────────────────────────
   Developer Dashboard glimpse: the two resident data streams.

   The product keeps two strictly separate streams, and this mockup
   shows them separately so the distinction is unmistakable:

   - LEFT, "Escalated snags": when a resident raises a snag in the app
     it reaches the developer's care team with full identification
     (name, unit, scheme, issue, photos, history). Legitimate because
     the resident explicitly raised it for resolution.
   - RIGHT, "Question patterns": day-to-day questions to the Property
     Assistant are aggregated and ANONYMISED. The developer sees topic
     frequency for R&D, never an individual resident's questions tied
     to a person.

   Data is illustrative.
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
      { icon: Users, name: "Residents", active: true },
      { icon: Archive, name: "Smart Archive" },
      { icon: Ruler, name: "Room Dimensions" },
    ],
  },
];

/* ── Stream A: escalated snags (fully identified, with the resident's consent) ── */
type SnagStatus = "new" | "progress" | "resolved";

const SNAGS: {
  name: string;
  initials: string;
  unit: string;
  scheme: string;
  issue: string;
  photo?: boolean;
  status: SnagStatus;
  statusLabel: string;
  meta: string;
}[] = [
  {
    name: "Emma Byrne",
    initials: "EB",
    unit: "Unit 12",
    scheme: "Oak Hill Estate",
    issue: "Water pooling under sink, photo attached",
    photo: true,
    status: "new",
    statusLabel: "New",
    meta: "SR-2026-0341",
  },
  {
    name: "Liam Walsh",
    initials: "LW",
    unit: "Unit 7",
    scheme: "Oak Hill Estate",
    issue: "Heat pump E3 unresolved after 2 fix attempts",
    status: "progress",
    statusLabel: "Care team assigned",
    meta: "2h ago",
  },
  {
    name: "Cathal Brady",
    initials: "CB",
    unit: "Unit 22",
    scheme: "Riverside Gardens",
    issue: "Window seal leaking",
    status: "resolved",
    statusLabel: "Resolved",
    meta: "Yesterday",
  },
];

const SNAG_PILL: Record<SnagStatus, string> = {
  new: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  progress: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
  resolved: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
};

/* ── Stream B: anonymised question patterns (R&D only, never tied to a person) ── */
const TOPICS: { topic: string; meta: string; count: number }[] = [
  { topic: "Heat pump pressure", meta: "23 questions across 3 schemes", count: 23 },
  { topic: "BER cert location", meta: "18 questions", count: 18 },
  { topic: "Kitchen warranty terms", meta: "14 questions", count: 14 },
  { topic: "Boiler service schedule", meta: "11 questions", count: 11 },
];
const TOPIC_MAX = 23;

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
                All schemes
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
                          active ? "bg-gold/[0.12] text-gold" : "text-porcelain/55"
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

        {/* ── Main content: the two streams, side by side ── */}
        <div className="grid min-w-0 flex-1 grid-cols-1 lg:grid-cols-2">
          {/* ── Stream A: Escalated snags (white panel) ── */}
          <section className="min-w-0 bg-white p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="text-[15px] font-bold text-neutral-900">Escalated snags</h3>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                Live
              </span>
            </div>

            <p className="mb-3 text-[11px] leading-relaxed text-neutral-500">
              Raised by the resident, with full context for your care team.
            </p>

            <div className="flex flex-col gap-2.5">
              {SNAGS.map((s) => (
                <div
                  key={s.meta}
                  className="rounded-xl border border-neutral-200 bg-white p-3.5 shadow-[0_1px_3px_rgba(12,12,12,0.04)]"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-[11px] font-bold text-amber-700">
                        {s.initials}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-[13px] font-semibold text-neutral-900">
                          {s.name}
                        </span>
                        <span className="block truncate text-[11.5px] text-neutral-500">
                          {s.unit} · {s.scheme}
                        </span>
                      </span>
                    </div>
                    <span
                      className={`flex-shrink-0 whitespace-nowrap rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${SNAG_PILL[s.status]}`}
                    >
                      {s.statusLabel}
                    </span>
                  </div>

                  <p className="mt-2.5 flex items-start gap-1.5 text-[12.5px] leading-snug text-neutral-700">
                    {s.photo && (
                      <Paperclip className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-neutral-400" />
                    )}
                    <span>{s.issue}</span>
                  </p>

                  <p className="mt-2 text-[10.5px] font-medium uppercase tracking-wide text-neutral-400">
                    {s.meta}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Stream B: Anonymised question patterns (tinted panel) ── */}
          <section className="min-w-0 border-t border-neutral-200 bg-neutral-50 p-5 sm:p-6 lg:border-l lg:border-t-0">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="text-[15px] font-bold text-neutral-900">Question patterns</h3>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-200 px-2.5 py-1 text-[11px] font-semibold text-neutral-600">
                <Lock className="h-3 w-3" />
                Anonymised · R&amp;D only
              </span>
            </div>

            <p className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-neutral-400">
              Top topics this month
            </p>

            <div className="flex flex-col gap-3.5">
              {TOPICS.map((t) => (
                <div key={t.topic}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="truncate text-[13px] font-semibold text-neutral-800">
                      {t.topic}
                    </span>
                    <span className="flex-shrink-0 text-[11px] text-neutral-500">{t.meta}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${Math.round((t.count / TOPIC_MAX) * 100)}%`,
                        background: "linear-gradient(90deg, #e8c547, #b88a18)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-gold/30 bg-gold/[0.08] p-3.5">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gold/20 text-amber-700">
                <Lightbulb className="h-[15px] w-[15px]" />
              </span>
              <p className="text-[12px] leading-relaxed text-neutral-700">
                <span className="font-bold text-neutral-900">Insight:</span> BER queries spike in
                the first three months after handover. Consider adding a BER explainer to your
                handover pack.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
