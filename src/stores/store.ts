import { authSlice } from '@/features/Auth/v1/Auth.Slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
