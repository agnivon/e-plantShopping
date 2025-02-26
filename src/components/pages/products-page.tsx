import { useAppSelector } from "@/redux/hooks";
import { fetchProducts, selectAllProducts } from "@/redux/slices/product.slice";
import { store } from "@/redux/store";
import ProductGrid from "../feature/products/product-grid";
import { Product } from "@/lib/types/product.types";

store.dispatch(fetchProducts());

const ProductsPage = () => {
  const products = useAppSelector((state) => selectAllProducts(state));

  const categorizedProducts = products.reduce((a, i) => {
    if (!a[i.category]) {
      a[i.category] = [];
    }
    a[i.category].push(i);
    return a;
  }, {} as Record<string, Array<Product>>);

  return (
    <div className="flex flex-col grow px-20 py-10 gap-20">
      {Object.keys(categorizedProducts).map((e) => {
        return (
          <div>
            <h2 className="scroll-m-20 mb-10 text-3xl font-semibold tracking-tight first:mt-0 text-center">
              {e}
            </h2>
            <ProductGrid products={categorizedProducts[e]} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductsPage;
