import { fetchAllProducts } from "@/lib/data";
import { Product } from "@/lib/types/product.types";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../store";

export const productsAdapter = createEntityAdapter<Product>();

const initialState = productsAdapter.getInitialState();

export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const response = await fetchAllProducts();
  return response;
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, productsAdapter.upsertMany);
  },
});

const reducer = productSlice.reducer;
export const {
  selectById: selectProductById,
  selectIds: selectProductIds,
  selectEntities: selectProductEntities,
  selectAll: selectAllProducts,
  selectTotal: selectTotalProducts,
} = productsAdapter.getSelectors((state: RootState) => state.products);
export default reducer;
