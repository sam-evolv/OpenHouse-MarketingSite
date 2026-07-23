import { FileCheck2, Home, Library, Radio, Wrench } from "lucide-react";
import { CapabilityLabel } from "./CapabilityLabel";
import { evidenceLayers } from "./home-content";
import { SectionShell } from "./SectionShell";

const layerIcons = [FileCheck2, Library, Home, Wrench, Radio] as const;

export function EvidenceModelSection() {
  return (
    <SectionShell id="working-example" tone="paper" className="relative overflow-hidden border-y border-carbon/10">
      <div className="pointer-events-none absolute inset-0 opacity-[0.45] [background-image:linear-gradient(rgba(10,10,10,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.04)_1px,transparent_1px)] [background-size:48px_48px]" aria-hidden="true" />
      <div className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-carbon/55">How the product works</p>
              <CapabilityLabel status="live" />
            </div>
            <h2 className="mt-6 max-w-[13ch] font-editorial text-[clamp(2.8rem,5.8vw,5.8rem)] leading-[0.95] tracking-[-0.045em] text-carbon">
              The answer is only as good as the home’s context.
            </h2>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-relaxed text-carbon/70 sm:text-lg">
              OpenHouse organises supplied and approved information around the house type, rooms and installed systems it describes. The homeowner can ask one place instead of searching a handover folder.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-carbon/50">
              It does not invent missing evidence. Where the available information cannot support an answer, the question can be surfaced for the developer team.
            </p>
          </div>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-[1.75rem] border border-carbon/15 bg-[#e8e2d5]/75 shadow-[0_30px_80px_rgba(34,29,20,0.12)] lg:grid-cols-[0.88fr_1.24fr_0.88fr]">
          <div className="border-b border-carbon/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-carbon/45">Evidence supplied</p>
            <div className="mt-6 space-y-3">
              {evidenceLayers.map((layer, index) => {
                const Icon = layerIcons[index];
                return (
                  <div key={layer.label} className="flex items-start gap-3 rounded-xl border border-carbon/10 bg-white/35 p-3.5">
                    <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-gold/35 bg-gold/10 text-[#7e6415]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-carbon/85">{layer.label}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-carbon/48">{layer.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden border-b border-carbon/10 bg-[#dad2c2]/45 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(10,10,10,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.07)_1px,transparent_1px)] [background-size:30px_30px]" aria-hidden="true" />
            <div className="relative flex h-full min-h-[356px] flex-col">
              <div className="flex items-center justify-between">
                <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-carbon/45">Home-specific context</p>
                <span className="rounded-full border border-carbon/15 bg-white/30 px-3 py-1 text-[0.625rem] uppercase tracking-[0.14em] text-carbon/55">The Rowan</span>
              </div>

              <svg viewBox="0 0 420 260" className="my-auto w-full" role="img" aria-label="House type organised into rooms, plans and installed systems">
                <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M76 214V112L208 42l136 70v102" stroke="rgba(10,10,10,0.68)" strokeWidth="2" />
                  <path d="M97 214V126l111-58 115 58v88" stroke="rgba(10,10,10,0.24)" />
                  <path d="M76 214h268M208 42v172M97 164h226M154 96v118M266 96v118" stroke="rgba(10,10,10,0.22)" />
                  <rect x="166" y="164" width="84" height="50" fill="rgba(212,175,55,0.13)" stroke="#9b7b19" strokeWidth="1.5" />
                  <path d="M23 68C74 68 92 101 145 101M279 96c54 0 64-35 116-35M23 238c70 0 89-24 143-24M250 214c58 0 72 24 145 24" stroke="#9b7b19" strokeDasharray="4 6" />
                </g>
                <g fill="#9b7b19">
                  <circle cx="23" cy="68" r="3" />
                  <circle cx="145" cy="101" r="3" />
                  <circle cx="279" cy="96" r="3" />
                  <circle cx="395" cy="61" r="3" />
                  <circle cx="23" cy="238" r="3" />
                  <circle cx="166" cy="214" r="3" />
                  <circle cx="250" cy="214" r="3" />
                  <circle cx="395" cy="238" r="3" />
                </g>
                <text x="182" y="187" fill="#665111" fontSize="10" fontFamily="system-ui" letterSpacing="1.5">LIVING</text>
                <text x="184" y="200" fill="rgba(10,10,10,0.5)" fontSize="8" fontFamily="system-ui">28.5 m²</text>
              </svg>

              <div className="grid grid-cols-3 gap-2 text-center">
                {[
                  ["Room", "Living"],
                  ["Plan", "A3"],
                  ["System", "Heat pump"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-carbon/10 bg-white/25 px-2 py-2.5">
                    <p className="text-[0.5625rem] uppercase tracking-[0.14em] text-carbon/42">{label}</p>
                    <p className="mt-1 text-xs font-semibold text-carbon/72">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-carbon/45">What the homeowner sees</p>
            <div className="mt-6 rounded-2xl border border-carbon/12 bg-[#f7f3ea] p-5 shadow-[0_16px_40px_rgba(34,29,20,0.08)]">
              <p className="inline-block rounded-2xl rounded-bl-md bg-carbon px-4 py-3 text-sm text-porcelain">What size is my living room?</p>
              <div className="mt-4 border-l-2 border-gold pl-4">
                <p className="text-sm leading-relaxed text-carbon/76">The living room is shown as 28.5 m² in the supplied Ground Floor plan.</p>
                <p className="mt-3 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[#7e6415]">Source · Ground Floor plan, A3</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-dashed border-carbon/18 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-carbon/48">If evidence is missing</p>
              <p className="mt-2 text-sm leading-relaxed text-carbon/62">OpenHouse can show the gap rather than present an unsupported answer.</p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
