import { API } from "./constant";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./fetchQuery";

export const movieApi = createApi({
  reducerPath: "movie",
  baseQuery,
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: ({ ...values }) => ({
        url: API.SIGN_UP,
        method: "POST",
        body: { ...values },
      }),
    }),
    login: builder.mutation({
      query: ({ ...values }) => ({
        url: API.LOGIN,
        method: "POST",
        body: { ...values },
      }),
    }),
    getMovies: builder.query({
      query: () => ({
        url: API.MOVIES,
        method: "GET",
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useGetMoviesQuery } = movieApi;
