// ModalContainer.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { toggleModal, toggleRegister } from '../../redux/reducers/modalSlice';
import RegisterForm from '../form/RegisterForm/RegisterForm';
import LoginForm from '../form/LoginForm/LoginForm';

import './AuthModal.css';

function AuthModal() {
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
            {isRegister? <RegisterForm/> : <LoginForm/>}
          </div>
        </div>
      )}
    </>
  );
}

export default AuthModal;
