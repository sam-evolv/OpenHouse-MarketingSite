"use client";

import { useEffect, useState } from "react";
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

const STATS_API_URL = "https://84141d02-f316-41eb-8d70-a45b1b91c63c-00-140og66wspdkl.riker.replit.dev/api/stats/public";

interface Stats {
  activeUsers: number;
  questionsAnswered: number;
  pdfDownloads: number;
  engagementRate: number;
}

interface MetricConfig {
  label: string;
  key: keyof Stats;
  icon: typeof Users;
  suffix?: string;
}

const metricConfigs: MetricConfig[] = [
  { label: "Active Users", key: "activeUsers", icon: Users },
  { label: "Questions Answered", key: "questionsAnswered", icon: CheckCircle2 },
  { label: "PDF Downloads", key: "pdfDownloads", icon: Download },
  { label: "Engagement Rate", key: "engagementRate", icon: TrendingUp, suffix: "%" },
];

export function DashboardPreviewEnhanced() {
  const [stats, setStats] = useState<Stats>({
    activeUsers: 0,
    questionsAnswered: 0,
    pdfDownloads: 0,
    engagementRate: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(STATS_API_URL, { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          const engagementStr = String(data.engagement_rate || '0').replace('%', '');
          setStats({
            activeUsers: Number(data.active_users) || 0,
            questionsAnswered: Number(data.questions_answered) || 0,
            pdfDownloads: Number(data.pdf_downloads) || 0,
            engagementRate: Number(engagementStr) || 0,
          });
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchStats();
    const interval = setInterval(fetchStats, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-28 bg-slate">
      <Container>
        <SectionHeading
          title={content.dashboard.title}
          description={content.dashboard.description}
          badge="Live Analytics"
        />

        <Reveal delay={0.2}>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metricConfigs.map((config, index) => {
              const Icon = config.icon;
              const value = stats[config.key];
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
                      <span className="text-hint">...</span>
                    ) : (
                      <CountUp end={value} suffix={config.suffix || ""} />
                    )}
                  </div>
                  <div className="text-sm text-hint">{config.label}</div>
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
