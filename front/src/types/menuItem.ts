export interface MenuItem {
  href?: string;
  icon?: string;
  items?: MenuItem[];
  title: string;
  to?: string;
}
