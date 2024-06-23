// https://www.youtube.com/watch?v=YPVUPpKADb8

import { configureStore } from "@reduxjs/toolkit";
import authUser from "./reducers/auth";

export default configureStore({
  reducer: {
    authUser: authUser,
  },
});
