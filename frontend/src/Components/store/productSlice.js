import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get all Products
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (keyword = "", currentPage) => {
    try {
      let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}`;
      const { data } = await axios.get(link);
      return data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

// Get single Product Detail
export const fetchProductDetails = createAsyncThunk(
  "product/fetchProductDetails",
  async (productId) => {
    try {
      const { data } = await axios.get(`/api/v1/product/${productId}`);
      return data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    productsCount: null,
    resultPerPage: null,
    product: {},
    loading: false,
    error: null,
    filteredProductsCount: null,
  },
  reducers: {
    clearErrors(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.productsCount = action.payload.productsCount;
        state.resultPerPage = action.payload.resultPerPage;
        state.filteredProductsCount = action.payload.filteredProductsCount;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload.product;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { clearErrors } = productSlice.actions;
export default productSlice.reducer;
