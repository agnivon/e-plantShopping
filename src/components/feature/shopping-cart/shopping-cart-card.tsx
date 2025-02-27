import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product, ShoppingCartItem } from "@/lib/types/product.types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectProductById } from "@/redux/slices/product.slice";
import {
  selectShoppingCartItemById,
  shoppingCartActions,
} from "@/redux/slices/shopping-cart.slice";
import ProductQuantity from "../products/product-quantity";
import React from "react";

const ShoppingCartCard = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const product: Product | undefined = useAppSelector((state) =>
    selectProductById(state, id)
  );
  const cart: ShoppingCartItem | undefined = useAppSelector((state) =>
    selectShoppingCartItemById(state, id)
  );

  const handleDelete = () => {
    dispatch(shoppingCartActions.removeOne(id));
  };

  return (
    <Card className="flex-row p-0 gap-0 overflow-clip">
      <div
        className="flex-1 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url('${product.image}')` }}
      ></div>
      <div className="py-6 space-y4 flex-3">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-lg font-bold">{`$${product.cost}`}</div>
          <ProductQuantity id={id} />
        </CardContent>
        <CardFooter className="justify-between items-center mt-8">
          <Button
            variant={"destructive"}
            onClick={handleDelete}
            className="h-8"
          >
            Delete
          </Button>
          <div className="font-bold">{`Total: $${
            cart.quantity * product.cost
          }`}</div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default React.memo(ShoppingCartCard);
