import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { menuReducer } from './slices/menuSlice';
import { userReducer } from './slices/userSlice';

const reducers = combineReducers({
  menu: menuReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["menu", "user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // si falla algo, revisar esto
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, "persist/REHYDRATE"],
        ignoredActionPaths: ["rehydrate", "payload.fn"],
      },
    }),
});

export const persistor = persistStore(store);
