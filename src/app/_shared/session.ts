import { Currency, Item } from './character';

export interface Session {
  name: string;
  description: string;
  minLevel: number;
  maxLevel: number;
  creatorId: number;
  id: number;
  status: 'OPEN' | 'PREPARING' | 'CLOSED' | 'PAUSED' | 'INPROGRESS';
}

export interface SessionDetail extends Session {
  groupInventory: Item[];
  dmInventory: Item[];
  groupCurrency: Currency;
  character: CharacterData[];
}
