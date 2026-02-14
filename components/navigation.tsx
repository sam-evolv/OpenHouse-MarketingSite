"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  LogIn,
  ExternalLink,
  ChevronDown,
  TrendingUp,
  FolderOpen,
  Home,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { appRoutes } from "@/lib/env";

/* ─── module dropdown data ─── */
const platformModules = [
  {
    title: "Sales",
    href: "/sales",
    description: "Pipeline & lead management",
    icon: TrendingUp,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    title: "Build",
    href: "/build",
    description: "Compliance & documents",
    icon: FolderOpen,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    title: "Handover",
    href: "/handover",
    description: "AI resident portal",
    icon: Home,
    color: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/20",
  },
  {
    title: "Intelligence",
    href: "/intelligence",
    description: "Insights & analytics",
    icon: BarChart3,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
];

const navLinks = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLoginTooltip, setShowLoginTooltip] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* close dropdown on click outside */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsPlatformOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isModulePage =
    pathname === "/sales" ||
    pathname === "/build" ||
    pathname === "/handover" ||
    pathname === "/intelligence";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled
          ? "bg-carbon/90 border-b border-hint/10 elev-3-dark"
          : "bg-carbon/30"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32 sm:h-36">
          {/* Logo */}
          <Link href="/" prefetch={true} className="flex items-center">
            <Image
              src="/images/openhouseai-logo.png"
              alt="OpenHouse Ai"
              width={600}
              height={150}
              priority
              className="h-[6.3rem] sm:h-[7.2rem] md:h-[8.1rem] w-auto animate-breathe"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Platform dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsPlatformOpen(!isPlatformOpen)}
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium transition-colors duration-200",
                  isModulePage || isPlatformOpen
                    ? "text-gold"
                    : "text-porcelain hover:text-gold"
                )}
              >
                Platform
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    isPlatformOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Dropdown */}
              <div
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 mt-4 transition-all duration-200",
                  isPlatformOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                )}
              >
                <div className="relative bg-carbon/95 border border-white/10 rounded-2xl p-3 shadow-2xl backdrop-blur-xl w-[340px]">
                  {/* Arrow */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-carbon/95 border-l border-t border-white/10 rotate-45" />

                  {/* Module cards */}
                  <div className="space-y-1">
                    {platformModules.map((mod) => {
                      const Icon = mod.icon;
                      return (
                        <Link
                          key={mod.href}
                          href={mod.href}
                          onClick={() => setIsPlatformOpen(false)}
                          className={cn(
                            "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group",
                            pathname === mod.href
                              ? "bg-white/5"
                              : "hover:bg-white/5"
                          )}
                        >
                          <div
                            className={cn(
                              "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0",
                              mod.bg,
                              "border",
                              mod.border
                            )}
                          >
                            <Icon className={cn("w-4.5 h-4.5", mod.color)} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-porcelain">
                              {mod.title}
                            </p>
                            <p className="text-xs text-hint truncate">
                              {mod.description}
                            </p>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-porcelain/20 group-hover:text-gold transition-colors" />
                        </Link>
                      );
                    })}
                  </div>

                  {/* View all link */}
                  <div className="mt-2 pt-2 border-t border-white/5">
                    <Link
                      href="/"
                      onClick={() => setIsPlatformOpen(false)}
                      className="flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-gold hover:text-gold/80 transition-colors"
                    >
                      View Platform Overview
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Other nav links */}
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
                <span className="text-porcelain group-hover:text-gold transition-colors relative z-10">
                  Login
                </span>
              </a>

              {/* Tooltip Dropdown */}
              <div
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 mt-2 transition-all duration-200",
                  showLoginTooltip
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                )}
              >
                <div className="relative bg-slate border border-white/10 rounded-lg p-3 shadow-xl min-w-[200px]">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate border-l border-t border-white/10 rotate-45" />
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-porcelain">
                        Developer Dashboard
                      </p>
                      <p className="text-xs text-hint">Access your portal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Book a Demo */}
            <a
              href="/contact"
              className="px-4 py-2.5 text-sm font-medium text-porcelain hover:text-gold border border-white/10 hover:border-gold/40 rounded-full transition-all duration-200"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-porcelain hover:text-gold"
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 border-t border-hint/10"
            role="menu"
          >
            <div className="flex flex-col space-y-4">
              {/* Platform modules */}
              <p className="text-xs font-semibold uppercase tracking-wider text-hint px-1">
                Platform
              </p>
              {platformModules.map((mod) => {
                const Icon = mod.icon;
                return (
                  <Link
                    key={mod.href}
                    href={mod.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-1 text-sm font-medium transition-colors",
                      pathname === mod.href
                        ? "text-gold"
                        : "text-porcelain hover:text-gold"
                    )}
                  >
                    <div
                      className={cn(
                        "w-7 h-7 rounded-md flex items-center justify-center",
                        mod.bg,
                        "border",
                        mod.border
                      )}
                    >
                      <Icon className={cn("w-3.5 h-3.5", mod.color)} />
                    </div>
                    {mod.title}
                  </Link>
                );
              })}

              <div className="border-t border-hint/10 pt-4" />

              {/* Other links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors px-1",
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
                className="flex items-center gap-2 text-sm font-medium text-porcelain hover:text-gold px-1"
              >
                <LogIn className="w-4 h-4" />
                Login
              </a>
              <a
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-gold hover:text-gold/80 px-1"
              >
                Book a Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

