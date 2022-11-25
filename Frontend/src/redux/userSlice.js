import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const signupUser = createAsyncThunk(
    "users/signupUser",
    async ({ name, email, password }, thunkAPI) => {
        try {
            const response = await fetch(
                "https://localhost:5000/api/auth/register",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                    }),
                }
            )
            let data = await response.json()
            console.log("data", data)
            if (response.status === 200) {
                localStorage.setItem("token", data.token)
                return { ...data, username: name, email: email }
            } else {
                return thunkAPI.rejectWithValue(data)
            }
        } catch (e) {
            console.log("Error", e.response.data)
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)


export const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "",
        email: "",
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
    },
    reducers: {
        // Reducer comes here
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
        signUpStart: (state) => {
            state.isFetching = true
        },
        signUpSuccess: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.email = payload.user.email;
            state.username = payload.user.name;
        },
        signUpFailure: (state) => {
            state.isFetching = false
            state.erorr = true
        },
    },
    extraReducers: {
        [signupUser.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.email = payload.user.email;
            state.username = payload.user.name;
        },
        [signupUser.pending]: (state) => {
            state.isFetching = true;
        },
        [signupUser.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        }
    }
})
export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export const userSelector = state => state.user