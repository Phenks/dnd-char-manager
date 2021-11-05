export interface Character {
  name: string;
  gender: 'male' | 'female' | 'div';
  level: number;
  currency: string;
  // Big Image as URL
  image?: string;
  // Avatar Image as URL
  avatar?: string;
  race: string;
  description: string;
  id: number;
}
