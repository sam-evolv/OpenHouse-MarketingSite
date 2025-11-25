import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { PlatformStats, DEFAULT_STATS } from '@/lib/types/analytics';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { data, error } = await supabase
        .from('analytics_platform_stats')
        .select('*')
        .eq('id', 1)
        .single();

      if (!error && data) {
        const stats: PlatformStats = {
          active_users: data.active_users || 0,
          questions_answered: data.questions_answered || 0,
          pdf_downloads: data.pdf_downloads || 0,
          engagement_rate: data.engagement_rate || 0,
          updated_at: data.updated_at || new Date().toISOString(),
        };

        return NextResponse.json(stats, {
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
          },
        });
      }

      if (error) {
        console.error('Supabase error:', error.message);
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
