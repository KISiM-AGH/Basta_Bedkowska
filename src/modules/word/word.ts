import { Categories } from './categories';

export interface Word {
  id: number;
  word: string;
  description: string;
  category: Categories;
}
