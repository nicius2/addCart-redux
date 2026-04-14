import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FeatchData } from "../../services/ProductFetch";
import { api } from "../../lib/api";

interface Product {
  id: number;
  title: string;
  price: number;
  img: string;
}

export interface ProductState {
     product: Product[]
}

const initialState: ProductState = {
     product: []
}

export const loadProduct = createAsyncThunk(
     'products',
     async () => {
          const response = await FeatchData(`${api}/product`)
          return response
     }
)

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => { // 👈 faltava isso para capturar o resultado do thunk
    builder.addCase(loadProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export const product = productSlice.reducer