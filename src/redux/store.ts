import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productSlice } from "./slices/product.slice";
import { shoppingCartSlice } from "./slices/shopping-cart.slice";

const persistConfig = (key: string) => ({
  key,
  storage,
});

export const store = configureStore({
  reducer: {
    products: persistReducer(persistConfig("products"), productSlice.reducer),
    shoppingCart: persistReducer(
      persistConfig("shoppingCart"),
      shoppingCartSlice.reducer
    ),
  },
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
