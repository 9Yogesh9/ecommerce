import { createSlice } from "@reduxjs/toolkit";
import { getLocalData, getCart } from './cartHandler';

const initialState = {
    value: getLocalData() ? getCart().length : 0,
    status: 'idle',
}

export const cartQuantity = createSlice({
    name: 'cartQuantity',
    initialState,

    reducers: {
        setQuantity: (state) => {
            state.value = getLocalData() ? getCart().length : 0
        }
    }
});

export const { setQuantity } = cartQuantity.actions;
export const selectCart = (state) => state.cart.value;

export default cartQuantity.reducer;