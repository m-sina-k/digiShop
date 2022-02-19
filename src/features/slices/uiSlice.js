import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showBackdrop: false,
  showMegaDropdownBackdrop: false,
};

const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    setShowBackdrop: (state, { payload }) => {
      state.showBackdrop = payload;
    },
    setShowMegaDropdownBackdrop: (state, { payload }) => {
      state.showMegaDropdownBackdrop = payload;
    },
  },
});

export const { setShowBackdrop, setShowMegaDropdownBackdrop } = uiSlice.actions;

export default uiSlice.reducer;
