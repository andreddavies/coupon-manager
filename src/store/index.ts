import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";

import { IAuth } from "./models/auth/interface";
import { ITheme } from "./models/theme/interface";

import authReducer from "./models/auth";
import themeReducer from "./models/theme";

export interface IStore {
  user: IAuth;
  theme: ITheme;
}

const persistConfig = {
  key: "coupon-manager-key",
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
});

const reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type Dispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
