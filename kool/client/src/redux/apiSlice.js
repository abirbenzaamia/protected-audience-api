import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials} from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_SERVER_BASE_URL,
  credentials: "same-origin",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    console.log(token)
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    console.log(headers)
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  console.log(args);
  // console.log(api);
  // console.log(extraOptions);
  let result = await baseQuery(args, api, extraOptions);
  console.log(result)
  if (result?.error?.originalStatus === 403) {
    const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);

    if (refreshResult?.data) {
      api.dispatch(setCredentials({ ...refreshResult.data }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      if (refreshResult?.error?.status === 403) {
        refreshResult.error.data.message = "Your login has expired.";
      }
      return refreshResult;
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    
  }),
});
