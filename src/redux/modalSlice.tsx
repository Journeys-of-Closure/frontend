// src/redux/modalSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: boolean;
  isRegister: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  isRegister: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    toggleRegister: (state) => {
      state.isRegister = !state.isRegister;
    },
    resetToLoginForm: (state) => {
      state.isRegister = false;
    },
  },
});

export const { openModal, closeModal, toggleRegister, resetToLoginForm } = modalSlice.actions;
export default modalSlice.reducer;
