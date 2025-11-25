import Link from "next/link";
import { appRoutes, env } from "@/lib/env";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Solutions", href: "/solutions" },
      { label: "Pricing", href: "/pricing" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Contact", href: "/contact" },
      { label: "Support", href: `mailto:${env.SUPPORT_EMAIL}` },
    ],
  },
  platform: {
    title: "Platform",
    links: [
      { label: "Developer Portal", href: appRoutes.login, external: true },
      { label: "Superadmin Login", href: appRoutes.superadminLogin, external: true },
      { label: "Start Onboarding", href: appRoutes.register, external: true },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-slate border-t border-hint/10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gold">OpenHouse AI</h3>
            <p className="text-sm text-hint">
              The AI Resident Portal for Modern Developments
            </p>
            <p className="text-sm text-hint">
              <a
                href={`mailto:${env.CONTACT_EMAIL}`}
                className="hover:text-gold transition-colors"
              >
                {env.CONTACT_EMAIL}
              </a>
            </p>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-porcelain mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {(link as any).external ? (
                      <a
                        href={link.href}
                        className="text-sm text-hint hover:text-gold transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        prefetch={true}
                        className="text-sm text-hint hover:text-gold transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-hint/10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-hint">
            © {new Date().getFullYear()} OpenHouse AI. All rights reserved.
          </p>
          <p className="text-xs text-hint mt-2 sm:mt-0">Made by EvolvAi</p>
        </div>
      </div>
    </footer>
  );
}
