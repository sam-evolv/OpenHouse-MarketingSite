// Supabase Edge Function: update-stats
// Aggregates analytics events and updates platform stats
// Schedule: */10 * * * * (every 10 minutes)

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (_req) => {
  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      return new Response("Missing Supabase credentials", { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get active users (distinct unit_ids with sessions in last 30 days)
    const { data: activeUsersData, error: activeUsersError } = await supabase.rpc(
      "get_active_users_last_30_days"
    );

    if (activeUsersError) {
      console.error("Error getting active users:", activeUsersError);
    }

    // Get total chat events
    const { count: chatCount, error: chatError } = await supabase
      .from("analytics_events")
      .select("*", { count: "exact", head: true })
      .eq("type", "chat");

    if (chatError) {
      console.error("Error getting chat count:", chatError);
    }

    // Get total PDF downloads
    const { count: pdfCount, error: pdfError } = await supabase
      .from("analytics_events")
      .select("*", { count: "exact", head: true })
      .eq("type", "pdf_download");

    if (pdfError) {
      console.error("Error getting pdf count:", pdfError);
    }

    // Get total units for engagement calculation
    let totalUnits = 100; // Default fallback
    try {
      const { data: unitsData } = await supabase.rpc("get_total_units");
      if (unitsData && unitsData > 0) {
        totalUnits = unitsData;
      }
    } catch (e) {
      console.log("Using default total units:", e);
    }

    // Calculate engagement rate
    const activeUsers = activeUsersData || 0;
    const engagementRate = totalUnits > 0 ? activeUsers / totalUnits : 0;

    // Update platform stats
    const { error: updateError } = await supabase
      .from("analytics_platform_stats")
      .update({
        active_users: activeUsers,
        questions_answered: chatCount || 0,
        pdf_downloads: pdfCount || 0,
        engagement_rate: engagementRate,
        updated_at: new Date().toISOString(),
      })
      .eq("id", 1);

    if (updateError) {
      console.error("Error updating stats:", updateError);
      return new Response("Failed to update stats", { status: 500 });
    }

    return new Response(
      JSON.stringify({
        success: true,
        stats: {
          active_users: activeUsers,
          questions_answered: chatCount || 0,
          pdf_downloads: pdfCount || 0,
          engagement_rate: engagementRate,
        },
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Update stats error:", error);
    return new Response("Internal error", { status: 500 });
  }
});
