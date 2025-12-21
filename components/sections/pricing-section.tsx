"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Check, Sparkles, ArrowRight } from "lucide-react";

type Currency = "GBP" | "EUR";
type BillingCycle = "monthly" | "annual";

const currencyConfig: Record<Currency, { symbol: string; rate: number; label: string }> = {
  GBP: { symbol: "£", rate: 1, label: "British Pounds" },
  EUR: { symbol: "€", rate: 1.17, label: "Euros" },
};

interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  features: string[];
  popular?: boolean;
  cta: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description: "Perfect for single developments getting started with AI-powered resident support",
    monthlyPrice: 299,
    annualPrice: 2990,
    features: [
      "1 development",
      "Up to 500 queries per month",
      "Basic analytics dashboard",
      "Email support (48hr response)",
      "Standard NFC/QR onboarding",
      "Core knowledge base features",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Growth",
    description: "For growing portfolios that need advanced features and priority support",
    monthlyPrice: 799,
    annualPrice: 7990,
    features: [
      "Up to 5 developments",
      "Unlimited queries",
      "Advanced analytics & reporting",
      "Priority support (24hr response)",
      "Custom branding options",
      "Multi-language support",
      "API access",
      "Dedicated account manager",
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    description: "For large-scale operations requiring bespoke solutions and white-label options",
    monthlyPrice: null,
    annualPrice: null,
    features: [
      "Unlimited developments",
      "White-label platform",
      "Custom integrations",
      "Dedicated support team",
      "SLA guarantees",
      "On-premise deployment option",
      "Custom training & onboarding",
      "Advanced security features",
    ],
    cta: "Contact Us for a Custom Quote",
  },
];

function useLocalisedCurrency(): Currency {
  const [currency, setCurrency] = useState<Currency>("GBP");

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const locale = navigator.language || (navigator as any).userLanguage || "en-GB";
      const isIrish = locale.toLowerCase().includes("ie") || 
                      locale.toLowerCase().startsWith("ga") ||
                      Intl.DateTimeFormat().resolvedOptions().timeZone?.includes("Dublin");
      setCurrency(isIrish ? "EUR" : "GBP");
    }
  }, []);

  return currency;
}

function formatPrice(price: number, currency: Currency): string {
  const { symbol, rate } = currencyConfig[currency];
  const convertedPrice = Math.round(price * rate);
  return `${symbol}${convertedPrice.toLocaleString()}`;
}

function BillingToggle({ 
  value, 
  onChange 
}: { 
  value: BillingCycle; 
  onChange: (value: BillingCycle) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span 
        className={`text-sm font-medium transition-colors ${
          value === "monthly" ? "text-porcelain" : "text-porcelain/50"
        }`}
      >
        Monthly
      </span>
      
      <button
        onClick={() => onChange(value === "monthly" ? "annual" : "monthly")}
        className="relative w-16 h-8 bg-carbon border border-white/20 rounded-full p-1 transition-colors hover:border-gold/40"
        role="switch"
        aria-checked={value === "annual"}
        aria-label="Toggle between monthly and annual billing"
      >
        <motion.div
          className="w-6 h-6 bg-gold rounded-full"
          animate={{ x: value === "annual" ? 32 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
      
      <div className="flex items-center gap-2">
        <span 
          className={`text-sm font-medium transition-colors ${
            value === "annual" ? "text-porcelain" : "text-porcelain/50"
          }`}
        >
          Annual
        </span>
        <span className="px-2 py-0.5 text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/30 rounded-full">
          Save 17%
        </span>
      </div>
    </div>
  );
}

interface PricingCardProps {
  tier: PricingTier;
  billingCycle: BillingCycle;
  currency: Currency;
  index: number;
}

function PricingCard({ tier, billingCycle, currency, index }: PricingCardProps) {
  const price = billingCycle === "monthly" ? tier.monthlyPrice : tier.annualPrice;
  const isEnterprise = price === null;
  const formattedPrice = price !== null ? formatPrice(price, currency) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`relative flex flex-col h-full rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
        tier.popular 
          ? "bg-gold/5 border-gold/40 shadow-lg shadow-gold/10" 
          : "bg-carbon/50 border-white/10 hover:border-white/20"
      }`}
      role="article"
      aria-label={`${tier.name} pricing plan`}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gold text-carbon text-xs font-bold rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            Most Popular
          </div>
        </div>
      )}

      <div className="p-8 flex-1 flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-porcelain mb-2">{tier.name}</h3>
          <p className="text-sm text-porcelain/60 leading-relaxed">{tier.description}</p>
        </div>

        {/* Price */}
        <div className="mb-8" aria-live="polite">
          {isEnterprise ? (
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-gold">Custom</span>
              <span className="text-porcelain/60">pricing</span>
            </div>
          ) : (
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-gold">{formattedPrice}</span>
              <span className="text-porcelain/60">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
            </div>
          )}
          {!isEnterprise && billingCycle === "annual" && (
            <p className="mt-1 text-xs text-green-400">
              {formatPrice(Math.round((tier.monthlyPrice || 0) * 12 - (tier.annualPrice || 0)), currency)} saved annually
            </p>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1" aria-label={`${tier.name} plan features`}>
          {tier.features.map((feature, fIndex) => (
            <li key={fIndex} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-sm text-porcelain/80">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/contact"
          className={`w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 ${
            tier.popular
              ? "bg-gold text-carbon hover:bg-gold/90 shadow-lg shadow-gold/20"
              : isEnterprise
              ? "bg-transparent border-2 border-gold/60 text-gold hover:border-gold hover:bg-gold/10"
              : "bg-white/10 text-porcelain border border-white/10 hover:bg-white/20 hover:border-white/20"
          }`}
          aria-label={isEnterprise ? "Contact us for a custom enterprise quote" : `Start ${tier.name} plan`}
        >
          {tier.cta}
          {!isEnterprise && <ArrowRight className="w-4 h-4" />}
        </a>
      </div>
    </motion.div>
  );
}

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const currency = useLocalisedCurrency();

  return (
    <section className="section-padding bg-slate" aria-labelledby="pricing-heading">
      <Container>
        <SectionHeading
          title="Simple, Transparent Pricing"
          badge="Pricing"
        />

        <div className="mt-10">
          <BillingToggle value={billingCycle} onChange={setBillingCycle} />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={tier.name}
              tier={tier}
              billingCycle={billingCycle}
              currency={currency}
              index={index}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-porcelain/50">
          Prices shown in {currencyConfig[currency].label}. All plans include a 14-day free trial.
        </p>
      </Container>
    </section>
  );
}
