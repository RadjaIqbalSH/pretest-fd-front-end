import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState, AppThunk } from '..';
import { getData } from 'services/getData';

export const ProductSlice = createSlice({
  name: 'product',

  initialState: {
    data: {
      editorsChoise: [],
      latestArticle: [],
      latestReview: [],
    },
  },

  reducers: {
    setProductData: (state: any, action: any) => {
      state.data.editorsChoise = action.payload[`editor's choice`];
      state.data.latestArticle = action.payload[`latest articles`];
      state.data.latestReview = action.payload[`latest review`];
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.product.data) {
        return state;
      }

      state.data.editorsChoise = action.payload.product.data.editorsChoise;
      state.data.latestArticle = action.payload.product.data.latestArticle;
      state.data.latestReview = action.payload.product.data.latestReview;
    },
  },
});

export const { setProductData } = ProductSlice.actions;

export const selectProduct = (state: AppState) => state.product;

export const fetchProduct = (): AppThunk => async (dispatch) => {
  const response = await getData();
  dispatch(setProductData(response));
};

export default ProductSlice.reducer;
