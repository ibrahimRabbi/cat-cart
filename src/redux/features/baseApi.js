import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const getCartData = createApi({
    reducerPath: 'getCartData',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://cat-cart-server.vercel.app' }),
    endpoints: (build) => ({
        getPosts: build.query({
            query: (email) => `/cart?email=${email}`
        }),
        getOrderHistory: build.query({
            query: (email) => `/orderhistory?email=${email}`
        }),
        getUserInfo: build.query({
            query: (email) => `/user?email=${email}`
        }),
        getSearch: build.query({
            query: (title) => `/alldata?search=${title}`
        })

    })
})

export const { useGetPostsQuery, useGetOrderHistoryQuery, useGetUserInfoQuery, useGetSearchQuery } = getCartData

