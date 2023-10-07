import React, { ReactNode } from 'react';
import './LogRegisterModal.css';

interface LoginModalType {
  children?: ReactNode;
  isOpen: boolean;
  isRegister: boolean;
  toggle: () => void;
  resetToLoginForm: () => void;
}

export default function LoginModal(props: LoginModalType) {
  return (
    <>
      {props.isOpen && (
      <div id="modal-overlay" onClick={props.isRegister ? props.resetToLoginForm : props.toggle}>
        <div id="modal-box" onClick={(e) => e.stopPropagation()}>
          {props.children}
        </div>
      </div>
      )}
    </>
  );
};

