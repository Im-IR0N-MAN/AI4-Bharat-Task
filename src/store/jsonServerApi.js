import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonServerApi = createApi({
  reducerPath: "jsonServerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
  }),
});

export const { useGetUsersQuery } = jsonServerApi;
