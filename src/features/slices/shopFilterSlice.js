import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  featured: false,
  sale: false,
  rate: null,
  minPrice: null,
  maxPrice: null,
  company: null,
  sort: "sys.createdAt",
  searchInput: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleFeatured: (state) => {
      state.featured = !state.featured;
    },
    toggleSale: (state) => {
      state.sale = !state.sale;
    },
    setRate: (state, { payload }) => {
      state.rate = payload;
    },
    setCompany: (state, { payload }) => {
      state.company = payload;
    },
    setSearchQuery: (state, { payload }) => {
      state.searchInput = payload;
    },
    setSort: (state, { payload }) => {
      state.sort = payload;
    },
    updatePrice: (state, { payload }) => {
      state.minPrice = payload[0];
      state.maxPrice = payload[1];
    },
    clearFilters: () => {
     return initialState
    },
  },
});

export const {
  toggleFeatured,
  toggleSale,
  setCompany,
  setRate,
  setSearchQuery,
  setSort,
  updatePrice,
  clearFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
