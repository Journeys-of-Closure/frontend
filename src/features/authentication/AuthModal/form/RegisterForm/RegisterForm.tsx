import { ChangeEvent, FormEvent, useState } from 'react';
import './RegisterForm.css'; // Atualize o nome do arquivo CSS, se necessário
import { toggleRegister } from '../../../../../redux/reducers/modalSlice';
import { registerUserSuccess } from '../../../../../redux/reducers/authSlice';
import { useDispatch } from 'react-redux';
import { UserModel } from '../../../models/userModel'; // Importando o modelo de usuário
import ConfirmationRegisterForm from '../ConfirmationRegisterForm/ConfirmationRegisterForm';
import { toast } from 'react-toastify';

// ViewModel - Lógica de negócios
function useRegisterFormViewModel() {
  const [user, setUser] = useState<UserModel>({ username: '', password: '' });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const dispatch = useDispatch();

  const notify = (authError: String) => toast(authError);
  const handleUserChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user.password !== confirmPassword) {
      setPasswordsMatch(false);
      notify('Senhas não conferem');
      return;
    }
    setPasswordsMatch(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const newUser = await response.json();
        dispatch(registerUserSuccess(newUser));
        console.log('Registro realizado com sucesso');
      } else {
        setShowConfirmation(true); // Temporary till real auth implementation
        console.log('Falha no registro');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      notify(errorMessage);
    }
  };

  return {
    user,
    confirmPassword,
    passwordsMatch,
    showConfirmation,
    handleUserChange,
    handleConfirmPasswordChange,
    handleSubmit,
  };
}

// View - Componente de apresentação
function RegisterForm() {
  const {
    user,
    confirmPassword,
    passwordsMatch,
    showConfirmation,
    handleUserChange,
    handleConfirmPasswordChange,
    handleSubmit,
  } = useRegisterFormViewModel(); // Uso do ViewModel

  const dispatch = useDispatch();

  const setToLoginForm = () => {
    dispatch(toggleRegister());
  };

  return (
    <>
      {showConfirmation ? (
        <ConfirmationRegisterForm />
      ) : (
        <form id="registerform-container" onSubmit={handleSubmit}>
          <div id="username-container">
            <label id="username-label">EMAIL:</label>
            <input
              id="username-input"
              type="text"
              name="username"
              value={user.username}
              onChange={handleUserChange}
              required
            />
          </div>
          <div id="password-container">
            <label id="password-label">PASSWORD:</label>
            <input
              id="password-input"
              type="password"
              name="password"
              value={user.password}
              onChange={handleUserChange}
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
          <button id="register-btn" type="submit">Register</button>
          <div id="signin-text">
            <p>Already have an account?</p> <p id="signin-btn" onClick={setToLoginForm}> Log in </p>
          </div>
        </form>
      )}
    </>
  );
}

export default RegisterForm;
