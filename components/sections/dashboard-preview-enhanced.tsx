"use client";

import dynamic from "next/dynamic";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../effects/Reveal";
import { CountUp } from "../effects/CountUp";
import content from "@/i18n/en.json";
import { TrendingUp, Download, Users, CheckCircle2 } from "lucide-react";

const CanvasHUD = dynamic(
  () => import("./dashboard-preview/CanvasHUD").then((mod) => ({ default: mod.CanvasHUD })),
  { ssr: false }
);

const metrics = [
  { label: "Active Users", value: 2847, change: "+12%", icon: Users },
  { label: "Questions Answered", value: 18493, change: "+24%", icon: CheckCircle2 },
  { label: "PDF Downloads", value: 4221, change: "+8%", icon: Download },
  { label: "Engagement Rate", value: 94, change: "+3%", icon: TrendingUp, suffix: "%" },
];

export function DashboardPreviewEnhanced() {
  return (
    <section className="py-24 bg-carbon">
      <Container>
        <SectionHeading
          title={content.dashboard.title}
          description={content.dashboard.description}
          badge="Analytics"
        />

        <Reveal delay={0.2}>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="bg-slate/50 border border-hint/20 rounded-lg p-6 hover:border-gold/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-5 h-5 text-gold" />
                    <span className="text-xs text-green-400 font-medium">
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-display-md font-bold text-porcelain mb-1">
                    <CountUp end={metric.value} suffix={metric.suffix || ""} />
                  </div>
                  <div className="text-sm text-hint">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <CanvasHUD />
        </Reveal>
      </Container>
    </section>
  );
}
