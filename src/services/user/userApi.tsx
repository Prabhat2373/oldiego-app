import { baseQuery } from "@/utils/rtk-utils";
import { createApi } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  baseQuery: baseQuery,
  reducerPath: "userApi",
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: "/account/profile",
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useLazyGetProfileQuery,
  useRegisterMutation,
  useLoginMutation,
} = userApi;
