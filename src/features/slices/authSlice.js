import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userToken: localStorage.getItem("userToken")
    ? localStorage.getItem("userToken")
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    saveUserToken: (state, { payload }) => {
      state.userToken = payload;
      localStorage.setItem("userToken", payload);
    },
  },
});

export const { setUser,saveUserToken } = authSlice.actions;
export default authSlice.reducer;
