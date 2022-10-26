import { configureStore } from "@reduxjs/toolkit"
import cartRedux from "./cartRedux"
import userSlice from "./userSlice"


export default configureStore({
    reducer: {
        cart: cartRedux,
        user: userSlice
    }
})