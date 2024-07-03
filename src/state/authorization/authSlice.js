import { createSlice } from "@reduxjs/toolkit";
import * as api from "../../api";

const initialState = {
  isAuth: false,
  user: null,
  checkingAuth: false,
};

const authSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      api.registerUser(action.payload).then((result) => {
        state = { ...result, checkingAuth: true };
        console.log(state);
      });
    },
    loginUser: (state, action) => {
      api.loginUser(action.payload).then((result) => {
        state = { ...result, checkingAuth: true };
        console.log(state);
      })
    },
  },
});

export const { registerUser, loginUser } = authSlice.actions;
export default authSlice.reducer;
