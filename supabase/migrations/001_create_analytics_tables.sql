-- OpenHouseAI Analytics Schema
-- Run this migration in Supabase SQL Editor

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table 1: analytics_events
-- Stores raw event logs from the application
CREATE TABLE IF NOT EXISTS analytics_events (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  type text NOT NULL CHECK (type IN ('session', 'chat', 'pdf_download')),
  development_id text,
  unit_id text,
  created_at timestamp with time zone DEFAULT now()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_analytics_events_type ON analytics_events(type);
CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON analytics_events(created_at);
CREATE INDEX IF NOT EXISTS idx_analytics_events_unit_id ON analytics_events(unit_id);

-- Table 2: analytics_platform_stats
-- Stores aggregated statistics (single row, id=1)
CREATE TABLE IF NOT EXISTS analytics_platform_stats (
  id integer PRIMARY KEY DEFAULT 1,
  active_users integer DEFAULT 0,
  questions_answered integer DEFAULT 0,
  pdf_downloads integer DEFAULT 0,
  engagement_rate numeric DEFAULT 0,
  updated_at timestamp DEFAULT now()
);

-- Insert initial row if not exists
INSERT INTO analytics_platform_stats (id, active_users, questions_answered, pdf_downloads, engagement_rate)
VALUES (1, 0, 0, 0, 0)
ON CONFLICT (id) DO NOTHING;

-- Disable RLS on analytics_platform_stats (public read)
ALTER TABLE analytics_platform_stats DISABLE ROW LEVEL SECURITY;

-- Enable RLS on analytics_events (protected writes)
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Policy: Allow inserts from authenticated and anon users (API handles auth)
CREATE POLICY "Allow event inserts" ON analytics_events
  FOR INSERT
  WITH CHECK (true);

-- Policy: Allow reads for aggregation
CREATE POLICY "Allow event reads" ON analytics_events
  FOR SELECT
  USING (true);

-- ============================================
-- RPC Functions for Aggregation
-- ============================================

-- Function: Get total units count
CREATE OR REPLACE FUNCTION get_total_units()
RETURNS integer
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT COALESCE(COUNT(*)::integer, 0) FROM units;
$$;

-- Function: Get active users in last 30 days
CREATE OR REPLACE FUNCTION get_active_users_last_30_days()
RETURNS integer
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT COUNT(DISTINCT unit_id)::integer
  FROM analytics_events
  WHERE type = 'session'
    AND created_at > now() - interval '30 days';
$$;

-- Function: Get chat count
CREATE OR REPLACE FUNCTION get_chat_count()
RETURNS integer
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT COUNT(*)::integer FROM analytics_events WHERE type = 'chat';
$$;

-- Function: Get PDF download count
CREATE OR REPLACE FUNCTION get_pdf_download_count()
RETURNS integer
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT COUNT(*)::integer FROM analytics_events WHERE type = 'pdf_download';
$$;

-- Function: Update platform stats (can be called by cron)
CREATE OR REPLACE FUNCTION update_platform_stats()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_active_users integer;
  v_chats integer;
  v_pdfs integer;
  v_total_units integer;
  v_engagement numeric;
BEGIN
  -- Get active users
  SELECT COUNT(DISTINCT unit_id)::integer INTO v_active_users
  FROM analytics_events
  WHERE type = 'session'
    AND created_at > now() - interval '30 days';

  -- Get chat count
  SELECT COUNT(*)::integer INTO v_chats
  FROM analytics_events WHERE type = 'chat';

  -- Get PDF download count
  SELECT COUNT(*)::integer INTO v_pdfs
  FROM analytics_events WHERE type = 'pdf_download';

  -- Get total units (if table exists)
  BEGIN
    SELECT COUNT(*)::integer INTO v_total_units FROM units;
  EXCEPTION WHEN undefined_table THEN
    v_total_units := 100; -- Default fallback
  END;

  -- Calculate engagement rate
  IF v_total_units > 0 THEN
    v_engagement := v_active_users::numeric / v_total_units::numeric;
  ELSE
    v_engagement := 0;
  END IF;

  -- Update stats
  UPDATE analytics_platform_stats
  SET active_users = v_active_users,
      questions_answered = v_chats,
      pdf_downloads = v_pdfs,
      engagement_rate = v_engagement,
      updated_at = now()
  WHERE id = 1;
END;
$$;
