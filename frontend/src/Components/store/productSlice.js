import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get all Products
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async ({
    keyword = "",
    currentPage = 1,
    price = [0, 2500],
    category,
    ratings = 0,
  }) => {
    try {
      let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;
      if (category) {
        link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      }
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

// Get All Products For Admin
export const getAdminProduct = createAsyncThunk(
  "product/getAdminProduct",
  async () => {
    try {
      const { data } = await axios.get("/api/v1/admin/products");
      return data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

// Create Product
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (productData) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await axios.post(
        `/api/v1/admin/product/new`,
        productData,
        config
      );
      return data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

//  Update Product
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (id, productData) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.put(
        `/api/v1/admin/product/${id}`,
        productData,
        config
      );

      return data.success;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

//  Delete Product
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    try {
      const { data } = await axios.delete(`/api/v1/admin/product/${id}`);

      return data.success;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

//  New Review
export const newReview = createAsyncThunk(
  "product/newReview",
  async (reviewData) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.put(`/api/v1/review`, reviewData, config);

      return data.success;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

// Get All Reviews of a Product
export const getAllReviews = createAsyncThunk(
  "product/getAllReviews",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/reviews?id=${id}`);

      return data.reviews;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

// Delete Review of a Product
export const deleteReviews = createAsyncThunk(
  "product/deleteReviews",
  async (reviewId, productId) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/reviews?id=${reviewId}&productId=${productId}`
      );

      return data.success;
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
    success: false,
    isDeleted: false,
    isUpdated: false,
    reviews: null,
    filteredProductsCount: null,
  },
  reducers: {
    clearErrors(state) {
      state.error = null;
    },
    newProductReset(state, action) {
      state.success = false;
    },
    deleteProductReset(state, action) {
      state.isDeleted = false;
    },
    updateProductReset(state, action) {
      state.isUpdated = false;
    },
    newReviewReset(state, action) {
      state.success = false;
    },
    deleteReviewReset(state, action) {
      state.isDeleted = false;
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
      })
      .addCase(getAdminProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAdminProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.productsCount = action.payload.productsCount
        state.products = action.payload.products;
      })
      .addCase(getAdminProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.success;
        state.product = action.payload.product;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.isUpdated = action.payload;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.isDeleted = action.payload;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(newReview.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(newReview.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(newReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAllReviews.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload;
      })
      .addCase(getAllReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteReviews.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.isDeleted = action.payload;
      })
      .addCase(deleteReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { clearErrors } = productSlice.actions;
export const { newProductReset } = productSlice.actions;
export const { deleteProductReset } = productSlice.actions;
export const { updateProductReset } = productSlice.actions;
export const { newReviewReset } = productSlice.actions;
export const { deleteReviewReset } = productSlice.actions;
export default productSlice.reducer;
