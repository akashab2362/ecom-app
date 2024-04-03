import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice.js";
import userReducer from './userSlice.js';
const store = configureStore({
  reducer: {
    products: productReducer,
    user: userReducer
  },
});
export default store;