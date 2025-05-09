'use client'

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart';

export const stores = configureStore({
    reducer:{
        cart:cartReducer,
        //Users
    }
})