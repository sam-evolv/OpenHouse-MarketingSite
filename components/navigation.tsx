"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, LogIn } from "lucide-react";
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-carbon/95 backdrop-blur-md border-b border-hint/10 shadow-lg"
          : "bg-transparent"
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
          <div className="hidden md:flex items-center space-x-4">
            {/* Developer Login Pill */}
            <a
              href={appRoutes.login}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-porcelain hover:text-gold border border-white/10 hover:border-gold/50 rounded-full transition-all duration-200"
            >
              <LogIn className="w-4 h-4" />
              Login
            </a>
            
            {/* Start Onboarding */}
            <a
              href={appRoutes.register}
              className="px-4 py-2 text-sm font-medium text-carbon bg-gold hover:bg-gold/90 rounded-full transition-all duration-200"
            >
              Start Onboarding
            </a>
            
            {/* Book a Demo */}
            <Button asChild>
              <Link href="/contact" prefetch={true}>
                Book a demo
              </Link>
            </Button>
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
              
              <Button asChild className="w-full">
                <Link
                  href="/contact"
                  prefetch={true}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a demo
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
