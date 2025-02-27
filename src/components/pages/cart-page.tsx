import { useAppSelector } from "@/redux/hooks";
import {
  selectShoppingCartItemIds,
  selectTotalCost,
  selectTotalQuantity,
} from "@/redux/slices/shopping-cart.slice";
import ShoppingCartList from "../feature/shopping-cart/shopping-cart-list";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";

const CartPage = () => {
  const productIds = useAppSelector(selectShoppingCartItemIds);
  const totalQuantity = useAppSelector(selectTotalQuantity);
  const totalCost = useAppSelector(selectTotalCost);
  return (
    <div className="grow px-20 py-10 relative">
      <div className="xl:w-2/3 xl:inline-block align-top">
        <ShoppingCartList ids={productIds} />
      </div>
      <div className="xl:w-1/3 xl:inline-block xl:sticky xl:top-30 xl:align-top max-xl:mt-10">
        <div className="flex flex-col items-end gap-4">
          <div className="text-2xl font-bold">
            Total Cart Items : {totalQuantity}
          </div>
          <div className="text-2xl font-bold">
            Total Cart Amount : ${totalCost}
          </div>
          <div className="flex items-center justify-end gap-4 mt-8">
            <Link to="/products">
              <Button variant={"outline"} size={"lg"} className="text-lg">
                Continue Shopping
              </Button>
            </Link>
            <Button
              onClick={() => alert("Coming Soon")}
              size={"lg"}
              className="text-lg"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
