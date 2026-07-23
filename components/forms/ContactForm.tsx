"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  scheme: string;
  units: string;
  problem: string;
  preferredTime: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  role: "",
  scheme: "",
  units: "",
  problem: "",
  preferredTime: "",
};

const fieldClass =
  "min-h-[48px] w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-porcelain placeholder:text-porcelain/40 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30";

export function ContactForm({ mode = "developer" }: { mode?: "developer" | "care" }) {
  const isCare = mode === "care";
  const [form, setForm] = useState(initialState);
  const [opened, setOpened] = useState(false);

  const setValue = (key: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `${isCare ? "Care pilot" : "House-type walkthrough"} request from ${form.company}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company}`,
      `Role: ${form.role}`,
      `${isCare ? "Installation type or active base" : "Scheme or development type"}: ${form.scheme}`,
      `${isCare ? "Approximate active installs" : "Approximate units"}: ${form.units}`,
      `${isCare ? "Recurring support or callout problem" : "Biggest handover or aftercare problem"}: ${form.problem}`,
      `Preferred time: ${form.preferredTime}`,
    ].join("\n");

    setOpened(true);
    window.location.href = `mailto:sam@openhouseai.ie?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
            value={form.name}
            onChange={(event) => setValue("name", event.target.value)}
          />
        </Field>
        <Field label="Work email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            value={form.email}
            onChange={(event) => setValue("email", event.target.value)}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" htmlFor="company">
          <input
            id="company"
            name="company"
            required
            autoComplete="organization"
            className={fieldClass}
            value={form.company}
            onChange={(event) => setValue("company", event.target.value)}
          />
        </Field>
        <Field label="Role" htmlFor="role">
          <input
            id="role"
            name="role"
            required
            autoComplete="organization-title"
            className={fieldClass}
            value={form.role}
            onChange={(event) => setValue("role", event.target.value)}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={isCare ? "Installation type or active base" : "Current scheme or development type"} htmlFor="scheme">
          <input
            id="scheme"
            name="scheme"
            required
            placeholder={isCare ? "For example, Daikin Altherma installations" : "For example, 3-bed semi-detached scheme"}
            className={fieldClass}
            value={form.scheme}
            onChange={(event) => setValue("scheme", event.target.value)}
          />
        </Field>
        <Field label={isCare ? "Approximate active installs" : "Approximate units"} htmlFor="units">
          <input
            id="units"
            name="units"
            inputMode="numeric"
            placeholder="For example, 120"
            className={fieldClass}
            value={form.units}
            onChange={(event) => setValue("units", event.target.value)}
          />
        </Field>
      </div>

      <Field label={isCare ? "Recurring support or callout problem" : "Biggest handover or aftercare problem"} htmlFor="problem">
        <textarea
          id="problem"
          name="problem"
          required
          rows={4}
          className={fieldClass}
          placeholder={isCare ? "What keeps generating calls, uncertainty or site visits?" : "What keeps being repeated, missed or escalated?"}
          value={form.problem}
          onChange={(event) => setValue("problem", event.target.value)}
        />
      </Field>

      <Field label="Preferred time" htmlFor="preferredTime">
        <input
          id="preferredTime"
          name="preferredTime"
          className={fieldClass}
          placeholder="For example, Tuesday after 4pm"
          value={form.preferredTime}
          onChange={(event) => setValue("preferredTime", event.target.value)}
        />
      </Field>

      <button
        type="submit"
        className="group inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-semibold text-carbon transition-transform hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-carbon"
      >
        {isCare ? "Discuss a Care pilot" : "Request a house-type walkthrough"}
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </button>

      <p className="flex items-start gap-2 text-xs leading-relaxed text-porcelain/55">
        <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
        {opened
          ? "Your email application should now be open with the request completed. Review it and press send."
          : "This opens a completed email to sam@openhouseai.ie. Nothing is submitted until you press send in your email application."}
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="block text-sm font-medium text-porcelain/85">
        {label}
      </label>
      {children}
    </div>
  );
}
