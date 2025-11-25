export const env = {
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://app.openhouseai.ie',
  MARKETING_URL: process.env.NEXT_PUBLIC_MARKETING_URL || 'https://openhouseai.ie',
  SUPPORT_EMAIL: 'support@openhouseai.ie',
  CONTACT_EMAIL: 'hello@openhouseai.ie',
};

export const appRoutes = {
  login: `${env.APP_URL}/login`,
  register: `${env.APP_URL}/register`,
  superadminLogin: `${env.APP_URL}/login?role=superadmin`,
  developerDashboard: `${env.APP_URL}/developer`,
  superadminDashboard: `${env.APP_URL}/superadmin`,
  tenantPortal: `${env.APP_URL}/tenant`,
};
