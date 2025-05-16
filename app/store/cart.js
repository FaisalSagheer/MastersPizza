
'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    StatusTab: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { productId, quantity } = action.payload;
            // To Find if the product already exist. If so than it will increase quantity so that id is not duplicated  
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if (indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity;
            } else {
                state.items.push({ productId, quantity })
            }
        },
        ChangeQuantity(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if (quantity > 0) {
                state.items[indexProductId].quantity = quantity;
            }
            else {
                // delete state.items[indexProductId]
                state.items = (state.items).filter(item => item.productId !== productId)
            }
        },
        

    }
})
export const { addToCart, ChangeQuantity} = cartSlice.actions;
export default cartSlice.reducer;