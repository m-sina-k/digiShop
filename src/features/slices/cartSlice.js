import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      // update cart changes before adding new item
      state.cartItems = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];

      state.cartItems = [...state.cartItems, { ...payload, qty: 1 }];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    increaseQty: (state, { payload }) => {
      const updatedItems = state.cartItems.map((item) =>
        item.id === payload ? { ...item, qty: item.qty + 1 } : item
      );
      state.cartItems = updatedItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseQty: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        return item.id === payload ? { ...item, qty: item.qty - 1 } : item;
      });

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    emptyCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },

    updateCart:(state)=>{
      state.cartItems = JSON.parse(localStorage.getItem("cartItems"))
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    }
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  emptyCart,
  updateCart
} = cartSlice.actions;
export default cartSlice.reducer;
