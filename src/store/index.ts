import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./models/auth";
import themeReducer from "./models/theme";

export interface IStore {
  theme: "light";
  user: { authenticated: boolean };
}

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
