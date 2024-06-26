import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../index';

import { API_URL } from '../../constants';

type CategoriesState = {
  data: string[];
  loading: boolean;
  error: string | null;
};

type RejectWithValue = {
  status: number;
  error: string;
};

export const fetchCategories = createAsyncThunk<
  string[],
  void,
  { rejectValue: RejectWithValue | string; state: RootState }
>('categories/fetchCategories', async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const token = state.auth.accessKey;

  const response = await fetch(`${API_URL}api/productCategories`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      return rejectWithValue({
        status: response.status,
        error: 'Не удалось получить каталог',
      });
    }

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
        if (action.payload && typeof action.payload === 'object') {
          state.error = action.payload.error;
        } else {
          state.error = action.error.message || 'Не удалось получить каталог';
        }
      });
  },
});

export default categoriesSlice.reducer;
