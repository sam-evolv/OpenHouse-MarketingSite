import type { CapabilityStatus } from "./home-content";

const labelStyles: Record<CapabilityStatus, string> = {
  live: "border-gold/45 bg-gold/[0.08] text-gold",
  example: "border-porcelain/25 bg-porcelain/[0.06] text-porcelain/75",
  direction: "border-sky-300/30 bg-sky-300/[0.07] text-sky-200",
};

const labelText: Record<CapabilityStatus, string> = {
  live: "Live",
  example: "Example",
  direction: "Direction",
};

type CapabilityLabelProps = {
  status: CapabilityStatus;
  qualifier?: string;
  tone?: "dark" | "light";
};

export function CapabilityLabel({ status, qualifier, tone = "dark" }: CapabilityLabelProps) {
  const lightTone = tone === "light" ? "border-carbon/20 text-carbon/70" : labelStyles[status];

  return (
    <p className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] ${lightTone}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      <span>{labelText[status]}</span>
      {qualifier ? <span className="normal-case tracking-normal opacity-70">· {qualifier}</span> : null}
    </p>
  );
}
