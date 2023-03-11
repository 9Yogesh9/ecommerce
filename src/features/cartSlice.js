import { createSlice } from "@reduxjs/toolkit";
import { getCart } from './cartHandler';

const initialState = {
    value: getCart() ? getCart() : [],
    status: 'idle',
}

export const cart = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        setQuantity: (state) => {
            // state.value = getCart() ? getCart().length : 0
        },

        subOrAddCart: (state) => {
            state.value = getCart() ? JSON.parse(JSON.stringify(getCart())) : [];
        },

    }
});

export const { setQuantity, subOrAddCart } = cart.actions;
export const selectCart = (state) => state.cart.value;

export default cart.reducer;