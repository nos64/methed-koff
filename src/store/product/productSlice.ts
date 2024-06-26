import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../index';

import { API_URL } from '../../constants';

export interface Product {
  article: string;
  category: string;
  characteristics: [string, string];
  id: number;
  images: string[];
  name: string;
  price: number;
}

type ProductState = {
  data: Product | null;
  loading: boolean;
  error: string | null;
};

type RejectWithValue = {
  status: number;
  error: string;
};

export const fetchProduct = createAsyncThunk<
  Product,
  string,
  { rejectValue: RejectWithValue | string; state: RootState }
>(
  'product/fetchProduct',
  async (productId: string, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.accessKey;

    const response = await fetch(`${API_URL}api/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        return rejectWithValue({
          status: response.status,
          error: 'Не удалось получить информацию о товаре',
        });
      }

      return rejectWithValue('Не удалось получить информацию о товаре');
    }

    return response.json();
  },
);

const initialState: ProductState = {
  data: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        if (action.payload && typeof action.payload === 'object') {
          state.error = action.payload.error;
        } else {
          state.error =
            action.error.message || 'Не удалось получить информацию о товаре';
        }
      });
  },
});

export default productSlice.reducer;
