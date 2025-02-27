import ShoppingCartCard from "./shopping-cart-card";

const ShoppingCartList = ({ ids }: { ids: string[] }) => {
  if (ids.length === 0) {
    return (
      <div className="h-full flex flex-col justify-center items-center py-2">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          No Cart Items
        </h3>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-8 py-2">
      {ids.map((e) => (
        <ShoppingCartCard id={e} key={e} />
      ))}
    </div>
  );
};

export default ShoppingCartList;
