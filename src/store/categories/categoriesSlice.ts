import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../index';

import { API_URL } from '../../constants';

type CategoriesState = {
  data: string[];
  loading: boolean;
  error: string | null;
};

export const fetchCategories = createAsyncThunk<
  string[],
  void,
  { rejectValue: string; state: RootState }
>('categories/fetchCategories', async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const token = state.auth.accessKey;

  const response = await fetch(`${API_URL}api/productCategories`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return rejectWithValue('Не удалось получить каталог');
  }

  return response.json();
});

const initialState: CategoriesState = {
  data: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.data = action.payload;
          state.loading = false;
          state.error = null;
        },
      )
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        if (action.error.message) {
          state.error = action.error.message;
        }
      });
  },
});

export default categoriesSlice.reducer;
