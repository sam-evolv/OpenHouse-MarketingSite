"use client";

import { useState } from "react";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import content from "@/i18n/en.json";
import { Check } from "lucide-react";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="py-24 bg-slate">
      <Container>
        <SectionHeading
          title={content.pricing.title}
          badge="Pricing"
        />

        <div className="mt-8 flex justify-center">
          <Tabs value={billingCycle} onValueChange={(v) => setBillingCycle(v as "monthly" | "annual")}>
            <TabsList>
              <TabsTrigger value="monthly">{content.pricing.toggle.monthly}</TabsTrigger>
              <TabsTrigger value="annual">{content.pricing.toggle.annual}</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {content.pricing.tiers.map((tier, index) => {
            const price = billingCycle === "monthly" ? tier.price_monthly : tier.price_annual;
            const isPopular = tier.popular;

            return (
              <Card key={index} className={isPopular ? "border-gold/50 relative" : ""}>
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge>Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    {price.startsWith("Contact") ? (
                      <div className="text-heading-lg font-bold text-gold">
                        {price}
                      </div>
                    ) : (
                      <div className="text-display-md font-bold text-gold">
                        £{price}
                        <span className="text-body-md text-hint font-normal">
                          /{billingCycle === "monthly" ? "mo" : "yr"}
                        </span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <span className="text-sm text-hint">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={isPopular ? "default" : "outline"}
                    className="w-full mt-6"
                  >
                    <a href="/contact">Get started</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
