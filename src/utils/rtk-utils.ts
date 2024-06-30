// import { RootState } from "@/services/store";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

// import Cookies from "js-cookie";

export const baseQuery = fetchBaseQuery({
  baseUrl: "http://10.0.2.2:8001/api/v2",
  prepareHeaders: (headers) => {
    // const token = (getState() as RootState).token?.token;
    // const token = Cookies.get("token");
    // If we have a token set in state, let's assume that we should be passing it.
    // if (token) {
    //   headers.set("authorization", `Bearer ${token}`);
    // }

    return headers;
  },
});
