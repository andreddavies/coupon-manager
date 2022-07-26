import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./models/auth";

export interface IStore {
  user: { authenticated: boolean };
}

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
