import { configureStore } from "@reduxjs/toolkit";

import { IAuth } from "./models/auth/interface";
import { ITheme } from "./models/theme/interface";

import authReducer from "./models/auth";
import themeReducer from "./models/theme";

export interface IStore {
  user: IAuth;
  theme: ITheme;
}

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
