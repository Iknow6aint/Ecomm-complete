import { loginFailure, loginStart, loginSuccess, registerStart, registerSuccess, registerFailure } from "./userSlice"
import { publicRequest, userRequest } from "../requests"
import axios from "axios";

const APIURL = 'http://localhost:5000/api/auth/register'



export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

// export const register = async (dispatch, user) => {
//     dispatch(registerStart());
//     console.log(typeof user, JSON.stringify(user));
//     try {
//         const res = await fetch(APIURL, {
//             method: 'POST',
//             body: JSON.stringify(JSON.parse(user)),
//             headers: {
//                 "content-type": "application/json"
//             }
//         })
//         dispatch(registerSuccess(res.data))
//     } catch (error) {
//         dispatch(registerFailure())
//     }
// }