import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/ContactForm";
import { FileText, Mail, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Request a walkthrough | OpenHouse Ai",
  description:
    "Bring one house type and see how its plans, manuals and handover information become sourced homeowner answers and developer aftercare insight.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { interest?: string };
}) {
  const isCare = searchParams?.interest === "care";
  return (
    <div className="min-h-screen bg-carbon pb-24 pt-40 sm:pt-44">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-gold">
              {isCare ? "Installer pilot" : "Developer walkthrough"}
            </p>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-porcelain sm:text-5xl">
              {isCare ? "Test Care on one installation type." : "See OpenHouse on one real house type."}
            </h1>
            <p className="text-lg leading-relaxed text-porcelain/70">
              {isCare
                ? "Bring one approved installation specification and an anonymised three-month callout log. We will map what evidence can answer, what must escalate and what a limited pilot would need to prove."
                : "Bring the plans, manuals, warranties and handover information your team already creates. We will trace how that evidence becomes a homeowner answer, an honest escalation and a useful developer insight."}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            <Card className="border-white/10 bg-white/[0.035]">
              <CardHeader>
                <CardTitle>{isCare ? "Discuss a Care pilot" : "Request the walkthrough"}</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm mode={isCare ? "care" : "developer"} />
              </CardContent>
            </Card>

            <div className="space-y-5">
              <Card className="border-gold/20 bg-gold/[0.05]">
                <CardHeader>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10">
                    <FileText className="h-5 w-5 text-gold" aria-hidden="true" />
                  </div>
                  <CardTitle>What to bring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm leading-relaxed text-porcelain/70">
                    {isCare ? (
                      <>
                        <li>One typical installation specification</li>
                        <li>The approved homeowner and installer guidance</li>
                        <li>An anonymised three-month callout log</li>
                        <li>One recurring customer question</li>
                      </>
                    ) : (
                      <>
                        <li>One current or recently completed house type</li>
                        <li>The approved plans and system manuals</li>
                        <li>Your handover pack or Home User Guide</li>
                        <li>One recurring homeowner question</li>
                      </>
                    )}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/[0.025]">
                <CardHeader>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                    <MessageCircle className="h-5 w-5 text-gold" aria-hidden="true" />
                  </div>
                  <CardTitle>Prefer to start by email?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-5 text-sm leading-relaxed text-porcelain/65">
                    {isCare
                      ? "Send a short note with the installation type and recurring support problem you want to test."
                      : "Send a short note with the scheme type and the handover or aftercare problem you want to solve."}
                  </p>
                  <a
                    href={`mailto:sam@openhouseai.ie?subject=${isCare ? "OpenHouse%20Care%20pilot" : "OpenHouse%20house-type%20walkthrough"}`}
                    className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-gold/30 px-5 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    sam@openhouseai.ie
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
