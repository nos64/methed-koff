import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../index';

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

export const fetchProducts = createAsyncThunk<
  object[],
  void,
  { rejectValue: string; state: RootState }
>('products/fetchProducts', async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const token = state.auth.accessKey;

  const response = await fetch('https://koff-api.vercel.app/api/products', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
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
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<object[]>) => {
          state.data = action.payload;
          state.loading = false;
          state.error = null;
        },
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        if (action.error.message) {
          state.error = action.error.message;
        }
      });
  },
});

export default productsSlice.reducer;
