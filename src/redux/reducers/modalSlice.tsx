// src/redux/modalSlice.ts
import { createSlice } from '@reduxjs/toolkit';

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
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    toggleRegister: (state) => {
      state.isRegister = !state.isRegister;
    },
  },
});

export const {toggleModal, toggleRegister} = modalSlice.actions;
export default modalSlice.reducer;
