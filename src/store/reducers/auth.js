import { createSlice } from "@reduxjs/toolkit";
import * as api from "../../api";

const authUser = createSlice({
  name: "authorization",
  initialState: {
    value: {},
  },
  reducers: {
    registerUser: (state, payload) => {
      state.value = api.registerUser(payload);
      console.log("Register", state.value);
      //      console.log("Register", api.registerUser(payload));
    },
    loginUser: (state, payload) => {
      state.value = api.loginUser(payload);
      console.log("Login", state.value);
      //      console.log("Login", state.value);
    },
  },
});

export const { registerUser, loginUser } = authUser.actions;
export default authUser.reducer;
