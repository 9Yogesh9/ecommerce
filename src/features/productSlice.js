import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from './productAPI';

const localProducts = localStorage.ecommerce ? JSON.parse(localStorage.ecommerce) : false;

const initialState = {
    value: [],
    status: 'idle',
}

export const fetchProductsAsync = createAsyncThunk(
    'products/fetch',
    async () => {
        if (!localProducts) {

            const response = await fetchProduct();
            // console.log(response);
            const ecom = { products: [...response] };
            localStorage.setItem('ecommerce', JSON.stringify(ecom));
            return response;

        } else {
            // console.log("Products " + localProducts);
            return localProducts;
        }
    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState,

    reducers: {
        addProducts: (state) => {

        },
        getFromLocal: (state) => {
            state.value = JSON.parse(localStorage.ecommerce).products
            // console.log("Loaded Offline ");
            // console.log(state.value);
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

export const { addProducts, getFromLocal } = productSlice.actions;
export const selectProduct = (state) => state.product.value;

export default productSlice.reducer;