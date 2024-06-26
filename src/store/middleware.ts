import { Middleware } from '@reduxjs/toolkit';
import { fetchAccessKey } from './auth/authSlice';

interface RejectedAction {
  type: string;
  payload?: {
    status: number;
  };
  error?: {
    message: string;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apiTokenErrorMiddleware: Middleware<object, any, any> =
  (store) => (next) => async (action) => {
    const state = store.getState();
    const rejectedAction = action as RejectedAction;

    if (
      rejectedAction.type.endsWith('rejected') &&
      rejectedAction.payload?.status === 401
    ) {
      if (!state.auth.loading) {
        await store.dispatch(fetchAccessKey());
      }
    }
    next(action);
  };
