import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from './productAPI';

import {
    addToCart,
    getCart,
    getLocalData,
    setLocalData,
    subtractFromCart
} from './cartHandler';

const localProducts = getLocalData();

const initialState = {
    value: [],
    status: 'idle',
}

export const fetchProductsAsync = createAsyncThunk(
    'products/fetch',
    async () => {
        if (!localProducts) {

            const response = await fetchProduct();
            setLocalData(response, []);
            return response;

        } else {
            return getLocalData();
        }
    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState,

    reducers: {
        addProducts: (state, action) => {
            const mod_state = [...state];
            mod_state.push(action.payload);
            state.value = mod_state;
        },

        removeProducts: (state, action) => {
            const mod_state = [...state];
            const products = mod_state.filter((item) => item.id !== action.payload.id);
            state.value = products;
        },

        addQuantity: (state, action) => {
            const mod_state = [...state.value];

            const products = mod_state.map((item) => {
                if (item.id === action.payload.id) {
                    item.stock++;
                    subtractFromCart(item);
                }
                return item;
            });

            const cart = getCart();

            setLocalData(products, cart);
            state.value = products;
        },

        subtractQuantity: (state, action) => {
            const mod_state = [...state.value];
            const products = mod_state.map((item) => {
                if (item.id === action.payload.id) {
                    if (item.stock - 1 >= 0) {
                        item.stock--;
                        addToCart(item);
                    }
                }
                return item;
            });

            const cart = getCart();

            setLocalData(products, cart);
            state.value = products;
        },

        getFromLocal: (state) => {
            state.value = localStorage.ecommerce ? JSON.parse(localStorage.ecommerce).products : {};
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload;
            })
    }
});

export const {
    getFromLocal,
    addProducts,
    removeProducts,
    addQuantity,
    subtractQuantity,
} = productSlice.actions;
export const selectProduct = (state) => state.product.value;

export default productSlice.reducer;