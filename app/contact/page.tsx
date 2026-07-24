import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { WalkthroughRequestForm } from "@/components/forms/WalkthroughRequestForm";
import { Mail, Clock, FileText, MonitorPlay, ClipboardList } from "lucide-react";

export const metadata = {
  title: "Request a house-type walkthrough | OpenHouse Ai",
  description:
    "Thirty minutes. Bring one house type. You'll see the record OpenHouse builds from it and the sourced answers your buyers would get.",
};

/* Two audiences arrive here from different buttons. The installer route
   (?intent=care) has to land on installer language: the form fields
   already switch, but a page still headed "Request a house-type
   walkthrough" makes "Run the callout calculation" look like it did
   nothing. */
const COPY = {
  developer: {
    eyebrow: "Talk to us",
    heading: "Request a house-type walkthrough.",
    intro:
      "Thirty minutes, on a call. Bring one house type and we’ll show you the record OpenHouse builds from it, the sourced answers your buyers would get, and the aftercare intelligence you’d see coming back.",
    steps: [
      {
        icon: Mail,
        title: "Your request lands with the founder",
        body: "The form composes an email from you to us, with the details we need to prepare.",
      },
      {
        icon: Clock,
        title: "We reply with times",
        body: "Usually within one working day, from a person, not a sequence.",
      },
      {
        icon: MonitorPlay,
        title: "A thirty-minute walkthrough",
        body: "On a call, against a house type like yours: the record, the assistant, and what you'd see coming back.",
      },
    ],
    handy:
      "The pack for one house type: manuals, certs, plans. If it’s scattered, that’s normal. Bring what you have.",
  },
  care: {
    eyebrow: "For installers",
    heading: "Run the callout calculation.",
    intro:
      "Bring your last three months of callouts. We’ll identify which ones Care could have handled and calculate the value using your own numbers, on a thirty-minute call.",
    steps: [
      {
        icon: Mail,
        title: "Your numbers land with the founder",
        body: "The form composes an email from you to us, with the details we need to prepare.",
      },
      {
        icon: Clock,
        title: "We reply with times",
        body: "Usually within one working day, from a person, not a sequence.",
      },
      {
        icon: ClipboardList,
        title: "We do the math together",
        body: "On a call, against your own callout log: which ones Care could have handled, and what that is worth to you.",
      },
    ],
    handy:
      "Your callout log for the last three months. A rough export, or even a tally by system type, is enough to start.",
  },
} as const;

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { intent?: string };
}) {
  const copy = searchParams?.intent === "care" ? COPY.care : COPY.developer;

  return (
    <div className="pt-24 md:pt-28 pb-24 min-h-screen bg-carbon">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              {copy.eyebrow}
            </p>
            <h1 className="text-[32px] sm:text-5xl font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-5">
              {copy.heading}
            </h1>
            <p className="text-[17px] sm:text-lg text-porcelain/75 leading-relaxed">
              {copy.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-start">
            {/* The form */}
            <div className="rounded-3xl border border-white/10 bg-neutral-900/80 backdrop-blur-xl p-6 sm:p-8">
              <Suspense fallback={<div className="min-h-[560px]" aria-hidden="true" />}>
                <WalkthroughRequestForm />
              </Suspense>
            </div>

            {/* Aside */}
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                <h2 className="text-[16px] font-semibold text-white mb-5 font-heading">
                  What happens next
                </h2>
                <ol className="space-y-4">
                  {copy.steps.map((s, i) => (
                    <li key={s.title} className="flex items-start gap-3.5">
                      <span className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center flex-shrink-0">
                        <s.icon className="w-4 h-4 text-gold" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[14px] font-semibold text-porcelain leading-snug">
                          {i + 1}. {s.title}
                        </p>
                        <p className="text-[13px] text-porcelain/60 leading-relaxed mt-1">
                          {s.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                <h2 className="text-[16px] font-semibold text-white mb-2 font-heading">
                  Prefer to just write?
                </h2>
                <p className="text-[13px] text-porcelain/60 leading-relaxed mb-4">
                  Skip the form. A two-line email works fine.
                </p>
                <a
                  href="mailto:sam@openhouseai.ie"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-gold hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  sam@openhouseai.ie
                </a>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                <h2 className="text-[16px] font-semibold text-white mb-2 font-heading">
                  Worth having to hand
                </h2>
                <p className="text-[13px] text-porcelain/60 leading-relaxed flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                  {copy.handy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
