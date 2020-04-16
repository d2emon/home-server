export interface RootState {
  title: string;
  logo: string;
  categories: string[];
  subcategories: {
    [k: string]: string[],
  }
}
