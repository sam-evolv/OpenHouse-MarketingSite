import Link from "next/link";
import Image from "next/image";
import { env } from "@/lib/env";

const productLinks = [
  { label: "Developer Dashboard", href: "/developers" },
  { label: "Property Assistant", href: "/assistant" },
  { label: "Care", href: "/care" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Support", href: "/support" },
];

export function Footer() {
  return (
    <footer className="bg-carbon border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/images/openhouseai-logo.png"
                alt="OpenHouse Ai"
                width={600}
                height={150}
                sizes="(min-width: 768px) 519px, (min-width: 640px) 461px, 404px"
                className="h-[6.3rem] sm:h-[7.2rem] md:h-[8.1rem] w-auto animate-breathe"
              />
            </Link>
            <p className="text-xs text-porcelain/60 leading-relaxed mb-4">
              One platform for property developers, a 24/7 AI assistant for every
              home, and dedicated Care for renewables installers.
            </p>
            <a
              href={`mailto:${env.CONTACT_EMAIL}`}
              className="text-xs text-porcelain/60 hover:text-gold transition-colors"
            >
              {env.CONTACT_EMAIL}
            </a>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-xs font-semibold text-porcelain uppercase tracking-wider mb-4">
              Platform
            </h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="text-xs text-porcelain/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Resources */}
          <div>
            <h3 className="text-xs font-semibold text-porcelain uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="text-xs text-porcelain/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-porcelain/60">
            © {new Date().getFullYear()} OpenHouse Ai. All rights reserved.
          </p>
          <a 
            href="https://www.evolvai.ie" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-porcelain/60 hover:text-porcelain/60 transition-colors"
          >
            <span>Designed & Developed by EvolvAi</span>
            <img 
              src="/images/evolvai-logo.png" 
              alt="EvolvAi" 
              className="h-4 w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
