import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { WalkthroughRequestForm } from "@/components/forms/WalkthroughRequestForm";
import { Mail, Clock, FileText, MonitorPlay } from "lucide-react";

export const metadata = {
  title: "Request a house-type walkthrough | OpenHouse Ai",
  description:
    "Thirty minutes. Bring one house type. You'll see the record OpenHouse builds from it and the sourced answers your buyers would get.",
};

const steps = [
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
];

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-28 pb-24 min-h-screen bg-carbon">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              Talk to us
            </p>
            <h1 className="text-[32px] sm:text-5xl font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-5">
              Request a house-type walkthrough.
            </h1>
            <p className="text-[17px] sm:text-lg text-porcelain/75 leading-relaxed">
              Thirty minutes, on a call. Bring one house type and we&rsquo;ll show you the record OpenHouse builds from it, the sourced answers your buyers would get, and the aftercare intelligence you&rsquo;d see coming back.
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
                  {steps.map((s, i) => (
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
                  The pack for one house type: manuals, certs, plans. If it&rsquo;s scattered, that&rsquo;s normal. Bring what you have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
