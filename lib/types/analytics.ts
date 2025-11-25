export interface PlatformStats {
  active_users: number;
  questions_answered: number;
  pdf_downloads: number;
  engagement_rate: number;
  updated_at: string;
}

export interface AnalyticsEvent {
  type: 'chat' | 'pdf_download' | 'session';
  development_id: string;
  unit_id: string;
}

export const DEFAULT_STATS: PlatformStats = {
  active_users: 0,
  questions_answered: 0,
  pdf_downloads: 0,
  engagement_rate: 0,
  updated_at: new Date().toISOString(),
};
