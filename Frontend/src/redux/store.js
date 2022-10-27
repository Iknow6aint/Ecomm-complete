import { configureStore } from "@reduxjs/toolkit"
import cartRedux from "./cartRedux"
import userSlice from "./userSlice"

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: "root",
    version: 1,
    storage,
};


const persistedReducer = persistReducer(persistConfig, userSlice);

export const store = configureStore({
    reducer: {
        cart: cartRedux,
        user: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export let persistor = persistStore(store);