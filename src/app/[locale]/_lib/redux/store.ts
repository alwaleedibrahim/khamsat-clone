import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from "./slice/authSlice";
import categoryReducer from "./slice/categorySlice"
import profileReducer from "./slice/profileSlice"
import additionalServicesSlice from "./slice/upgrades"

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'profile'],
};

const rootReducer = {
   auth: authReducer,
   category: categoryReducer,
   additionalServices: additionalServicesSlice,
   profile: profileReducer
}

const persistedReducer = persistReducer(persistConfig, combineReducers(rootReducer));

export const store = configureStore({
   reducer: persistedReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store);