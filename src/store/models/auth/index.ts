import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IAuth } from "./interface";

const initialState = { authenticated: false };

const authReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IAuth>) {
      return { ...state, ...action.payload };
    },
    clearUser() {
      return { authenticated: false };
    },
  },
});

export const { setUser, clearUser } = authReducer.actions;
export default authReducer.reducer;
