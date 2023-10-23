// src/components/LoginModal.tsx
import React, { ReactNode } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store'; // Import RootState from your Redux store
import { toggleModal, toggleRegister } from '../../redux/reducers/modalSlice';

import './SignIn_UpModal.css';

interface LoginModalType {
  children?: ReactNode;
}

export default function LoginModal(props: LoginModalType) {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const isRegister = useSelector((state: RootState) => state.modal.isRegister)
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleModal()); // Dispatch the action to close the modal
  };

  const resetToLoginForm = () => {
    if (isRegister) {
      dispatch(toggleRegister());
    }
  }

  const onClickHandler = () => {
    closeModal();
    resetToLoginForm();
  }
  return (
    <>
      {isOpen && (
        <div id="modal-overlay" onClick={onClickHandler}>
          <div id="modal-box" onClick={(e) => e.stopPropagation()}>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
