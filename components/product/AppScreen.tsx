import Image from "next/image";
import {
  Bell,
  Camera,
  ChevronDown,
  FileText,
  Map,
  MessageSquare,
  Mic,
  Moon,
  User,
  Wifi,
} from "lucide-react";

/**
 * The OpenHouse homeowner app, rebuilt in markup rather than pasted in as
 * a screenshot. A screenshot would be a fixed raster: soft on retina,
 * unreadable at 390px, and impossible to keep in step with the product.
 * This is the same screen as vector type and real layout, so it stays
 * crisp at any width and scales with the surrounding section.
 *
 * The app itself is light where the marketing site is dark. That contrast
 * is the point: it reads as a real product placed on the page, not as
 * another marketing panel.
 *
 * It is a picture of software, not software. The whole frame is exposed
 * to assistive tech as a single labelled image so a screen reader never
 * walks a user through controls that do not exist.
 */

const CHIPS = [
  "Kitchen Layout",
  "Long-Term Maintenance",
  "Utilities Setup",
  "Planning Rules",
];

const TABS = [
  { icon: MessageSquare, label: "Assistant" },
  { icon: Map, label: "Maps" },
  { icon: Bell, label: "Noticeboard" },
  { icon: FileText, label: "Docs" },
];

export function AppScreen({ className = "" }: { className?: string }) {
  return (
    <figure
      className={`relative ${className}`}
      role="img"
      aria-label="The OpenHouse homeowner app on a phone. A gold OpenHouse Ai logo sits above the heading 'Ask anything about your home or community', four suggestion chips (Kitchen Layout, Long-Term Maintenance, Utilities Setup, Planning Rules), and an ask box with microphone and camera buttons. A bottom bar shows Assistant, Maps, Noticeboard and Docs."
    >
      {/* Warm halo, so the light screen sits in the dark section rather
          than punching a hole in it. */}
      <div
        className="absolute -inset-6 rounded-[64px] bg-gradient-to-br from-gold/20 via-amber-500/5 to-gold/15 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="relative w-[286px] sm:w-[320px] rounded-[44px] bg-neutral-900 p-[10px] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)] ring-1 ring-white/10"
        aria-hidden="true"
      >
        <div className="relative overflow-hidden rounded-[35px] bg-white text-[#111827]">
          {/* Status bar */}
          <div className="relative flex h-11 items-center justify-between px-6 text-[12px] font-semibold text-[#111827]">
            <span className="tabular-nums">18:32</span>
            <span className="absolute left-1/2 top-1.5 h-[26px] w-[86px] -translate-x-1/2 rounded-full bg-black" />
            <span className="flex items-center gap-1.5">
              <Wifi className="h-3.5 w-3.5" strokeWidth={2.5} />
              <span className="flex h-[11px] w-[22px] items-center rounded-[3px] border border-[#111827] p-[1.5px]">
                <span className="h-full w-full rounded-[1px] bg-[#111827]" />
              </span>
            </span>
          </div>

          {/* App bar */}
          <div className="flex items-center justify-between border-b border-[#eceef1] px-4 pb-3 pt-1">
            <Image
              src="/images/openhouseai-logo-trimmed.png"
              alt=""
              width={512}
              height={148}
              className="h-[22px] w-auto"
            />
            <div className="flex items-center gap-1.5">
              <span className="flex items-center gap-0.5 rounded-full border border-[#e5e7eb] px-2.5 py-1 text-[11px] font-semibold">
                EN
                <ChevronDown className="h-3 w-3 text-[#6b7280]" strokeWidth={2.5} />
              </span>
              <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-[#e5e7eb]">
                <Moon className="h-3.5 w-3.5 text-[#4b5563]" strokeWidth={2} />
              </span>
              <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-gradient-to-br from-[#e3bb44] to-[#c39a24]">
                <User className="h-3.5 w-3.5 text-white" strokeWidth={2.2} />
              </span>
            </div>
          </div>

          {/* Ask surface */}
          <div className="px-5 pb-3 pt-7 text-center">
            <div className="relative mx-auto mb-4 w-[62px]">
              <div
                className="absolute -inset-4 rounded-full bg-gold/10 blur-xl"
                aria-hidden="true"
              />
              <Image
                src="/images/openhouse-mark-trimmed.png"
                alt=""
                width={256}
                height={256}
                className="relative w-[62px]"
              />
            </div>
            <p className="mb-4 text-[14px] font-bold leading-[1.25] tracking-[-0.01em] text-[#e0b52e]">
              OpenHouse Ai
            </p>

            <h3 className="mx-auto mb-2 max-w-[15ch] text-[19px] font-bold leading-[1.2] tracking-[-0.02em]">
              Ask anything about your home or community
            </h3>
            <p className="mx-auto mb-5 max-w-[26ch] text-[12.5px] leading-[1.45] text-[#6b7280]">
              Quick answers for daily life: floor plans, amenities, local
              services, and more.
            </p>

            <div className="grid grid-cols-2 gap-2">
              {CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="flex min-h-[34px] items-center justify-center rounded-full border border-[#e8eaee] bg-white px-2 text-center text-[11px] font-medium leading-tight shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Composer. The camera sits beside the microphone because a
              homeowner standing at a flashing panel photographs it far
              more readily than they describe it. */}
          <div className="mt-4 border-t border-[#eceef1] px-4 pb-2 pt-3">
            <div className="flex items-center gap-2 rounded-full bg-[#f2f3f5] py-2.5 pl-4 pr-3">
              <span className="flex-1 truncate text-[12.5px] text-[#9aa0aa]">
                Ask about your home or community...
              </span>
              <Camera className="h-[17px] w-[17px] text-[#4b5563]" strokeWidth={1.9} />
              <Mic className="h-[17px] w-[17px] text-[#111827]" strokeWidth={1.9} />
            </div>
            <p className="mt-2 whitespace-nowrap text-center text-[8.5px] text-[#9aa0aa]">
              Powered by AI &bull; Information for reference only &bull;{" "}
              <span className="underline">Privacy Policy</span>
            </p>
          </div>

          {/* Tab bar */}
          <div className="grid grid-cols-4 border-t border-[#eceef1] px-2 pb-4 pt-2.5">
            {TABS.map((tab, i) => (
              <span
                key={tab.label}
                className={`flex flex-col items-center gap-1 ${
                  i === 0 ? "text-[#c9a227]" : "text-[#6b7280]"
                }`}
              >
                <tab.icon className="h-[19px] w-[19px]" strokeWidth={1.8} />
                <span
                  className={`text-[9.5px] leading-none ${
                    i === 0 ? "font-semibold" : "font-medium"
                  }`}
                >
                  {tab.label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}
