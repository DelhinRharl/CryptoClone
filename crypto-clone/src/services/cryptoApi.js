import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoHeaders = {
     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key':'5b0af59a89msh874d44a75ee724ep18ecd8jsn2c3414ab8c44'
}

const baseUrl = "'https://coinranking1.p.rapidapi.com"

const createRequest = (url) =>({url,headers:cryptoHeaders})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos:builder.query({
            query:() => createRequest('/exchanges')
        })
    })
})
export const{
    useGetCryptosQuery,
}= cryptoApi;