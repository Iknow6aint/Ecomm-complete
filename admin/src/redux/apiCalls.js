import { loginFailure, loginStart, loginSuccess } from "./userSlice"
import { publicRequest, userRequest } from "../requests"
import { getProductFailure, getProductStart, getProductSucess, deleteProductFailure, deleteProductStart, deleteProductSucess } from "./productRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}


export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products")
        dispatch(getProductSucess(res.data))
    } catch (error) {
        dispatch(getProductFailure())
    }
}
export const deleteProducts = async (dispatch, id) => {
    dispatch(deleteProductStart());
    try {
        //const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSucess(id))
    } catch (error) {
        dispatch(deleteProductFailure())
    }
}