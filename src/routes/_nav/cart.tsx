import CartPage from "@/components/pages/cart-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_nav/cart")({
  component: CartPage,
});
