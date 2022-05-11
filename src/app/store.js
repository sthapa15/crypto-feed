import { configureStore } from "@reduxjs/toolkit";

import {
  cryptoApi,
  // cryptoExchangeApi,
  // cryptoMarketCapApi,
} from "../services/cryptoApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    // [cryptoExchangeApi.reducerPath]: cryptoExchangeApi.reducer,
    // [cryptoMarketCapApi.reducerPath]: cryptoMarketCapApi.reducer,
  },
});
