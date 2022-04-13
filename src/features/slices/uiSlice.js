import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showBackdrop: false,
  showMegaDropdownBackdrop: false,
  lockBodyScroll: false,
  searchQuery:'',
  // routes to hide header and footer
  exceptionRoutes : ["/login", "/sign-up", "/checkout/shipping","/checkout/payment"],
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
    },
    setSearchQuery:(state,{payload}) =>{
      state.searchQuery = payload;
    }
  },
});

export const { setShowBackdrop, setShowMegaDropdownBackdrop,lockBodyScroll,setSearchQuery } = uiSlice.actions;

export default uiSlice.reducer;
