import { ChangeEvent, FormEvent, useState } from 'react';
import './RegisterForm.css'; // Update the CSS file name if needed

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track password match

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return; // Exit the function early if passwords don't match
    }

    // Clear the password mismatch message if previously shown
    setPasswordsMatch(true);

    // Send the username and password to the Node.js server for registration
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // TODO Handle successful registration
        console.log('Registration successful');
      } else {
        // TODO Handle registration failure (e.g., username already exists)
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <form id="registerform-container" onSubmit={handleSubmit}>
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
        </div>
        <div id="confirm-password-container">
          <label id="confirm-password-label">CONFIRM PASSWORD:</label>
          <input
            id="confirm-password-input"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        {!passwordsMatch && (
          <p id="password-mismatch-message">Passwords do not match.</p>
        )}
      </form>
      <button id="register-btn" type="submit">Register</button>
      <div id="login-text">
        <p>Already have an account?</p> <p id="login-btn"> Login </p>
      </div>
    </>
  );
}

export default RegisterForm;
