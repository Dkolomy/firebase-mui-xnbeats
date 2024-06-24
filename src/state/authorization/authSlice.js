import { createSlice } from "@reduxjs/toolkit";
import * as api from "../../api";

const initialState = {
  value: {
    email: "francis@gmail.com",
    password: "test1234",
    first: "francis",
    last: "jones",
  },
};

const authSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    registerUser: (state, payload) => {
      // state.value = api.registerUser(payload);
      state.value = {};
      console.log("Register", state.value);
      //      console.log("Register", api.registerUser(payload));
    },
    loginUser: (state, payload) => {
      // state.value = api.loginUser(payload);
      state.value = {};
      console.log("Login", state.value);
      //      console.log("Login", state.value);
    },
  },
});

export const { registerUser, loginUser } = authSlice.actions;
export default authSlice.reducer;
