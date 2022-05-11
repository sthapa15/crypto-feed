// //logic of fetching data from api

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "ae8642b6d4msh81a943b757c43dbp1a74efjsndda2293b80fe",
};

// const baseUrl = "https://api.coingecko.com/api/v3";
const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`), 
    }),
  }),
});

// export const cryptoExchangeApi = createApi({
//   reducerPath: "cryptoExchangeApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getExchanges: builder.query({
//       query: () => createRequest("/exchanges/list"),
//     }),
//   }),
// });

// export const cryptoMarketCapApi = createApi({
//   reducerPath: "cryptoMarketCapApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getMarkets: builder.query({
//       query: () => createRequest("/global"),
//     }),
//   }),
// });

export const { useGetCryptosQuery } = cryptoApi;
// export const { useGetExchangesQuery } = cryptoExchangeApi;
// export const { useGetMarketsQuery } = cryptoMarketCapApi;
