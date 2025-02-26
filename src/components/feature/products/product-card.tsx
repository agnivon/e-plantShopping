import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product, ShoppingCartItem } from "@/lib/types/product.types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectShoppingCartItemById,
  shoppingCartActions,
} from "@/redux/slices/shopping-cart.slice";
import { ShoppingCartIcon } from "lucide-react";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const cart: ShoppingCartItem | undefined = useAppSelector((state) =>
    selectShoppingCartItemById(state, product.id)
  );
  const handleCart = () => {
    if (cart) {
      dispatch(shoppingCartActions.removeOne(product.id));
    } else {
      dispatch(
        shoppingCartActions.upsertOne({
          id: product.id,
          quantity: 1,
        })
      );
    }
  };

  return (
    <Card className="p-0 gap-0 h-96 overflow-clip">
      <div
        className="flex-3 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url('${product.image}')` }}
      ></div>
      <div className="py-6 space-y-6">
        <CardHeader className="flex-2">
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardFooter className="justify-between">
          <div className="text-lg font-bold">{`$${product.cost}`}</div>
          <Button disabled={!!cart} onClick={handleCart}>
            <ShoppingCartIcon />
            {`${cart ? "Added to Cart" : "Add to Cart"}`}
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default React.memo(ProductCard);
