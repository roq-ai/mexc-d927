const mapping: Record<string, string> = {
  analysts: 'analyst',
  markets: 'market',
  owners: 'owner',
  teams: 'team',
  trades: 'trade',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
