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
        },
        //delete
        deleteProductStart: (state) => {
            state.isFetching = true;
            state.erorr = false
        },

        deleteProductSucess: (state, action) => {
            state.isFetching = false;
            state.product.splice(
                state.product.findIndex(item => item.id === action.payload),
                1
            )
        },
        deleteProductFailure: (state) => {
            state.isFetching = false;
            state.erorr = true
        }
    },
})


export const { getProductFailure, getProductStart, getProductSucess, deleteProductFailure, deleteProductStart, deleteProductSucess } = userSlice.actions;
export default userSlice.reducer;