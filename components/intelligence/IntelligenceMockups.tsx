"use client";

import {
  BarChart3,
  FileText,
  MessageCircle,
  Scale,
  Sparkles,
  Bell,
  ChevronRight,
  Send,
  Clock,
  CalendarDays,
  Users,
} from "lucide-react";

/* ─────────────────────────────────────────────
   1. Landing Screen Mockup
   ───────────────────────────────────────────── */
export function LandingMockup() {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#1a1a2e] overflow-hidden shadow-2xl">
      <div className="flex h-[480px] sm:h-[540px]">
        {/* Sidebar */}
        <aside className="hidden sm:flex flex-col w-56 border-r border-white/5 bg-[#13132a] shrink-0">
          <div className="px-4 pt-5 pb-3 border-b border-white/5">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-sm font-semibold text-white">Intelligence</span>
            </div>
            <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-gold/10 border border-gold/20 text-sm text-gold">
              <CalendarDays className="w-4 h-4" />
              Today&apos;s Briefing
            </button>
          </div>
          <div className="px-4 pt-4">
            <p className="text-[10px] uppercase tracking-widest text-porcelain/30 mb-3">Recent</p>
            {["Units sale agreed", "Fire cert status", "Registration rates", "Stage payments"].map(
              (q) => (
                <div
                  key={q}
                  className="flex items-center gap-2 px-2 py-2 rounded-lg text-xs text-porcelain/50 hover:bg-white/5 cursor-default"
                >
                  <Clock className="w-3 h-3 shrink-0" />
                  {q}
                </div>
              )
            )}
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
            <span className="text-sm text-porcelain/60">New conversation</span>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Bell className="w-4 h-4 text-porcelain/40" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400" />
              </div>
            </div>
          </div>

          {/* Alert banner */}
          <div className="mx-5 mt-4 px-4 py-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center gap-2">
            <Bell className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-xs text-amber-300">
              2 fire safety certificates expiring this week — Block C, Elm Quarter
            </span>
          </div>

          {/* Prompt categories */}
          <div className="flex-1 flex flex-col items-center justify-center px-5">
            <p className="text-porcelain/40 text-sm mb-6">
              What would you like to know?
            </p>
            <div className="grid grid-cols-2 gap-3 w-full max-w-md">
              {[
                { icon: BarChart3, label: "Live Data", sub: "Sales, payments, pipeline" },
                { icon: FileText, label: "Documents", sub: "Certs, compliance, BCAR" },
                { icon: MessageCircle, label: "Homeowners", sub: "Queries, registration" },
                { icon: Scale, label: "Regulatory", sub: "Building regs, HomeBond" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-gold/20 transition-colors"
                >
                  <c.icon className="w-4 h-4 text-gold mb-2" />
                  <p className="text-xs font-medium text-white">{c.label}</p>
                  <p className="text-[10px] text-porcelain/40">{c.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Input bar */}
          <div className="px-5 pb-4">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10">
              <span className="text-sm text-porcelain/30 flex-1">Ask anything about your schemes…</span>
              <Send className="w-4 h-4 text-gold/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   2. Sales Query Mockup
   ───────────────────────────────────────────── */
export function SalesQueryMockup() {
  const barData = [
    { label: "Reserved", value: 42, pct: 27 },
    { label: "Sale Agreed", value: 158, pct: 100 },
    { label: "Contracted", value: 96, pct: 61 },
    { label: "Closed", value: 73, pct: 46 },
    { label: "Available", value: 31, pct: 20 },
  ];

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#1a1a2e] overflow-hidden shadow-2xl">
      <div className="flex h-[480px] sm:h-[540px]">
        {/* Sidebar (collapsed on small) */}
        <aside className="hidden sm:flex flex-col w-56 border-r border-white/5 bg-[#13132a] shrink-0">
          <div className="px-4 pt-5 pb-3 border-b border-white/5">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-sm font-semibold text-white">Intelligence</span>
            </div>
            <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-gold/10 border border-gold/20 text-sm text-gold">
              <CalendarDays className="w-4 h-4" />
              Today&apos;s Briefing
            </button>
          </div>
          <div className="px-4 pt-4">
            <p className="text-[10px] uppercase tracking-widest text-porcelain/30 mb-3">Recent</p>
            <div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-gold/5 border border-gold/10 text-xs text-gold">
              <BarChart3 className="w-3 h-3 shrink-0" />
              Units sale agreed
            </div>
            {["Fire cert status", "Registration rates"].map((q) => (
              <div
                key={q}
                className="flex items-center gap-2 px-2 py-2 rounded-lg text-xs text-porcelain/50"
              >
                <Clock className="w-3 h-3 shrink-0" />
                {q}
              </div>
            ))}
          </div>
        </aside>

        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
            <span className="text-sm text-porcelain/60">Sales query</span>
            <Bell className="w-4 h-4 text-porcelain/40" />
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
            {/* User message */}
            <div className="flex justify-end">
              <div className="px-4 py-2.5 rounded-2xl rounded-tr-md bg-gold/20 border border-gold/30 max-w-xs">
                <p className="text-sm text-white">How many units are sale agreed?</p>
              </div>
            </div>

            {/* AI response */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-porcelain/80">
                    Across all active developments, <span className="text-white font-semibold">158 units</span> are currently at <span className="text-gold font-medium">Sale Agreed</span> stage.
                  </p>

                  {/* Chart */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <p className="text-[10px] uppercase tracking-widest text-porcelain/30 mb-3">
                      Units by sales stage
                    </p>
                    <div className="space-y-2.5">
                      {barData.map((bar) => (
                        <div key={bar.label} className="flex items-center gap-3">
                          <span className="text-[11px] text-porcelain/50 w-20 text-right shrink-0">
                            {bar.label}
                          </span>
                          <div className="flex-1 h-5 bg-white/[0.04] rounded-md overflow-hidden">
                            <div
                              className={`h-full rounded-md ${bar.label === "Sale Agreed" ? "bg-gold" : "bg-gold/40"}`}
                              style={{ width: `${bar.pct}%` }}
                            />
                          </div>
                          <span className="text-[11px] text-porcelain/70 w-8 shrink-0 font-medium">
                            {bar.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Source link */}
                  <div className="flex items-center gap-1.5 text-[11px] text-porcelain/30">
                    <span>Source: Sales Pipeline</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* Follow-up suggestions */}
              <div className="pl-10 flex flex-wrap gap-2">
                {["Show by development", "Overdue deposits", "Week-on-week trend"].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-porcelain/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Input bar */}
          <div className="px-5 pb-4">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10">
              <span className="text-sm text-porcelain/30 flex-1">Ask a follow-up…</span>
              <Send className="w-4 h-4 text-gold/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   3. Homeowner Analysis Mockup
   ───────────────────────────────────────────── */
export function HomeownerMockup() {
  const categories = [
    { label: "Local amenities", pct: 29, count: 47 },
    { label: "Utility setup", pct: 14, count: 23 },
    { label: "Walking distance", pct: 14, count: 22 },
    { label: "Parking", pct: 12, count: 19 },
    { label: "Defects / snags", pct: 11, count: 18 },
    { label: "Broadband", pct: 10, count: 16 },
    { label: "Other", pct: 10, count: 16 },
  ];

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#1a1a2e] overflow-hidden shadow-2xl">
      <div className="flex h-[480px] sm:h-[540px]">
        {/* Sidebar */}
        <aside className="hidden sm:flex flex-col w-56 border-r border-white/5 bg-[#13132a] shrink-0">
          <div className="px-4 pt-5 pb-3 border-b border-white/5">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-sm font-semibold text-white">Intelligence</span>
            </div>
            <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-gold/10 border border-gold/20 text-sm text-gold">
              <CalendarDays className="w-4 h-4" />
              Today&apos;s Briefing
            </button>
          </div>
          <div className="px-4 pt-4">
            <p className="text-[10px] uppercase tracking-widest text-porcelain/30 mb-3">Recent</p>
            {["Units sale agreed", "Fire cert status"].map((q) => (
              <div
                key={q}
                className="flex items-center gap-2 px-2 py-2 rounded-lg text-xs text-porcelain/50"
              >
                <Clock className="w-3 h-3 shrink-0" />
                {q}
              </div>
            ))}
            <div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-gold/5 border border-gold/10 text-xs text-gold">
              <Users className="w-3 h-3 shrink-0" />
              Homeowner queries
            </div>
          </div>
        </aside>

        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
            <span className="text-sm text-porcelain/60">Homeowner analysis</span>
            <Bell className="w-4 h-4 text-porcelain/40" />
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
            {/* User message */}
            <div className="flex justify-end">
              <div className="px-4 py-2.5 rounded-2xl rounded-tr-md bg-gold/20 border border-gold/30 max-w-xs">
                <p className="text-sm text-white">
                  What are homeowners asking about most this week?
                </p>
              </div>
            </div>

            {/* AI response */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
              </div>
              <div className="space-y-3 flex-1 min-w-0">
                <p className="text-sm text-porcelain/80">
                  This week across all developments, homeowners asked <span className="text-white font-semibold">161 questions</span>. Here&apos;s the breakdown by category:
                </p>

                {/* Horizontal bar chart */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <p className="text-[10px] uppercase tracking-widest text-porcelain/30 mb-3">
                    Questions by category — this week
                  </p>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <div key={cat.label} className="flex items-center gap-3">
                        <span className="text-[11px] text-porcelain/50 w-28 text-right shrink-0">
                          {cat.label}
                        </span>
                        <div className="flex-1 h-5 bg-white/[0.04] rounded-md overflow-hidden">
                          <div
                            className="h-full rounded-md bg-gold/60"
                            style={{ width: `${(cat.pct / 29) * 100}%` }}
                          />
                        </div>
                        <span className="text-[11px] text-porcelain/70 w-12 shrink-0">
                          {cat.pct}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-porcelain/80">
                  <span className="text-gold font-medium">Local amenities</span> remains the top category — mostly &quot;nearest pharmacy&quot; and &quot;nearest supermarket.&quot; Consider adding an amenities map to your handover packs.
                </p>

                {/* Source */}
                <div className="flex items-center gap-1.5 text-[11px] text-porcelain/30">
                  <span>Source: Care Module — Homeowner Queries</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Follow-up suggestions */}
            <div className="pl-10 flex flex-wrap gap-2">
              {["Compare with last week", "By development", "Unresolved queries"].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-porcelain/50"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Input bar */}
          <div className="px-5 pb-4">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10">
              <span className="text-sm text-porcelain/30 flex-1">Ask a follow-up…</span>
              <Send className="w-4 h-4 text-gold/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
