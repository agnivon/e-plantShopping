import { Product } from "./types/product.types";

export async function fetchAllProducts(): Promise<Product[]> {
  const response = await fetch("/data/products.json");
  const data = await response.json();
  return data;
}
