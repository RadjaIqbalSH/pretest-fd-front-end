import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState, AppThunk } from "..";
import { getData } from "services/getData";

export const ProductSlice = createSlice({
  name: "product",

  initialState: {
    data: {},
  },

  reducers: {
    setProductData: (state, action) => {
      state.data = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.product.data) {
        return state;
      }

      state.data = action.payload.product.data;
    },
  },
});

export const { setProductData } = ProductSlice.actions;

export const selectProduct = (state: AppState) => state.product;

// You can do async http calls with thunks
export const fetchProduct = (): AppThunk => async (dispatch) => {
  const response = await getData();
  dispatch(setProductData(response));
};

export default ProductSlice.reducer;
