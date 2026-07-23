import Image from "next/image";
import { FileText, SearchCheck, UserRoundCheck } from "lucide-react";
import { CapabilityLabel } from "./CapabilityLabel";
import { SectionShell } from "./SectionShell";

const proofPoints = [
  {
    icon: UserRoundCheck,
    label: "Home-specific",
    detail: "The answer uses the house type and home context available to OpenHouse.",
  },
  {
    icon: SearchCheck,
    label: "Source visible",
    detail: "The homeowner can see the supplied plan or manual behind the response.",
  },
  {
    icon: FileText,
    label: "Next step included",
    detail: "Useful guidance stays connected to the evidence it came from.",
  },
] as const;

export function HomeownerProofSection() {
  return (
    <SectionShell id="homeowner-proof" tone="carbon" className="border-b border-white/[0.07]">
      <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-center lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-gold">The homeowner experience</p>
            <CapabilityLabel status="live" />
          </div>
          <h2 className="mt-6 max-w-[10ch] font-heading text-[clamp(3rem,6vw,6.6rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-white">
            Ask the home, not the folder.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-porcelain/65 sm:text-lg">
            A homeowner asks in ordinary language. OpenHouse answers from the information supplied for that house type or home, then keeps the source in view.
          </p>

          <div className="mt-9 space-y-3">
            {proofPoints.map((item) => (
              <div key={item.label} className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-white/10 pt-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-gold/[0.08] text-gold">
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-porcelain">{item.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-porcelain/50">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 bg-[radial-gradient(circle_at_50%_45%,rgba(212,175,55,0.16),transparent_60%)] blur-2xl" aria-hidden="true" />
          <div className="relative grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0b] shadow-[0_45px_120px_rgba(0,0,0,0.5)] sm:grid-cols-[0.44fr_0.56fr]">
            <div className="flex items-center justify-center border-b border-white/10 bg-[linear-gradient(145deg,#17140c,#0d0d0b)] p-5 sm:border-b-0 sm:border-r sm:p-8">
              <Image
                src="/images/product/assistant-floorplan-ui.png"
                alt="Example OpenHouse answer showing the living-room size, highlighted floor plan and supplied source"
                width={475}
                height={695}
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 38vw, 29vw"
                className="h-auto w-full max-w-[23rem] rounded-[2rem] shadow-[0_30px_70px_rgba(0,0,0,0.35)]"
              />
            </div>
            <div className="flex flex-col p-6 sm:p-8 lg:p-10">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-porcelain/42">Working product pattern</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">A room answer that shows its work.</h3>
              <p className="mt-4 text-sm leading-relaxed text-porcelain/58">
                In this example, the supplied Ground Floor plan supports the living-room measurement and remains one tap away.
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  ["Question", "What size is my living room?"],
                  ["Answer", "28.5 m²"],
                  ["Source", "Ground Floor plan, A3"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                    <p className="text-[0.5625rem] font-semibold uppercase tracking-[0.17em] text-gold">{label}</p>
                    <p className="mt-1.5 text-sm text-porcelain/78">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0b] p-3 shadow-[0_35px_90px_rgba(0,0,0,0.4)] sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-2 sm:px-3">
              <div>
                <p className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold">System guidance</p>
                <p className="mt-1 text-sm text-porcelain/58">An example E3 answer expands into sourced steps.</p>
              </div>
              <p className="text-xs text-porcelain/38">Mitsubishi Ecodan manual · page 14</p>
            </div>
            <Image
              src="/images/product/assistant-e3-ui.png"
              alt="Example OpenHouse heat-pump answer expanding into five clear steps with a manual-page source"
              width={1120}
              height={560}
              sizes="(max-width: 1024px) 92vw, 58vw"
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
