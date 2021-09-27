import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
 const cryptoNewsHeaders ={
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '63a1ad8b5dmshc5ad7a127e78f39p169618jsnb1816639aa4e'
 }

 const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

 const createRequest = (url) =>({
    url,
    headers:cryptoNewsHeaders
})
 export const cryptoNewsApi = createApi ({
    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptoNews:builder.query({
            query:({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;