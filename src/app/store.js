import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import loadingReducer from "../features/loadingSlice";

export const store = configureStore({
    reducer:{
        product:productReducer,
        loading:loadingReducer,
    },
})