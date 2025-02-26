import ProductsPage from "@/components/pages/products-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_nav/products")({
  component: ProductsPage,
});
