import {combineReducers} from "redux";
import {usersAPI} from "../API/usersAPI";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    [usersAPI.reducerPath]: usersAPI.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(usersAPI.middleware)
})