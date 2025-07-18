import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Auth_Type } from './type/Login.type';

// Define the shape of the Auth state

// Initial state
const initialState: Auth_Type = {
  user: null,
};

// Create the Auth slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to log in the user
    login: (state, action: PayloadAction<Auth_Type['user']>) => {
      state.user = action.payload;
    },

    // Action to log out the user
    logout: (state) => {
      state.user = null;
    },
  },
});

// Export the actions
export const { login, logout } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
