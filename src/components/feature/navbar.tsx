import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import ShoppingCartDialog from "./shopping-cart/shopping-cart-dialog";

const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-primary flex items-center justify-between py-2 px-4 fixed top-0 left-0 right-0">
        <Link to="/">
          <div className="flex items-center gap-3 text-white">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt=""
              className="size-10 rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Paradise Nursery
              </h3>
              <p className="italic">Where Green Meets Serenity</p>
            </div>
          </div>
        </Link>
        <div className="flex items-center">
          <Link to="/products">
            <Button variant={"link"} className="text-white text-lg">
              Plants
            </Button>
          </Link>
          <div className="ml-4">
            <ShoppingCartDialog />
          </div>
        </div>
      </nav>
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
