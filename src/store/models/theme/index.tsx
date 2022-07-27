import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ITheme } from "./interface";

const initialState = "light";

const themeReducer = createSlice({
  name: "themeReducer",
  initialState,
  reducers: {
    setTheme(_, action: PayloadAction<ITheme>) {
      return action.payload.theme;
    },
  },
});

export const { setTheme } = themeReducer.actions;
export default themeReducer.reducer;
