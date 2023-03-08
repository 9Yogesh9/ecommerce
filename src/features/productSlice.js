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
                }
                return item;
            });

            const ecom = { products: [...products] };
            localStorage.setItem('ecommerce', JSON.stringify(ecom));

            state.value = products;
        },

        subtractQuantity: (state, action) => {
            const mod_state = [...state.value];
            // console.log(action.payload);
            // const pos = mod_state.map(e => e.id).indexOf(action.payload.id);
            // console.log("Index " + pos);

            const products = mod_state.map((item) => {
                if (item.id === action.payload.id) {
                    if (item.stock - 1 >= 0)
                        item.stock--;
                }
                return item;
            });

            const ecom = { products: [...products] };
            localStorage.setItem('ecommerce', JSON.stringify(ecom));

            state.value = products

        },

        getFromLocal: (state) => {
            // state.value = JSON.parse(localStorage.ecommerce).products;
            state.value = localStorage.ecommerce ? JSON.parse(localStorage.ecommerce).products : {};
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

export const {
    getFromLocal,
    addProducts,
    removeProducts,
    addQuantity,
    subtractQuantity,
} = productSlice.actions;
export const selectProduct = (state) => state.product.value;

export default productSlice.reducer;