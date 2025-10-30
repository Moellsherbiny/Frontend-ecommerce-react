import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice"
import cartReducer from "@/features/products/cartSlice"
import wishlistReducer from "@/features/products/wishlistSclice"

export const store = configureStore({
    reducer:{
        auth:authReducer,
        cart:cartReducer,
        wishlist:wishlistReducer
    }
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action
>