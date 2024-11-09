import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import nookies from "nookies";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.token = action.payload;
      nookies.set(null, "authToken", action.payload, {
        maxAge: 24 * 60 * 60,
        path: "/",
      });
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      nookies.destroy(null, 'authToken')
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
