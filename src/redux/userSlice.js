import { createSlice } from "@reduxjs/toolkit";
import { signup, login, logout, getCurrentUser } from "./operations";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLogin: false,
    error: null
  },

  extraReducers: builder => {
    builder.addCase(signup.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLogin = true;
      }).addCase(
        signup.rejected, (state, {payload}) => {
          state.error = payload
          state.error === 400 ? alert("this data is already used") : alert("something get wrong")
    }).addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLogin = true;
      }).addCase(
        login.rejected, (state, {payload}) => {
          state.error = payload
          state.error === 400 ? alert("You put invalid email or password") : alert("something get wrong")
    })
      .addCase(logout.fulfilled, (state, _) => {
        state.token = null;
        state.user = { name: null, email: null };
        state.isLogin = false;
      }).addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLogin = true;
        state.user = action.payload;
      });
        },
});