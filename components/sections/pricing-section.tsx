"use client";

import { useState, useEffect } from "react";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import content from "@/i18n/en.json";
import { Check } from "lucide-react";

type Currency = "GBP" | "EUR";

const currencyConfig: Record<Currency, { symbol: string; rate: number; label: string }> = {
  GBP: { symbol: "£", rate: 1, label: "British Pounds" },
  EUR: { symbol: "€", rate: 1.17, label: "Euros" },
};

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

function formatPrice(price: string, currency: Currency): string {
  if (price.startsWith("Contact")) return price;
  
  const numericPrice = parseFloat(price);
  const { symbol, rate } = currencyConfig[currency];
  const convertedPrice = Math.round(numericPrice * rate);
  
  return `${symbol}${convertedPrice.toLocaleString()}`;
}

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const currency = useLocalisedCurrency();

  return (
    <section className="py-28 bg-slate" aria-labelledby="pricing-heading">
      <Container>
        <SectionHeading
          title={content.pricing.title}
          badge="Pricing"
        />

        <div className="mt-8 flex justify-center">
          <Tabs 
            value={billingCycle} 
            onValueChange={(v) => setBillingCycle(v as "monthly" | "annual")}
            aria-label="Billing cycle selection"
          >
            <TabsList>
              <TabsTrigger value="monthly" aria-label="Monthly billing">
                {content.pricing.toggle.monthly}
              </TabsTrigger>
              <TabsTrigger value="annual" aria-label="Annual billing with savings">
                {content.pricing.toggle.annual}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div 
          className="mt-16 grid md:grid-cols-3 gap-8"
          role="list"
          aria-label="Pricing tiers"
        >
          {content.pricing.tiers.map((tier, index) => {
            const price = billingCycle === "monthly" ? tier.price_monthly : tier.price_annual;
            const isPopular = tier.popular;
            const formattedPrice = formatPrice(price, currency);
            const isContactPrice = price.startsWith("Contact");

            return (
              <Card 
                key={index} 
                className={isPopular ? "border-gold/50 relative" : ""}
                role="listitem"
                aria-label={`${tier.name} plan: ${isContactPrice ? "Contact sales for pricing" : `${formattedPrice} per ${billingCycle === "monthly" ? "month" : "year"}`}`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge aria-label="Most popular pricing tier">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle id={`tier-${index}-title`}>{tier.name}</CardTitle>
                  <CardDescription className="text-porcelain/70">{tier.description}</CardDescription>
                  <div className="mt-4" aria-live="polite">
                    {isContactPrice ? (
                      <div className="text-heading-lg font-bold text-gold">
                        {formattedPrice}
                      </div>
                    ) : (
                      <div className="text-display-md font-bold text-gold">
                        {formattedPrice}
                        <span className="text-body-md text-porcelain/60 font-normal">
                          /{billingCycle === "monthly" ? "mo" : "yr"}
                        </span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul 
                    className="space-y-3"
                    aria-label={`Features included in ${tier.name} plan`}
                  >
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-sm text-porcelain/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={isPopular ? "default" : "outline"}
                    className="w-full mt-6"
                  >
                    <a 
                      href="/contact"
                      aria-label={`Get started with ${tier.name} plan`}
                    >
                      Get started
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-porcelain/50" aria-live="polite">
          Prices shown in {currencyConfig[currency].label}
        </p>
      </Container>
    </section>
  );
}
