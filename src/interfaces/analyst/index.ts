import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AnalystInterface {
  id?: string;
  name: string;
  experience?: number;
  specialization?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface AnalystGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  specialization?: string;
  user_id?: string;
}
