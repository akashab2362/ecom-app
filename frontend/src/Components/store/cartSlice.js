import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addItemsToCart = createAsyncThunk(
  "cart/addItemsToCart",
  async ({ id, quantity, size }, { getState }) => {
    const { data } = await axios.get(`/api/v1/product/${id}`);
    const product = {
      product: data.product._id,
      name: data.product.title,
      price: data.product.selling_price,
      image: data.product.images[0],
      stock: data.product.stock,
      quantity: quantity,
      size: size
    };
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
    return product;
  }
);

export const removeItemsFromCart = createAsyncThunk(
  "cart/removeItemsFromCart",
  async ({ id }, { getState }) => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
    return id;
  }
);

export const saveShippingInfo = createAsyncThunk(
  "cart/saveShippingInfo",
  async (data ) => {
    localStorage.setItem("shippingInfo", JSON.stringify(data));
    return data;
  }
);

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle the fulfilled action of addItemsToCart thunk
    builder
      .addCase(addItemsToCart.fulfilled, (state, action) => {
        const item = action.payload;
        const isItemExist = state.cartItems.find(
          (i) => i.product === item.product
        );
        if (isItemExist) {
          state.cartItems = state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          );
        } else {
          state.cartItems.push(item);
        }
      })
      .addCase(removeItemsFromCart.fulfilled, (state, action) => {
        const id = action.payload;
        state.cartItems = state.cartItems.filter((item) => item.product !== id);
      })
      .addCase(saveShippingInfo.fulfilled, (state, action) => {
        const data = action.payload;
        state.shippingInfo = data;
      });
  },
});

export default cartSlice.reducer;
