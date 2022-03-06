import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query';
require ('dotenv').config();

const cryptoHeaders = {
     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': process.env.API_KEY
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
