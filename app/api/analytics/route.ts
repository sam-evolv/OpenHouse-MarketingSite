import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = 'force-dynamic';

export async function GET() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey || !supabaseUrl.startsWith('https://')) {
    return NextResponse.json({
      activeUsers: 0,
      questionsAnswered: 0,
      pdfDownloads: 0,
      engagementRate: 0,
      updatedAt: new Date().toISOString(),
    });
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

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

  return NextResponse.json({
    activeUsers: data.active_users,
    questionsAnswered: data.questions_answered,
    pdfDownloads: data.pdf_downloads,
    engagementRate: data.engagement_rate,
    updatedAt: data.updated_at,
  });
}
