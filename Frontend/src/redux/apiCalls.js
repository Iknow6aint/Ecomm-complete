import { loginFailure, loginStart, loginSuccess, registerStart, registerSuccess, registerFailure } from "./userSlice"
import { publicRequest, userRequest } from "../requests"


export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const register = async (dispatch, params) => {
    dispatch(registerStart());
    console.log(params);
    try {
        const res = await publicRequest.post("/auth/register", JSON.stringify(params),
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: false,
            }
        )
        dispatch(registerSuccess(res.data))
    } catch (error) {
        dispatch(registerFailure())
        console.error(error);
    }
}