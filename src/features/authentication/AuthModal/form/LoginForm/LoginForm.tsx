import React from 'react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import { toggleRegister } from '../../../../../redux/reducers/modalSlice';
import { loginUserSuccess, loginUserFailure } from '../../../../../redux/reducers/authSlice';
import { fakeLogin } from '../../../../../redux/reducers/authService';
import './LoginForm.css';

// ViewModel - Lógica de negócios
function useLoginFormViewModel() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const authError = useSelector((state: RootState) => state.auth.error);
  const dispatch = useDispatch();

  const notify = () => {
    if (authError) {
      toast.error(authError, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const user = await fakeLogin(username, password);
      dispatch(loginUserSuccess(user));
    } catch (error) {
      dispatch(loginUserFailure(error));
      notify();
    }
  };

  return {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  };
}

// View - Componente de apresentação
function LoginForm() {
  const {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  } = useLoginFormViewModel(); // Uso do ViewModel

  const dispatch = useDispatch();

  const setToRegisterForm = () => {
    dispatch(toggleRegister());
  };

  return (
    <form id="loginform-container" onSubmit={handleSubmit}>
      <div id="username-container">
        <label id="username-label">EMAIL:</label>
        <input
          id="username-input"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>
      <div id="password-container">
        <label id="password-label">PASSWORD:</label>
        <input
          id="password-input"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <p id="rec-pw-btn"> Recover Password </p>
      </div>
      <button id="login-btn" type="submit">Login</button>
      <div id="signup-text">
        <p>Don't have an account yet?</p> <p id="signup-btn" onClick={setToRegisterForm}> Sign Up </p>
      </div>
    </form>
  );
}

export default LoginForm;
