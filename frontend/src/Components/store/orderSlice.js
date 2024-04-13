import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  order: null,
  loading: false,
  error: null,
  isUpdated: false,
  isDeleted: false,
  orders: [],
};

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async ({ order }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post("/api/v1/order/new", order, config);
      return data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const myOrders = createAsyncThunk("order/myOrders", async () => {
  try {
    const { data } = await axios.get("/api/v1/orders/me");
    return data.orders;
  } catch (error) {
    throw error.response.data.message;
  }
});

// Get All Orders (admin)
export const getAllOrders = createAsyncThunk("order/getAllOrders", async () => {
  try {
    const { data } = await axios.get("/api/v1/admin/orders");
    return data.orders;
  } catch (error) {
    throw error.response.data.message;
  }
});

// Update Order
export const updateOrder = createAsyncThunk(
  "order/updateOrder",
  async (id, order) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.put(
        `/api/v1/admin/order/${id}`,
        order,
        config
      );
      return data.success;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

// Delete Order
export const deleteOrder = createAsyncThunk("order/deleteOrder", async (id) => {
  try {
    const { data } = await axios.delete(`/api/v1/admin/order/${id}`);
    return data.success;
  } catch (error) {
    throw error.response.data.message;
  }
});

// Get Order Details
export const getOrderDetails = createAsyncThunk(
  "order/getOrderDetails",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/order/${id}`);
      return data.order;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearErrors(state) {
      state.error = null;
    },
    updateOrderReset(state) {
      state.isUpdated = false;
    },
    deleteOrderReset(state) {
      state.isDeleted = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(myOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(myOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(myOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAllOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.isUpdated = action.payload;
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.isDeleted = action.payload;
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getOrderDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(getOrderDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearErrors } = orderSlice.actions;
export const { updateOrderReset } = orderSlice.actions;
export const { deleteOrderReset } = orderSlice.actions;
export default orderSlice.reducer;
