import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import {movieApi} from "../app/api";
const store = configureStore({
	reducer: {
		auth: authReducer,
		[movieApi.reducerPath]: movieApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(movieApi.middleware),
});

export default store;
