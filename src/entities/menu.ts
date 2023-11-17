export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface Menu {
  name: string;
  data: MenuItem[];
}
