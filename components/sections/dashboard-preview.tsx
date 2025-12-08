'use client'

import { useEffect, useState } from 'react'
import { Container } from "../ui/container"
import { SectionHeading } from "../ui/section-heading"
import content from "@/i18n/en.json"

const STATS_API_URL = "https://84141d02-f316-41eb-8d70-a45b1b91c63c-00-140og66wspdkl.riker.replit.dev/api/stats/public";

interface Stats {
  activeUsers: number
  questionsAnswered: number
  pdfDownloads: number
  engagementRate: number
}

export function DashboardPreview() {
  const [stats, setStats] = useState<Stats>({
    activeUsers: 0,
    questionsAnswered: 0,
    pdfDownloads: 0,
    engagementRate: 0,
  })

  async function loadStats() {
    try {
      const res = await fetch(STATS_API_URL, { cache: 'no-store' })
      if (res.ok) {
        const data = await res.json()
        const engagementStr = String(data.engagement_rate || '0').replace('%', '')
        setStats({
          activeUsers: Number(data.active_users) || 0,
          questionsAnswered: Number(data.questions_answered) || 0,
          pdfDownloads: Number(data.pdf_downloads) || 0,
          engagementRate: Number(engagementStr) || 0,
        })
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    }
  }

  useEffect(() => {
    loadStats()
    const interval = setInterval(loadStats, 20000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-carbon">
      <Container>
        <SectionHeading
          title={content.dashboard.title}
          description={content.dashboard.description}
          badge="Live Analytics"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard title="Active Users" value={stats.activeUsers} />
          <StatCard title="Questions Answered" value={stats.questionsAnswered} />
          <StatCard title="PDF Downloads" value={stats.pdfDownloads} />
          <StatCard title="Engagement Rate" value={`${stats.engagementRate}%`} />
        </div>
      </Container>
    </section>
  )
}

function StatCard({ title, value }: { title: string; value: number | string }) {
  return (
    <div className="bg-slate/50 border border-hint/20 rounded-xl px-6 py-6 flex flex-col hover:border-gold/50 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <span className="flex items-center gap-1 text-xs text-green-400 font-medium">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Live
        </span>
      </div>
      <span className="text-sm text-hint">{title}</span>
      <span className="text-4xl font-semibold text-porcelain mt-3">{value}</span>
    </div>
  )
}

export default DashboardPreview
