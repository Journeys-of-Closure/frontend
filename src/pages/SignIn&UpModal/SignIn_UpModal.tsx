// src/components/LoginModal.tsx
import React, { ReactNode } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store'; // Import RootState from your Redux store
import { openModal, closeModal } from '../../redux/modalSlice';

import './SignIn_UpModal.css';

interface LoginModalType {
  children?: ReactNode;
}

export default function LoginModal(props: LoginModalType) {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

  const toggle = () => {
    if (isOpen) {
      dispatch(closeModal());
    } else {
      dispatch(openModal());
    }
  }

  return (
    <>
      {isOpen && (
        <div id="modal-overlay" onClick={toggle}>
          <div id="modal-box" onClick={(e) => e.stopPropagation()}>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
