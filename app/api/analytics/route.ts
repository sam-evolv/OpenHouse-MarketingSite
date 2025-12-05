import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export async function GET() {
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
    // ACTIVE USERS (last 5 minutes)
    const { count: activeUsersCount, error: activeErr } = await supabase
      .from('user_events')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', new Date(Date.now() - 5 * 60 * 1000).toISOString())

    if (activeErr) console.error('Active users error:', activeErr)

    // QUESTIONS ANSWERED
    const { count: questionsAnswered, error: questionsErr } = await supabase
      .from('question_logs')
      .select('*', { count: 'exact', head: true })

    if (questionsErr) console.error('Questions error:', questionsErr)

    // PDF DOWNLOADS
    const { count: pdfDownloads, error: pdfErr } = await supabase
      .from('pdf_logs')
      .select('*', { count: 'exact', head: true })

    if (pdfErr) console.error('PDF downloads error:', pdfErr)

    // ENGAGEMENT RATE
    const activeUsers = activeUsersCount || 0
    const totalInteractions = (questionsAnswered || 0) + (pdfDownloads || 0)
    const engagementRate = activeUsers > 0
      ? Number(((totalInteractions / activeUsers) * 100).toFixed(2))
      : 0

    return NextResponse.json({
      activeUsers,
      questionsAnswered: questionsAnswered || 0,
      pdfDownloads: pdfDownloads || 0,
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
