import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, Home, Mail, Wrench } from "lucide-react";
import { Container } from "@/components/ui/container";

const emailHref =
  "mailto:sam@openhouseai.ie?subject=OpenHouse%20house-type%20walkthrough&body=Hi%20Sam%2C%0A%0AI%27d%20like%20to%20see%20one%20of%20our%20house%20types%20inside%20OpenHouse.%0A%0ACompany%3A%0ADevelopment%3A%0AHouse%20type%3A%0AAvailable%20information%3A%0A%0AThe%20best%20way%20to%20reach%20me%20is%3A%0A";

export const metadata: Metadata = {
  title: "Request a house-type walkthrough",
  description:
    "Bring one house type and see how its plans, systems and purchaser information become an OpenHouse walkthrough.",
};

const startingMaterial = [
  {
    icon: Home,
    label: "One house type",
    detail: "A current or representative home from one of your developments.",
  },
  {
    icon: FileText,
    label: "Plans and purchaser information",
    detail: "The approved material you already use during sale or handover.",
  },
  {
    icon: Wrench,
    label: "Installed systems",
    detail: "The heating, ventilation or other systems the homeowner will need to understand.",
  },
] as const;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-carbon pb-24 pt-36 text-porcelain sm:pt-44">
      <Container>
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-porcelain/48 transition-colors hover:text-gold">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to the product story
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          <div>
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-gold">A concrete first step</p>
            <h1 className="mt-6 max-w-[11ch] font-editorial text-[clamp(3.4rem,7vw,7.2rem)] leading-[0.9] tracking-[-0.055em] text-white">
              Request a house-type walkthrough.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-porcelain/62 sm:text-lg">
              Bring one house type. We will use the available plans, systems and purchaser information to prepare a focused OpenHouse walkthrough for your development.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-porcelain/40">
              This is not a generic platform demo. The useful question is what OpenHouse can explain from the information attached to one of your homes.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#eee9de] text-carbon shadow-[0_45px_120px_rgba(0,0,0,0.42)]">
            <div className="border-b border-carbon/10 px-6 py-6 sm:px-8">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-carbon/45">What to bring</p>
            </div>
            <div className="space-y-0 px-6 sm:px-8">
              {startingMaterial.map((item) => (
                <div key={item.label} className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-carbon/10 py-6 last:border-b-0">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#9b7b19]/25 bg-[#9b7b19]/8 text-[#7e6415]">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-carbon">{item.label}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-carbon/58">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-carbon/10 bg-white/35 p-6 sm:p-8">
              <a
                href={emailHref}
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-carbon px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7e6415]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email sam@openhouseai.ie
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <p className="mt-4 text-center text-xs leading-relaxed text-carbon/48">
                This opens your email app with the useful details already prompted. Review it, add what you have and send when ready.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
