"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { appRoutes } from "@/lib/env";
import { OpenHouseWordmark } from "@/components/brand/OpenHouseWordmark";

const navigationLinks = [
  { href: "/#working-example", label: "Product" },
  { href: "/developer-dashboard", label: "For developers" },
  { href: "/intelligence", label: "Energy direction" },
] as const;

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-carbon/[0.92] backdrop-blur-xl" aria-label="Main navigation">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
            <OpenHouseWordmark />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-porcelain/66 transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a href={appRoutes.login} className="text-sm font-medium text-porcelain/55 transition-colors hover:text-white">
              Login
            </a>
            <Link
              href="/contact?intent=house-type-walkthrough"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/45 bg-gold/[0.08] px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-carbon"
            >
              Request a walkthrough
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-porcelain md:hidden"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-carbon px-4 pb-7 pt-5 md:hidden">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-1">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu} className="rounded-xl px-3 py-3 text-base font-medium text-porcelain/78 hover:bg-white/[0.05] hover:text-white">
                {link.label}
              </Link>
            ))}
            <div className="my-3 h-px bg-white/10" />
            <Link
              href="/contact?intent=house-type-walkthrough"
              onClick={closeMenu}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-carbon"
            >
              Request a walkthrough
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={appRoutes.login} onClick={closeMenu} className="mt-2 px-3 py-3 text-center text-sm font-medium text-porcelain/62">
              Login to OpenHouse
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
