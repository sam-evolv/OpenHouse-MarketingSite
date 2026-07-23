import { evidenceLayers } from "./home-content";
import { EvidenceThread } from "./EvidenceThread";

type LivingHomeDiagramProps = {
  active?: boolean;
};

export function LivingHomeDiagram({ active = true }: LivingHomeDiagramProps) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d0d0b] shadow-[0_45px_120px_rgba(0,0,0,0.55)]">
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:36px_36px]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
        <div>
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-gold">Example house type</p>
          <p className="mt-1 text-sm font-medium text-white">The Rowan · 3 bed</p>
        </div>
        <p className="rounded-full border border-gold/25 bg-gold/[0.06] px-3 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-gold">
          Home context
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 top-[74px]">
        <EvidenceThread active={active} />

        <svg viewBox="0 0 720 420" className="absolute inset-0 h-full w-full" role="img" aria-label="Architectural outline of a home connected to plans, systems and documents">
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M235 284V184L356 104l129 80v100" stroke="rgba(245,245,243,0.7)" strokeWidth="2" />
            <path d="M256 284V198l100-66 108 66v86" stroke="rgba(245,245,243,0.2)" />
            <path d="M235 284h250" stroke="rgba(245,245,243,0.5)" strokeWidth="1.5" />
            <path d="M356 104v180M256 225h208M307 165v119M408 166v118" stroke="rgba(245,245,243,0.18)" />
            <rect x="324" y="225" width="58" height="59" stroke="rgba(244,215,122,0.72)" />
            <path d="M324 225l58 59M382 225l-58 59" stroke="rgba(244,215,122,0.2)" />
            <path d="M276 243h20M416 243h27M326 183h58" stroke="rgba(245,245,243,0.38)" strokeWidth="5" />
          </g>
          <text x="337" y="259" fill="#F4D77A" fontSize="10" fontFamily="system-ui" letterSpacing="1.4">LIVING</text>
          <text x="336" y="272" fill="rgba(245,245,243,0.45)" fontSize="8" fontFamily="system-ui">28.5 m²</text>
        </svg>

        <div className="absolute left-[4%] top-[6%] max-w-[10.5rem] rounded-xl border border-gold/25 bg-black/80 p-3 backdrop-blur-sm">
          <p className="text-[0.625rem] uppercase tracking-[0.16em] text-gold">Known answer</p>
          <p className="mt-1 text-sm font-semibold text-white">Living room · 28.5 m²</p>
          <p className="mt-1 text-[0.625rem] text-porcelain/48">Source · Ground Floor plan, A3</p>
        </div>
        <div className="absolute right-[3%] top-[12%] max-w-[9.5rem] rounded-xl border border-white/10 bg-black/75 p-3 backdrop-blur-sm">
          <p className="text-[0.625rem] uppercase tracking-[0.16em] text-porcelain/45">Installed system</p>
          <p className="mt-1 text-xs text-porcelain/85">Heat pump manual</p>
        </div>
        <div className="absolute bottom-[8%] left-[5%] max-w-[9.5rem] rounded-xl border border-white/10 bg-black/75 p-3 backdrop-blur-sm">
          <p className="text-[0.625rem] uppercase tracking-[0.16em] text-porcelain/45">Specification</p>
          <p className="mt-1 text-xs text-porcelain/85">Fixtures and finishes</p>
        </div>
        <div className="absolute bottom-[7%] right-[4%] max-w-[9.5rem] rounded-xl border border-white/10 bg-black/75 p-3 backdrop-blur-sm">
          <p className="text-[0.625rem] uppercase tracking-[0.16em] text-porcelain/45">Home record</p>
          <p className="mt-1 text-xs text-porcelain/85">Documents and history</p>
        </div>

        <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 sm:flex" aria-hidden="true">
          {evidenceLayers.slice(0, 4).map((layer) => (
            <span key={layer.label} className="text-[0.5625rem] uppercase tracking-[0.14em] text-porcelain/30">
              {layer.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
