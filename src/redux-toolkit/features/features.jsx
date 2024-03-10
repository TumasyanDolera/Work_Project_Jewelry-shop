import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    token: '',
    ids: [],
    items: [],
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIds: (state, action) => {
      state.ids = action.payload;
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setToken, setIds, setItems } = productSlice.actions;
export const selectProduct = (state) => state.product;

export const productReducer = productSlice.reducer;