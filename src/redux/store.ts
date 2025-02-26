import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productSlice } from "./slices/product.slice";
import { shoppingCartSlice } from "./slices/shopping-cart.slice";

const persistConfig = (key: string) => ({
  key,
  storage,
});

const rootReducer = combineReducers({
  products: productSlice.reducer,
  shoppingCart: shoppingCartSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig("root"), rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
