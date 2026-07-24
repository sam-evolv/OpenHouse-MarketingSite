"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, Copy, Check } from "lucide-react";

/* Kept local so this client component never imports lib/env, which also
   carries server-side configuration. Same address the rest of the site uses. */
const CONTACT_EMAIL = "sam@openhouseai.ie";

/**
 * WalkthroughRequestForm — the site's real conversion path.
 *
 * Honest mechanics, no fake success screens: submitting composes a
 * structured email to the founder and opens it in the visitor's own mail
 * client. Nothing is sent until they press send there, and a copy-to-
 * clipboard fallback covers machines with no mail client configured.
 *
 * Two intents share the form: the developer house-type walkthrough
 * (default) and the installer callout calculation (?intent=care).
 */

type Intent = "developer" | "care";

const ROLE_OPTIONS = [
  "Managing director / owner",
  "Development or construction manager",
  "Sales and marketing",
  "Aftercare / customer care",
  "Other",
];

const UNIT_OPTIONS = ["Under 25", "25 to 100", "100 to 500", "500 plus"];

const TIME_OPTIONS = ["Morning", "Afternoon", "Flexible"];

const INSTALL_OPTIONS = [
  "Heat pumps",
  "Solar PV",
  "Batteries",
  "Mixed / multiple systems",
];

const BASE_OPTIONS = ["Under 100", "100 to 500", "500 to 2,000", "2,000 plus"];

const inputCls =
  "w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-[15px] text-porcelain placeholder:text-porcelain/35 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold/50 transition-colors";
const labelCls = "block text-[13px] font-semibold text-porcelain/80 mb-1.5";

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>
        {label}
        {required && (
          <span className="text-gold ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

export function WalkthroughRequestForm() {
  const searchParams = useSearchParams();
  const intent: Intent = searchParams.get("intent") === "care" ? "care" : "developer";

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [scheme, setScheme] = useState("");
  const [units, setUnits] = useState("");
  const [problem, setProblem] = useState("");
  const [time, setTime] = useState("");
  const [installs, setInstalls] = useState("");
  const [base, setBase] = useState("");
  const [callouts, setCallouts] = useState("");
  const [copied, setCopied] = useState(false);
  const [touched, setTouched] = useState(false);

  const isCare = intent === "care";
  const valid = name.trim().length > 1 && company.trim().length > 1;

  const subject = isCare
    ? `Callout calculation request from ${company.trim() || "an installer"}`
    : `House-type walkthrough request from ${company.trim() || "a developer"}`;

  const body = useMemo(() => {
    const lines = isCare
      ? [
          `Name: ${name}`,
          `Company: ${company}`,
          `Systems installed: ${installs || "(not specified)"}`,
          `Installation base: ${base || "(not specified)"}`,
          `Callouts in the last three months: ${callouts || "(not specified)"}`,
          `Biggest support headache: ${problem || "(not specified)"}`,
          `Preferred time: ${time || "Flexible"}`,
          ``,
          `Requested from openhouseai.ie (callout calculation).`,
        ]
      : [
          `Name: ${name}`,
          `Company: ${company}`,
          `Role: ${role || "(not specified)"}`,
          `Current scheme / development type: ${scheme || "(not specified)"}`,
          `Approximate units: ${units || "(not specified)"}`,
          `Biggest handover or aftercare problem: ${problem || "(not specified)"}`,
          `Preferred time: ${time || "Flexible"}`,
          ``,
          `Requested from openhouseai.ie (house-type walkthrough).`,
        ];
    return lines.join("\n");
  }, [isCare, name, company, role, scheme, units, problem, time, installs, base, callouts]);

  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    window.location.href = mailto;
  };

  const handleCopy = async () => {
    setTouched(true);
    if (!valid) return;
    try {
      await navigator.clipboard.writeText(
        `To: ${CONTACT_EMAIL}\nSubject: ${subject}\n\n${body}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard unavailable; the mailto path still works */
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="wr-name" label="Full name" required>
          <input
            id="wr-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputCls}
            placeholder="Your name"
            aria-invalid={touched && name.trim().length < 2}
          />
        </Field>
        <Field id="wr-company" label="Company" required>
          <input
            id="wr-company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={inputCls}
            placeholder={isCare ? "Your installation business" : "Your development company"}
            aria-invalid={touched && company.trim().length < 2}
          />
        </Field>
      </div>

      {isCare ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field id="wr-installs" label="What you install">
              <select
                id="wr-installs"
                name="installs"
                value={installs}
                onChange={(e) => setInstalls(e.target.value)}
                className={inputCls}
              >
                <option value="">Select</option>
                {INSTALL_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </Field>
            <Field id="wr-base" label="Installation base">
              <select
                id="wr-base"
                name="base"
                value={base}
                onChange={(e) => setBase(e.target.value)}
                className={inputCls}
              >
                <option value="">Select</option>
                {BASE_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <Field id="wr-callouts" label="Callouts in the last three months (rough count)">
            <input
              id="wr-callouts"
              name="callouts"
              type="text"
              inputMode="numeric"
              value={callouts}
              onChange={(e) => setCallouts(e.target.value)}
              className={inputCls}
              placeholder="e.g. 120"
            />
          </Field>
          <Field id="wr-problem" label="Your biggest support headache">
            <textarea
              id="wr-problem"
              name="problem"
              rows={3}
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              className={inputCls}
              placeholder="e.g. repeat calls about controls, winter surge, out-of-hours cover"
            />
          </Field>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field id="wr-role" label="Role">
              <select
                id="wr-role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className={inputCls}
              >
                <option value="">Select</option>
                {ROLE_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </Field>
            <Field id="wr-units" label="Approximate units">
              <select
                id="wr-units"
                name="units"
                value={units}
                onChange={(e) => setUnits(e.target.value)}
                className={inputCls}
              >
                <option value="">Select</option>
                {UNIT_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <Field id="wr-scheme" label="Current scheme or development type">
            <input
              id="wr-scheme"
              name="scheme"
              type="text"
              value={scheme}
              onChange={(e) => setScheme(e.target.value)}
              className={inputCls}
              placeholder="e.g. 64 units, three-bed semis, Cork"
            />
          </Field>
          <Field id="wr-problem" label="Your biggest handover or aftercare problem">
            <textarea
              id="wr-problem"
              name="problem"
              rows={3}
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              className={inputCls}
              placeholder="e.g. the same questions for months after every closing"
            />
          </Field>
        </>
      )}

      <Field id="wr-time" label="Preferred time">
        <select
          id="wr-time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className={inputCls}
        >
          <option value="">Select</option>
          {TIME_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>

      {touched && !valid && (
        <p role="alert" className="text-[13px] text-amber-300">
          Add your name and company so we know who to reply to.
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <button
          type="submit"
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-carbon text-[15px] font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-carbon"
        >
          <Send className="w-4 h-4" aria-hidden="true" />
          {isCare ? "Run the callout calculation" : "Request the walkthrough"}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/20 text-[15px] font-medium text-porcelain hover:border-gold/50 hover:bg-white/5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-carbon"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" aria-hidden="true" />
              Copy the request
            </>
          )}
        </button>
      </div>

      <p className="text-[12px] text-porcelain/50 leading-relaxed">
        Submitting opens a pre-filled email to {CONTACT_EMAIL} in your own mail app. Nothing is sent until you press send there. No mail client? Use &ldquo;Copy the request&rdquo; and paste it wherever you write email.
      </p>
    </form>
  );
}
