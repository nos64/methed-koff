import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { API_URL } from '../../constants';

type AuthState = {
  accessKey: string | null;
  loading: boolean;
  error: string | null;
};

export const fetchAccessKey = createAsyncThunk<
  string,
  undefined,
  { rejectValue: string }
>('auth/fetchAccessKey', async (_, { rejectWithValue }) => {
  const response = await fetch(`${API_URL}api/users/accessKey`);

  if (!response.ok) {
    return rejectWithValue('Не удалось получить токен доступа');
  }

  const data = await response.json();

  return data.accessKey;
});

const initialState: AuthState = {
  accessKey: localStorage.getItem('accessKey') ?? null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    removeToken(state) {
      (state.accessKey = null), localStorage.removeItem('accessKey');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessKey.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAccessKey.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.accessKey = action.payload;
          localStorage.setItem('accessKey', action.payload);
          state.loading = false;
          state.error = null;
        },
      )
      .addCase(fetchAccessKey.rejected, (state, action) => {
        state.loading = false;
        if (action.error.message) {
          state.error = action.error.message;
        }
      });
  },
});

export const { removeToken } = authSlice.actions;

export default authSlice.reducer;
