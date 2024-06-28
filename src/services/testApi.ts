import { baseQuery } from "@/utils/rtk-utils";
import { createApi } from "@reduxjs/toolkit/query/react";

export const testApi = createApi({
  baseQuery,
  reducerPath: "testApi",
  endpoints: (builder) => ({
    getTest: builder.query({
      query: () => ({
        url: `https://jsonplaceholder.typicode.com/todos/1`,
      }),
    }),
  }),
});

export const { useLazyGetTestQuery } = testApi;
