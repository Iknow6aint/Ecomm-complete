import { loginFailure, loginStart, loginSuccess } from "./userSlice"
import { publicRequest } from "../requests"
import { getProductFailure, getProductStart, getProductSucess } from "./productRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}


export const getProducts = async (dispatch, user) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products", user)
        dispatch(getProductSucess(res.data))
    } catch (error) {
        dispatch(getProductFailure())
    }
}