import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice.js";
import userReducer from './userSlice.js';
import cartReducer from './cartSlice.js'
import orderSlice from "./orderSlice.js";
const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
    cart: cartReducer,
    order: orderSlice
  },
});
export default store;