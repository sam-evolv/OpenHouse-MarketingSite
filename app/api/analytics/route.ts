import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({
      activeUsers: 0,
      questionsAnswered: 0,
      pdfDownloads: 0,
      engagementRate: 0,
    })
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  try {
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString()

    const [activeUsersResult, questionsResult, pdfResult] = await Promise.all([
      supabase
        .from('analytics_events')
        .select('*', { count: 'exact', head: true })
        .eq('type', 'session')
        .gte('created_at', fiveMinutesAgo),
      supabase
        .from('analytics_events')
        .select('*', { count: 'exact', head: true })
        .eq('type', 'chat'),
      supabase
        .from('analytics_events')
        .select('*', { count: 'exact', head: true })
        .eq('type', 'pdf_download'),
    ])

    const activeUsers = activeUsersResult.count || 0
    const questionsAnswered = questionsResult.count || 0
    const pdfDownloads = pdfResult.count || 0

    const totalInteractions = questionsAnswered + pdfDownloads
    const engagementRate = activeUsers > 0 
      ? Number(((totalInteractions / activeUsers) * 100).toFixed(2))
      : 0

    return NextResponse.json({
      activeUsers,
      questionsAnswered,
      pdfDownloads,
      engagementRate,
    }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Pragma': 'no-cache',
      },
    })
  } catch (error) {
    console.error('Analytics error:', error)
    return NextResponse.json({
      activeUsers: 0,
      questionsAnswered: 0,
      pdfDownloads: 0,
      engagementRate: 0,
    })
  }
}
