
'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { productId, quantity } = action.payload;
            // To Find if the product already exist. If so than it will increase quantity so that id is not duplicated  
            const indexProductId = (state.items).findIndex(item => item.ProductId === productId);
            if (indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity;
            } else {
                state.items.push({ productId, quantity })
            }
        }
    }
})
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;