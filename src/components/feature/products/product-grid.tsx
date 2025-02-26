import { Product } from "@/lib/types/product.types";
import ProductCard from "./product-card";

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-4 gap-20">
      {products.map((e) => (
        <ProductCard product={e} key={e.id} />
      ))}
    </div>
  );
};

export default ProductGrid;
