import Link from "next/link";
import { env } from "@/lib/env";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Documentation", href: "/docs" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="bg-carbon border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-gold mb-3">OpenHouse AI</h3>
            <p className="text-xs text-porcelain/50 leading-relaxed mb-4">
              The AI Resident Portal for Modern Developments. 
              Transforming how developers support their residents.
            </p>
            <a
              href={`mailto:${env.CONTACT_EMAIL}`}
              className="text-xs text-porcelain/50 hover:text-gold transition-colors"
            >
              {env.CONTACT_EMAIL}
            </a>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-semibold text-porcelain uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="text-xs text-porcelain/50 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Resources */}
          <div>
            <h4 className="text-xs font-semibold text-porcelain uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="text-xs text-porcelain/50 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-porcelain/40">
            © {new Date().getFullYear()} OpenHouse AI. All rights reserved.
          </p>
          <p className="text-xs text-porcelain/30">Made by EvolvAi</p>
        </div>
      </div>
    </footer>
  );
}
