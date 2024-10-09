import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import categoryReducer from "./slice/categorySlice"
import profileReducer from "./slice/profileSlice"

export const store = configureStore({
    

   reducer:{
    auth:authReducer,
    category: categoryReducer,
    profile: profileReducer
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch