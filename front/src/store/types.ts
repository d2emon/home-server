import { Article } from '@/types/article';
import { MenuItem } from '@/types/menuItem';

export interface RootState {
  title: string;
  logo: string;
  menu: MenuItem[];
  latest: Article[];
  social: MenuItem[];
  copyright: string;
  categories: string[];
  subcategories: {
    [k: string]: string[],
  }
}
