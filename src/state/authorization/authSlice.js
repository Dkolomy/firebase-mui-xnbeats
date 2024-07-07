import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

// export const newRegisterUser = createAsyncThunk(
//   "authorization/registerUser",
//   async () => {
//     const response = await api.fakeApi();
//     console.log("newRegisterUser: ", response)
//     return response;
//   }
// );

// export const newLoginUser = createAsyncThunk(
//   "authorization/loginUser",
//   async () => {
//     const response = await api.fakeApi();
//     console.log("newLoginUser: ", response)
//     return response;
//   }
// );

const initialState = {
  isAuth: false,
  user: null,
  checkingAuth: false,
  errorCode: ""
};

const authSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    registerUser: (state = initialState, action) => {
      return { ...state, ...action.payload, checkingAuth: true };
    },
    loginUser: (state = initialState, action) => {
      return { ...state, ...action.payload, checkingAuth: true };
    },
    autoSignIn: (state = initialState, action) => {
      return { ...state, ...action.payload, checkingAuth: true };
    },
    testData: (state = initialState, action) => {
      return { ...state, isAuth: true, checkingAuth: true };
    },
  },
  // https://redux.js.org/tutorials/fundamentals/part-6-async-logic#introduction
  // https://redux-toolkit.js.org/usage/usage-guide
  // extraReducers: (builder) => {
  //   builder.addCase(newRegisterUser.fulfilled, (state, action) => {
  //     console.log(action);
  //   });
  //   builder.addCase(newLoginUser.fulfilled, (state, action) => {
  //     console.log(action);
  //   });
  // },
});

// export const { registerUser, loginUser, autoSignIn, testData } =
//   authSlice.actions;
export const { registerUser, loginUser } = authSlice.actions;
export default authSlice.reducer;
