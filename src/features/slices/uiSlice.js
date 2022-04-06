import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showBackdrop: false,
  showMegaDropdownBackdrop: false,
  lockBodyScroll: false,
  // routes to hide header and footer
  exceptionRoutes : ["/login", "/sign-up", "/checkout/shipping"],
};

const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    setShowBackdrop: (state, { payload }) => {
      state.showBackdrop = payload;
      state.lockBodyScroll = payload;
    },
    setShowMegaDropdownBackdrop: (state, { payload }) => {
      state.showMegaDropdownBackdrop = payload;
    },
    lockBodyScroll:(state,{payload})=>{
      state.lockBodyScroll = payload;
    }
  },
});

export const { setShowBackdrop, setShowMegaDropdownBackdrop,lockBodyScroll } = uiSlice.actions;

export default uiSlice.reducer;
