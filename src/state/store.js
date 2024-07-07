// https://www.youtube.com/watch?v=YPVUPpKADb8

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authorization/authSlice";

export const store = configureStore({
  reducer: {
    authUser: authReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
