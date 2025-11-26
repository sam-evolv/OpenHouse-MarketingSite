import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey || !supabaseUrl.startsWith('https://')) {
    return NextResponse.json({
      activeUsers: 0,
      questionsAnswered: 0,
      pdfDownloads: 0,
      engagementRate: 0,
      updatedAt: new Date().toISOString(),
    });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data, error } = await supabase
    .from("analytics_platform_stats")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) {
    console.error("Supabase analytics fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics stats" },
      { status: 500 }
    );
  }

  const response = NextResponse.json({
    activeUsers: data.active_users,
    questionsAnswered: data.questions_answered,
    pdfDownloads: data.pdf_downloads,
    engagementRate: data.engagement_rate,
    updatedAt: data.updated_at,
  });
  
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  response.headers.set('Pragma', 'no-cache');
  
  return response;
}
