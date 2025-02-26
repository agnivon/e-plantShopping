export interface Product {
  id: string;
  category: string;
  name: string;
  image: string;
  description: string;
  cost: number;
}

export interface ShoppingCartItem {
  id: Product["id"];
  quantity: number;
}
