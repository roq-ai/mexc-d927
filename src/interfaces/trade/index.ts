import { UserInterface } from 'interfaces/user';
import { MarketInterface } from 'interfaces/market';
import { GetQueryInterface } from 'interfaces';

export interface TradeInterface {
  id?: string;
  trade_type: string;
  trade_date: any;
  quantity?: number;
  price?: number;
  user_id: string;
  market_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  market?: MarketInterface;
  _count?: {};
}

export interface TradeGetQueryInterface extends GetQueryInterface {
  id?: string;
  trade_type?: string;
  user_id?: string;
  market_id?: string;
}
