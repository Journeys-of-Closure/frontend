import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { toggleRegister } from '../../../redux/reducers/modalSlice';
import { loginUserSuccess, loginUserFailure } from '../../../redux/reducers/authSlice'; // Import loginUserSuccess and loginUserFailure actions
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const authError = useSelector((state: RootState) => state.auth.error);

  const dispatch = useDispatch();

  const setToRegisterForm = () => {
    dispatch(toggleRegister())
  }

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate a login request (replace with your actual authentication process)
    if (username === 'validUsername' && password === 'validPassword') {
      // Dispatch the login success action
      dispatch(loginUserSuccess({ username }));
    } else {
      // Dispatch the login failure action with an error message
      dispatch(loginUserFailure('Invalid username or password'));
    }
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
