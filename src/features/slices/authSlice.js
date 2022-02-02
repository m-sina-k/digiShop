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
      localStorage.setItem("userEmail", payload);
    },
    saveUserToken: (state, { payload }) => {
      state.userToken = payload;
      localStorage.setItem("userToken", payload);
    },
    logout : (state)=>{
      state.user = null;
      state.userToken = null;
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userToken");
      localStorage.removeItem("userInfo");
    }
  },
});

export const { setUser,saveUserToken,logout } = authSlice.actions;
export default authSlice.reducer;
