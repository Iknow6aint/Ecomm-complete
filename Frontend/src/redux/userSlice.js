import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        erorr: false,
        username: "",
        email: "",
        password: ""
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload
        },
        loginFailure: (state) => {
            state.isFetching = false
            state.erorr = true
        },
        //register
        registerStart: (state) => {
            state.isFetching = true
        },
        registerSuccess: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.email = payload.user.email;
            state.username = payload.user.name
        },
        registerFailure: (state) => {
            state.isFetching = false;
            state.isError = true;
        },
    },
})


export const { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure } = userSlice.actions;
export default userSlice.reducer;