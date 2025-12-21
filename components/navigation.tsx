"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, LogIn, ExternalLink } from "lucide-react";
import { appRoutes } from "@/lib/env";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/docs", label: "Docs" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLoginTooltip, setShowLoginTooltip] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled
          ? "bg-carbon/90 border-b border-hint/10 shadow-lg"
          : "bg-carbon/30"
      )}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            prefetch={true}
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-bold text-gold">OpenHouse AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  pathname === link.href
                    ? "text-gold"
                    : "text-porcelain hover:text-gold"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Developer Login with Tooltip */}
            <div 
              className="relative"
              onMouseEnter={() => setShowLoginTooltip(true)}
              onMouseLeave={() => setShowLoginTooltip(false)}
            >
              <a
                href={appRoutes.login}
                className="group relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-full overflow-hidden transition-all duration-300 border border-white/20 hover:border-gold/60 bg-white/[0.03] hover:bg-white/[0.08]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <LogIn className="w-4 h-4 text-porcelain group-hover:text-gold transition-colors relative z-10" />
                <span className="text-porcelain group-hover:text-gold transition-colors relative z-10">Login</span>
              </a>
              
              {/* Tooltip Dropdown */}
              <div 
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 mt-2 transition-all duration-200",
                  showLoginTooltip ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"
                )}
              >
                <div className="relative bg-slate border border-white/10 rounded-lg p-3 shadow-xl min-w-[200px]">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate border-l border-t border-white/10 rotate-45" />
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-porcelain">Developer Dashboard</p>
                      <p className="text-xs text-hint">Access your portal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Start Onboarding - Subtle */}
            <a
              href={appRoutes.register}
              className="px-4 py-2.5 text-sm font-medium text-porcelain hover:text-gold border border-white/10 hover:border-gold/40 rounded-full transition-all duration-200"
            >
              Start Free
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-porcelain hover:text-gold"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-hint/10">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-gold"
                      : "text-porcelain hover:text-gold"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Login/Register */}
              <a
                href={appRoutes.login}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-sm font-medium text-porcelain hover:text-gold"
              >
                <LogIn className="w-4 h-4" />
                Login
              </a>
              <a
                href={appRoutes.register}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-gold hover:text-gold/80"
              >
                Start Onboarding
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
