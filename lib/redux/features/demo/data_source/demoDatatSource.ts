import { apiSlice } from "../../api/apiSlice"

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/demo'
    })
  })
})

export const { useGetUsersQuery } = extendedApiSlice