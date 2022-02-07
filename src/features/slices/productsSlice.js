import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../server/contentful";

// destructuring key values from a complex response
const formatData = (items) => {
  let tempItems = items.map((item) => {
    let id = item.sys.id;
    let images = item.fields.images.map((image) => image.fields.file.url);

    let product = { ...item.fields, id, images };
    return product;
  });
  return tempItems;
};

// fetch products from the server
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await client.getEntries({
        content_type: "digishop",
      });
      const data = formatData(response.items);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  loading: true,
  products: [],
  featuredProducts:[],
  discountedProducts:[]
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.featuredProducts = payload.filter((item) => (item.featured));
      state.discountedProducts = payload.filter((item) => (item.discount));
      state.loading = false;
    },
  },
});

export default productsSlice.reducer;
