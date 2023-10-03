import React, { ReactNode } from 'react';
import './LoginModal.css';

interface LoginModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function LoginModal(props: LoginModalType) {
  return (
    <>
      {props.isOpen && (
      <div id="modal-overlay" onClick={props.toggle}>
        <div id="modal-box" onClick={(e) => e.stopPropagation()}>
          {props.children}
        </div>
      </div>
      )}
    </>
  );
};

