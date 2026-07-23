import Link from "next/link";
import { env } from "@/lib/env";
import { OpenHouseWordmark } from "@/components/brand/OpenHouseWordmark";

const productLinks = [
  { label: "Product", href: "/#working-example" },
  { label: "For developers", href: "/developer-dashboard" },
  { label: "For homeowners", href: "/property-assistant" },
  { label: "Energy direction", href: "/intelligence" },
] as const;

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Support", href: "/support" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#080808] text-porcelain">
      <div className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.7fr_0.7fr]">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex text-gold">
              <OpenHouseWordmark />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-porcelain/62">
              Home-specific context, practical homeowner answers and clearer developer insight after handover.
            </p>
            <a href={`mailto:${env.CONTACT_EMAIL}`} className="mt-5 inline-block text-sm text-porcelain/62 transition-colors hover:text-gold">
              {env.CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-porcelain/82">OpenHouse</h2>
            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-porcelain/58 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-porcelain/82">Legal</h2>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-porcelain/58 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.07] pt-6 text-xs text-porcelain/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} OpenHouse AI. All rights reserved.</p>
          <a href="https://www.evolvai.ie" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-porcelain/70">
            Built by EvolvAI
          </a>
        </div>
      </div>
    </footer>
  );
}
