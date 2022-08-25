export interface CharacterDetail {
  id: number;
  name?: string;
  imageURL?: string;
  race?: string;
  currency?: Currency;
  items?: Array<Item>;
  level?: number;
  milestones?: number;
  description?: string;
  classes: string[];
}

export interface Currency {
  id: number;
  copper?: number;
  silver?: number;
  gold?: number;
  electrum?: number;
  platin?: number;
}

export interface ItemEntry {
  notes: string;
  quantity: number;
  item: Item;
}

export interface Item {
  value: number;
  name: string;
  id: number;
  tradeable: boolean;
  description: string;
  imageUrl: string;
  bundleSize: number;
  weight: number;
  rarity: string;
  dndBeyondId: number;
}
