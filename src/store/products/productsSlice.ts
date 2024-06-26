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

type ProductsState = {
  data: Product[];
  loading: boolean;
  error: string | null;
};

type RejectWithValue = {
  status: number;
  error: string;
};

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: RejectWithValue | string; state: RootState }
>('products/fetchProducts', async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const token = state.auth.accessKey;

  const response = await fetch(`${API_URL}api/products`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      return rejectWithValue({
        status: response.status,
        error: 'Не удалось получить список товаров',
      });
    }

    return rejectWithValue('Не удалось получить список товаров');
  }

  return response.json();
});

const initialState: ProductsState = {
  data: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        if (action.payload && typeof action.payload === 'object') {
          state.error = action.payload.error;
        } else {
          state.error =
            action.error.message || 'Не удалось получить список товаров';
        }
      });
  },
});

export default productsSlice.reducer;
