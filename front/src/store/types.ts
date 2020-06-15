import { Article } from '@/types/article';
import { MenuItem } from '@/types/menuItem';

export interface RootState {
  title: string;
  menu: MenuItem[];
  latest: Article[];
  social: MenuItem[];
  copyright: string;
}
