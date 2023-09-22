import { TradeInterface } from 'interfaces/trade';
import { GetQueryInterface } from 'interfaces';

export interface MarketInterface {
  id?: string;
  name: string;
  location?: string;
  opening_hours?: any;
  closing_hours?: any;
  created_at?: any;
  updated_at?: any;
  trade?: TradeInterface[];

  _count?: {
    trade?: number;
  };
}

export interface MarketGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
}
