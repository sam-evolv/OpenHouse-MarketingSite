"use client";

import { useEffect, useState } from "react";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import content from "@/i18n/en.json";
import { TrendingUp, Download, Users, CheckCircle2 } from "lucide-react";
import { CountUp } from "../effects/CountUp";

interface AnalyticsStats {
  activeUsers: number;
  questionsAnswered: number;
  pdfDownloads: number;
  engagementRate: number;
  updatedAt: string;
}

export function DashboardPreview() {
  const [stats, setStats] = useState<AnalyticsStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/analytics', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Failed to fetch analytics:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStats();
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { 
      label: "Active Users", 
      value: stats?.activeUsers || 0, 
      icon: Users 
    },
    { 
      label: "Questions Answered", 
      value: stats?.questionsAnswered || 0, 
      icon: CheckCircle2 
    },
    { 
      label: "PDF Downloads", 
      value: stats?.pdfDownloads || 0, 
      icon: Download 
    },
    { 
      label: "Engagement Rate", 
      value: stats ? Math.round(stats.engagementRate * 100) : 0, 
      suffix: "%",
      icon: TrendingUp 
    },
  ];

  return (
    <section className="py-24 bg-carbon">
      <Container>
        <SectionHeading
          title={content.dashboard.title}
          description={content.dashboard.description}
          badge="Live Analytics"
        />

        <div className="mt-16">
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
                    <span className="flex items-center gap-1 text-xs text-green-400 font-medium">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Live
                    </span>
                  </div>
                  <div className="text-display-md font-bold text-porcelain mb-1">
                    {isLoading ? (
                      <div className="h-10 w-24 bg-hint/20 rounded animate-pulse" />
                    ) : (
                      <CountUp end={metric.value} suffix={metric.suffix || ""} />
                    )}
                  </div>
                  <div className="text-sm text-hint">{metric.label}</div>
                </div>
              );
            })}
          </div>

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
