import { ChangeEvent, FormEvent, useState } from 'react';
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
    }
  };

  return {
    username,
    password,
    authError,
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
    authError,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  } = useLoginFormViewModel(); // Uso do ViewModel

  const dispatch = useDispatch();

  const setToRegisterForm = () => {
    dispatch(toggleRegister());
  };

  return (
    <>
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
      </form>
      <button id="login-btn" type="submit">Login</button>
      {authError && <div className="error-message">{authError}</div>}
      <div id="signup-text">
        <p>Don't have an account yet?</p> <p id="signup-btn" onClick={setToRegisterForm}> Sign Up </p>
      </div>
    </>
  );
}

export default LoginForm;
