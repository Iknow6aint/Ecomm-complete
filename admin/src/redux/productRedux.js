import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "product",
    initialState: {
        product: null,
        isFetching: false,
        erorr: false
    },
    reducers: {
        // get all
        getProductStart: (state) => {
            state.isFetching = true;
            state.erorr = false
        },

        getProductSucess: (state, action) => {
            state.isFetching = false;
            state.product = action.payload
        },
        getProductFailure: (state) => {
            state.isFetching = false;
            state.erorr = true
        }
    },
})


export const { getProductFailure, getProductStart, getProductSucess } = userSlice.actions;
export default userSlice.reducer;