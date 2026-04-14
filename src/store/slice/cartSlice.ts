import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/Products";

interface CartState {
     items: Product[]
     isOpenCart: boolean
}

const initialState: CartState = {
     items: [],
     isOpenCart: false
}

export const cartSlice = createSlice({
     name: "cart",
     initialState,
     reducers: {
          addToCart: (state, action: PayloadAction<Product>) => {
               state.items.push(action.payload)
          },

          toggleCart: (state)  => {
               state.isOpenCart = !state.isOpenCart
          }
     }
})

export const { addToCart, toggleCart } = cartSlice.actions;
export const cart = cartSlice.reducer