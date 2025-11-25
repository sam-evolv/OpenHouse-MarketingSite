import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = 'force-dynamic';

const VALID_EVENT_TYPES = ['session', 'chat', 'pdf_download'];

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return url.startsWith('http://') || url.startsWith('https://');
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, development_id, unit_id } = body;

    if (!type) {
      return NextResponse.json(
        { error: "Missing event type", success: false },
        { status: 400 }
      );
    }

    if (!VALID_EVENT_TYPES.includes(type)) {
      return NextResponse.json(
        { error: "Invalid event type", success: false },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey || !isValidUrl(supabaseUrl)) {
      console.warn("Analytics event not persisted (Supabase not configured):", { type, development_id, unit_id });
      return NextResponse.json(
        { error: "Analytics service not configured", success: false },
        { status: 503 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error } = await supabase.from("analytics_events").insert({
      type,
      development_id: development_id || null,
      unit_id: unit_id || null,
    });

    if (error) {
      console.error("Failed to insert analytics event:", error.message);
      return NextResponse.json(
        { error: "Failed to log event", success: false, details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Event logging error:", error);
    return NextResponse.json(
      { error: "Internal server error", success: false },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Events API - Use POST to log events" },
    { status: 200 }
  );
}
