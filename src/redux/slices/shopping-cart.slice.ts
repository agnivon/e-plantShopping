import { ShoppingCartItem } from "@/lib/types/product.types";
import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../store";
import { selectProductEntities } from "./product.slice";
import _ from "lodash";

export const shoppingCartAdapter = createEntityAdapter<ShoppingCartItem>();

const initialState = shoppingCartAdapter.getInitialState();

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    upsertOne: shoppingCartAdapter.upsertOne,
    removeOne: shoppingCartAdapter.removeOne,
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      if (
        (quantity < 0 && state.entities[id].quantity > 0) ||
        (quantity > 0 && state.entities[id].quantity < 99)
      ) {
        state.entities[id].quantity += quantity;
      }
    },
  },
});

const reducer = shoppingCartSlice.reducer;
export const {
  selectById: selectShoppingCartItemById,
  selectIds: selectShoppingCartItemIds,
  selectEntities: selectShoppingCartItemEntities,
  selectAll: selectAllShoppingCartItems,
  selectTotal: selectTotalShoppingCartItems,
} = shoppingCartAdapter.getSelectors((state: RootState) => state.shoppingCart);

export function selectTotalCost(state: RootState) {
  const productEntities = selectProductEntities(state);
  const items = selectAllShoppingCartItems(state);

  return items.reduce((a, i) => {
    a += i.quantity * productEntities[i.id].cost;
    return a;
  }, 0);
}

export function selectTotalQuantity(state: RootState) {
  const items = selectAllShoppingCartItems(state);

  return _.sum(items.map((e) => e.quantity));
}

export const shoppingCartActions = shoppingCartSlice.actions;
export default reducer;
