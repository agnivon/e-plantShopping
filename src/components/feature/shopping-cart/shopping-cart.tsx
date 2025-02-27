import { useAppSelector } from "@/redux/hooks";
import { selectTotalQuantity } from "@/redux/slices/shopping-cart.slice";
import { Link } from "@tanstack/react-router";
import { ShoppingCartIcon } from "lucide-react";

const ShoppingCart = () => {
  const totalQuantity = useAppSelector(selectTotalQuantity);

  return (
    <Link to="/cart">
      <div className="flex items-center gap-2">
        <ShoppingCartIcon color="white" className="size-8" />
        {totalQuantity > 0 && (
          <div className="font-bold text-white text-xl">{totalQuantity}</div>
        )}
      </div>
    </Link>
  );
};

export default ShoppingCart;
