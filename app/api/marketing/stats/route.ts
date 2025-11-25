import { NextResponse } from 'next/server';
import { PlatformStats, DEFAULT_STATS } from '@/lib/types/analytics';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const response = await fetch(
        `${supabaseUrl}/rest/v1/analytics_platform_stats?id=eq.1&select=*`,
        {
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
          },
          cache: 'no-store',
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data && data.length > 0) {
          const stats: PlatformStats = {
            active_users: data[0].active_users || 0,
            questions_answered: data[0].questions_answered || 0,
            pdf_downloads: data[0].pdf_downloads || 0,
            engagement_rate: data[0].engagement_rate || 0,
            updated_at: data[0].updated_at || new Date().toISOString(),
          };
          
          return NextResponse.json(stats, {
            headers: {
              'Cache-Control': 'no-cache, no-store, must-revalidate',
              'Pragma': 'no-cache',
              'Expires': '0',
            },
          });
        }
      }
    }

    return NextResponse.json(DEFAULT_STATS, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error('Error fetching platform stats:', error);
    return NextResponse.json(DEFAULT_STATS, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  }
}
