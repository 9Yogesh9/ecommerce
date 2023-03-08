import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: true,
    status: 'idle',
}

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,

    reducers:{
        loadingFalse:(state) => {
            state.value = false
        },
        loadingTrue:(state) => {
            state.value = true
        },
    }
});

export const {loadingFalse, loadingTrue} = loadingSlice.actions;
export const selectLoading = (state) => state.loading.value;

export default loadingSlice.reducer;