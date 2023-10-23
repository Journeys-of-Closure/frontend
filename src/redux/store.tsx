// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './reducers/modalSlice';
import authReducer from './reducers/authSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
    // Add other reducers as needed
  },
});

export type RootState = ReturnType<typeof store.getState>; // Define RootState here
export default store;
