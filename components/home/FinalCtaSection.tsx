import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { SectionShell } from "./SectionShell";

const emailHref =
  "mailto:sam@openhouseai.ie?subject=OpenHouse%20house-type%20walkthrough&body=Hi%20Sam%2C%0A%0AI%27d%20like%20to%20see%20one%20of%20our%20house%20types%20inside%20OpenHouse.%0A%0ACompany%3A%0ADevelopment%3A%0AHouse%20type%3A%0A";

export function FinalCtaSection() {
  return (
    <SectionShell tone="carbon" className="border-b border-white/[0.07]">
      <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.17),transparent_44%),#0d0d0b] px-6 py-20 text-center shadow-[0_45px_120px_rgba(0,0,0,0.45)] sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-gold">A concrete starting point</p>
          <h2 className="mx-auto mt-6 max-w-[13ch] font-editorial text-[clamp(3rem,6.5vw,7rem)] leading-[0.92] tracking-[-0.05em] text-white">
            See one of your own house types inside OpenHouse.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-porcelain/60 sm:text-lg">
            Bring one house type, its plans, systems and purchaser information. We will turn the available material into a focused OpenHouse walkthrough.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact?intent=house-type-walkthrough"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-carbon transition-colors hover:bg-[#e1c25c]"
            >
              Request a house-type walkthrough
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <a
              href={emailHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-porcelain/78 transition-colors hover:border-gold/40 hover:text-gold"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email sam@openhouseai.ie
            </a>
          </div>

          <p className="mt-5 text-xs leading-relaxed text-porcelain/36">One house type is enough for the first conversation.</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-porcelain/32">
        <span>BER and NZEB context</span>
        <span>Part L and Part F source material</span>
        <span>Home User Guide evidence</span>
        <span>IGBC HPI-aligned workflows</span>
      </div>
      <p className="mx-auto mt-4 max-w-3xl text-center text-xs leading-relaxed text-porcelain/32">
        OpenHouse supports information and evidence workflows. It does not certify compliance or replace the relevant professional.
      </p>
    </SectionShell>
  );
}
