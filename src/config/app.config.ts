interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Administrator', 'Trader', 'Analyst', 'Customer'],
  tenantName: 'Team',
  applicationName: 'mexc',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage users',
    'Manage teams',
    'Manage markets',
    'Manage trades',
    'Manage analysts',
    'Manage owners',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/f9c282b5-747b-42a1-bf40-d767596ba960',
};
