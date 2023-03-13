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
            // Load products using API if not having local product store or local product store gets empty
            const response = await fetchProduct();
            setLocalData(response, []);
            return response;
            
        } else {
            return getLocalData().products;
        }
    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState,

    reducers: {
        addProducts: (state, action) => {
            // Get current cart and products
            const products = [...state.value];
            const cart = getCart();

            // Check if product already exists or not and edit if present or add if its new
            const itemP = JSON.parse(JSON.stringify(action.payload));
            itemP.id = Number(itemP.id);
            const existsP = products.map(e => e.id).indexOf(itemP.id);

            if (existsP < 0) {
                // This is a new product
                products.push(itemP);

            } else {
                // The product already exists in list and should be checked if also present in cart
                const itemC = JSON.parse(JSON.stringify(action.payload));
                itemC.id = Number(itemC.id);
                const existsC = cart.map(e => e.id).indexOf(itemC.id);

                itemP.stock = products[existsP].stock;
                products[existsP] = itemP;

                if (existsC > -1) {
                    // Product is present in cart so update it
                    itemC.stock = cart[existsC].stock;
                    cart[existsC] = itemC;
                }
            }

            setLocalData(products, cart);
            state.value = products;
        },

        removeProducts: (state, action) => {
            const products = [...state.value].filter((item) => item.id !== action.payload.id);

            setLocalData(products, getCart());
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

        emptyState: (state) => {
            state.value = [];
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
    addProducts,
    removeProducts,
    addQuantity,
    subtractQuantity,
    emptyState,
} = productSlice.actions;

export const selectProduct = (state) => state.product.value;
export default productSlice.reducer;