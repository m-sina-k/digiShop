import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import uiSlice from "./slices/uiSlice";
import productsSlice from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    authState: authSlice,
    uiState: uiSlice,
    productsState: productsSlice,
  },
});
