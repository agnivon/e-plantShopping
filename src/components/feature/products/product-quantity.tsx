import { Button } from "@/components/ui/button";
import { ShoppingCartItem } from "@/lib/types/product.types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectShoppingCartItemById,
  shoppingCartActions,
} from "@/redux/slices/shopping-cart.slice";
import { MinusIcon, PlusIcon } from "lucide-react";

const ProductQuantity = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();

  const cart: ShoppingCartItem | undefined = useAppSelector((state) =>
    selectShoppingCartItemById(state, id)
  );

  const quantity = cart?.quantity || 0;

  const handleIncrease = () => {
    dispatch(
      shoppingCartActions.updateQuantity({
        id,
        quantity: 1,
      })
    );
  };

  const handleDecrease = () => {
    dispatch(
      shoppingCartActions.updateQuantity({
        id,
        quantity: -1,
      })
    );
  };

  return (
    <div className="flex gap-2 items-center">
      <Button
        onClick={handleDecrease}
        disabled={quantity <= 1}
        className="size-6"
      >
        <MinusIcon />
      </Button>
      <span>{quantity}</span>
      <Button
        onClick={handleIncrease}
        disabled={quantity >= 99}
        className="size-6"
      >
        <PlusIcon />
      </Button>
    </div>
  );
};

export default ProductQuantity;
