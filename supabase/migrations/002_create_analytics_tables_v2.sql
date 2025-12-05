-- OpenHouseAI Analytics Schema v2
-- Run this migration in Supabase SQL Editor to create the required tables

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table 1: user_events - Tracks user activity
CREATE TABLE IF NOT EXISTS user_events (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id uuid,
  event_type text,
  created_at timestamptz DEFAULT now()
);

-- Table 2: question_logs - Tracks questions asked
CREATE TABLE IF NOT EXISTS question_logs (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  question text,
  user_id uuid,
  created_at timestamptz DEFAULT now()
);

-- Table 3: pdf_logs - Tracks PDF downloads
CREATE TABLE IF NOT EXISTS pdf_logs (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  pdf_name text,
  user_id uuid,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_user_events_created_at ON user_events(created_at);
CREATE INDEX IF NOT EXISTS idx_question_logs_created_at ON question_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_pdf_logs_created_at ON pdf_logs(created_at);

-- Disable RLS for public access (API handles auth via service role key)
ALTER TABLE user_events DISABLE ROW LEVEL SECURITY;
ALTER TABLE question_logs DISABLE ROW LEVEL SECURITY;
ALTER TABLE pdf_logs DISABLE ROW LEVEL SECURITY;

-- Insert sample data for testing (optional - remove in production)
INSERT INTO user_events (event_type) VALUES ('page_view'), ('page_view'), ('click');
INSERT INTO question_logs (question) VALUES ('What are the parking options?'), ('When is the completion date?'), ('What amenities are included?');
INSERT INTO pdf_logs (pdf_name) VALUES ('floor_plan.pdf'), ('brochure.pdf');
