import { Product } from "./types/product.types";

export async function fetchAllProducts(): Promise<Product[]> {
  const response = await fetch(`${import.meta.env.BASE_URL}data/products.json`);
  const data = await response.json();
  return data;
}
