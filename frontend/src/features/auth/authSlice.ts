import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getUser, loginService, signupService, logoutUser as logout } from "./authService";
import type { LoginCredentials, SignupCredentials } from "./authTypes";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const user = await loginService(credentials);
      return user;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await logout();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signup",
  async (userData: SignupCredentials, { rejectWithValue }) => {
    try {
      const user = await signupService(userData);
      return user;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);


export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getUser(),
    loading: false,
    error: null,
    isLoggedIn: !!getUser(),
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.isLoggedIn = false;
    });
    builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload || "Something went wrong";
      state.isLoggedIn = false;
    });
    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      }
    );
    builder.addCase(signupUser.pending, (state) => {
      state.loading = true;
      state.error = null;

    });
    builder.addCase(
      signupUser.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      }
    );
    builder.addCase(
      signupUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.user = action.payload;
      }
    );
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.isLoggedIn = false;
    });
  },

});

export default authSlice.reducer;
