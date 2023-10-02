import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import {API} from "./constant";

export const baseQuery = fetchBaseQuery({
	baseUrl: API.BASEURL,
	prepareHeaders: (headers, {getState}) => {
		const token = getState().auth?.token;
		if (!headers.has("Authorization") && token) {
			headers.set("Authorization", `Bearer ${token}`);
		}
	},
});
