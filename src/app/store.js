import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import loadingReducer from "../features/loadingSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
    reducer:{
        product:productReducer,
        loading:loadingReducer,
        cart:cartReducer,
    },
})