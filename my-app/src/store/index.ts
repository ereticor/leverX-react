import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../reducers";

const preloadedState = {
  // app: {
  //   days: 147,
  //   vacations: []
  // },
};

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  preloadedState,
  reducer: rootReducer(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
