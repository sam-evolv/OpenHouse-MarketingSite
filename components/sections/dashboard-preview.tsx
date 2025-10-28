"use client";

import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import content from "@/i18n/en.json";
import { TrendingUp, Download, Users, CheckCircle2 } from "lucide-react";

const metrics = [
  { label: "Active Users", value: "2,847", change: "+12%", icon: Users },
  { label: "Questions Answered", value: "18,493", change: "+24%", icon: CheckCircle2 },
  { label: "PDF Downloads", value: "4,221", change: "+8%", icon: Download },
  { label: "Engagement Rate", value: "94%", change: "+3%", icon: TrendingUp },
];

export function DashboardPreview() {
  return (
    <section className="py-24 bg-carbon">
      <Container>
        <SectionHeading
          title={content.dashboard.title}
          description={content.dashboard.description}
          badge="Analytics"
        />

        <div className="mt-16">
          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                    {metric.value}
                  </div>
                  <div className="text-sm text-hint">{metric.label}</div>
                </div>
              );
            })}
          </div>

          {/* Mock Chart */}
          <div className="bg-slate/50 border border-hint/20 rounded-lg p-8">
            <h3 className="text-heading-md font-bold text-porcelain mb-6">
              Top Questions This Week
            </h3>
            <div className="space-y-4">
              {[
                { question: "What are the parking options?", count: 342 },
                { question: "When is the completion date?", count: 289 },
                { question: "What amenities are included?", count: 247 },
                { question: "Are pets allowed?", count: 198 },
                { question: "What are the floor plans?", count: 176 },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-porcelain text-sm">{item.question}</span>
                      <span className="text-gold text-sm font-medium">{item.count}</span>
                    </div>
                    <div className="h-2 bg-hint/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gold/50 rounded-full"
                        style={{ width: `${(item.count / 342) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
