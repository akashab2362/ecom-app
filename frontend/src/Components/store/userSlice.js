import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Login
export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        "/api/v1/login",
        { email, password },
        config
      );
      return data.user;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);
// Register
export const register = createAsyncThunk("user/register", async (userData) => {
  try {
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post("/api/v1/register", userData, config);
    return data.user;
  } catch (error) {
    throw error.response.data.message;
  }
});

// Load user
export const loadUser = createAsyncThunk("user/loadUser", async () => {
  try {
    const { data } = await axios.get("/api/v1/me");
    return data.user;
  } catch (error) {
    throw error.response.data.message;
  }
});

// Logout user
export const logout = createAsyncThunk("user/logout", async () => {
  try {
    await axios.get("/api/v1/logout");
  } catch (error) {
    throw error.response.data.message;
  }
});

//Update Profile
export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (userData) => {
    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const { data } = await axios.put(`/api/v1/me/update`, userData, config);
      return data.success;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

//Update Password
export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async (password) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(
        `/api/v1/password/update`,
        password,
        config
      );
      return data.success;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

//Forgot Password
export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (email) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `/api/v1/password/forgot`,
        email,
        config
      );
      return data.message;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

//Reset Password
export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async ({ token, passwords }) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(
        `/api/v1/password/reset/${token}`,
        passwords,
        config
      );
      return data.success;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

// get All Users
export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  try {
    const { data } = await axios.get(`/api/v1/admin/users`);
    return data.users;
  } catch (error) {
    throw error.response.data.message;
  }
});

// get  User Details
export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/admin/user/${id}`);
      return data.user;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

// Update  User
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (id, userData) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.put(
        `/api/v1/admin/user/${id}`,
        userData,
        config
      );
      return data.success;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

// Delete  User
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id, userData) => {
    try {
      const { data } = await axios.delete(`/api/v1/admin/user/${id}`);
      return data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isAuthenticated: false,
    loading: false,
    error: null,
    isUpdated: false,
    isDeleted: false,
    success: false,
    users: [],
  },
  reducers: {
    clearError(state) {
      state.error = null;
    },
    updateProfileReset(state, action) {
      state.isUpdated = false;
    },
    updatePasswordReset(state, action) {
      state.isUpdated = false;
    },
    updateUserReset(state, action) {
      state.isUpdated = false;
    },
    deleteUserReset(state, action) {
      state.isDeleted = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
        state.isAuthenticated = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.error.message;
      })
      .addCase(register.pending, (state, action) => {
        state.loading = true;
        state.isAuthenticated = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.error.message;
      })
      .addCase(loadUser.pending, (state, action) => {
        state.loading = true;
        state.isAuthenticated = false;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.error.message;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        // state.error = action.payload;
      })
      .addCase(updateProfile.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.isUpdated = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        // state.error = action.payload;
      })
      .addCase(updatePassword.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.isUpdated = action.payload;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        // state.error = action.payload;
      })
      .addCase(forgotPassword.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        // state.error = action.payload;
      })
      .addCase(resetPassword.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        // state.error = action.payload;
      })
      .addCase(getAllUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // state.error = action.payload;
      })
      .addCase(getUserDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // state.error = action.payload;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isUpdated = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // state.error = action.payload;
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isDeleted = action.payload;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // state.error = action.payload;
      });
  },
});
export const { clearError } = userSlice.actions;
export const { updateProfileReset } = userSlice.actions;
export const { updatePasswordReset } = userSlice.actions;
export const { updateUserReset } = userSlice.actions;
export const { deleteUserReset } = userSlice.actions;
export default userSlice.reducer;
