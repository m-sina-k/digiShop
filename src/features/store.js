import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import uiSlice from "./slices/uiSlice";
import productsSlice from "./slices/productsSlice";
import shopFilterSlice from "./slices/shopFilterSlice";
import cartSlice from "./slices/cartSlice";
import submitOrderSlice from "./slices/submitOrderSlice";

export const store = configureStore({
  reducer: {
    authState: authSlice,
    uiState: uiSlice,
    productsState: productsSlice,
    filterState: shopFilterSlice,
    cartState: cartSlice,
    orderState:submitOrderSlice
  }
});
