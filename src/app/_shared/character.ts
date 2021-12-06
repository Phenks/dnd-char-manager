export interface CharacterDetail {
  id?: number;
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
  id?: number;
  copper?: number;
  silver?: number;
  gold?: number;
  electrum?: number;
  platin?: number;
}

export interface Item {
  value?: number;
  name?: string;
  id?: number;
  quantity?: number;
  tradeable?: boolean;
}
