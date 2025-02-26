import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ShoppingCartIcon } from "lucide-react";
import ShoppingCartList from "./shopping-cart-list";
import { useAppSelector } from "@/redux/hooks";
import {
  selectShoppingCartItemIds,
  selectTotalCost,
  selectTotalQuantity,
} from "@/redux/slices/shopping-cart.slice";
import { DialogClose } from "@radix-ui/react-dialog";

const ShoppingCartDialog = () => {
  const productIds = useAppSelector(selectShoppingCartItemIds);
  const totalQuantity = useAppSelector(selectTotalQuantity);
  const totalCost = useAppSelector(selectTotalCost);

  return (
    <Dialog>
      <DialogTrigger className="!shadow-none">
        <div className="flex gap-2 items-center">
          <ShoppingCartIcon color="white" className="size-8" />
          {totalQuantity > 0 && (
            <div className="font-bold text-white text-xl">{totalQuantity}</div>
          )}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl">Shopping Cart</DialogTitle>
          <DialogDescription className="text-foreground font-bold">
            Total Cart Amount : ${totalCost} | Total Cart Items :{" "}
            {totalQuantity}
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-auto">
          <ShoppingCartList ids={productIds} />
        </div>
        <DialogFooter className="!flex-col">
          <div className="self-end my-2 font-bold text-2xl">
            Total : ${totalCost}
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button variant={"ghost"}>Continue Shopping</Button>
            </DialogClose>
            {totalQuantity > 0 && (
              <Button onClick={() => alert("Coming Soon")}>Checkout</Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShoppingCartDialog;
