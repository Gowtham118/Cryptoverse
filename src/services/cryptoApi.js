import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders ={
         'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
         'x-rapidapi-key': '63a1ad8b5dmshc5ad7a127e78f39p169618jsnb1816639aa4e'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) =>({
    url,
    headers:cryptoApiHeaders
})
export const cryptoApi = createApi ({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptos:builder.query({
            query:(count) => createRequest(`/coins?limit=${count}`)
        })
    })
})
export const{
    useGetCryptosQuery,
} = cryptoApi;