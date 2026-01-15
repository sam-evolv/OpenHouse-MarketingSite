export const env = {
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://app.openhouseai.ie',
  MARKETING_URL: process.env.NEXT_PUBLIC_MARKETING_URL || 'https://openhouseai.ie',
  API_URL: process.env.NEXT_PUBLIC_API_URL || '',
  SUPABASE_URL: process.env.SUPABASE_URL!,
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  SUPPORT_EMAIL: 'sam@openhouseai.ie',
  CONTACT_EMAIL: 'hello@openhouseai.ie',
};

export const appRoutes = {
  login: 'https://portal.openhouseai.ie/login',
  register: `${env.APP_URL}/register`,
  superadminLogin: `${env.APP_URL}/login?role=superadmin`,
  developerDashboard: `${env.APP_URL}/developer`,
  superadminDashboard: `${env.APP_URL}/superadmin`,
  tenantPortal: `${env.APP_URL}/tenant`,
};
