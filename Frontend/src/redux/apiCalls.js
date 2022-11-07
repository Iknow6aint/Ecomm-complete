import { loginFailure, loginStart, loginSuccess, registerStart, registerSuccess, registerFailure } from "./userSlice"
import { publicRequest } from "../requests"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}
