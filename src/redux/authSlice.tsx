// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null, // User object when authenticated
    error: null, // Authentication error message
  },
  reducers: {
    loginUserSuccess: (state, action) => {
      state.user = action.payload; // Set the authenticated user
      state.error = null; // Clear any previous errors
    },
    loginUserFailure: (state, action) => {
      state.user = null;
      state.error = action.payload; // Set the authentication error message
    },
    logoutUser: (state) => {
      state.user = null; // Clear the user when logging out
      state.error = null; // Clear any previous errors
    },
  },
});

export const {
  loginUserSuccess,
  loginUserFailure,
  logoutUser,
} = authSlice.actions;

export default authSlice.reducer;
