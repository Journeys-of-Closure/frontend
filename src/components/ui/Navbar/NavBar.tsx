import './NavBar.css'
import LogRegisterModal from '../../../pages/SignInPage/LogRegisterModal';
import useModal from '../../../hooks/useModal';
import LoginForm from '../../form/LoginForm/LoginForm';
import RegisterForm from '../../form/RegisterForm/RegisterForm';
import { useState } from 'react';

export function NavBar() {
    const { isOpen, toggle } = useModal();
    const [isRegister, setIsRegister] = useState(false);

    const handleToggleForm = () => {
        setIsRegister(!isRegister);
    };

    function resetToLoginForm () {
        toggle();
        handleToggleForm();
    }

    return (
        <>
            <div id='navbar'>
                <div className='nav-btn'>
                    <p>Memorial Waters</p>
                </div>
                <div className='nav-btn'>
                    <p>Light of Giving</p>
                </div>
                <div className='nav-btn'>
                    <p>Help & Support</p>
                </div>
                <div className={`nav-btn ${isOpen ? 'active' : ''}`} onClick={toggle}>
                    <p>Login</p>
                </div>
            </div>
            <LogRegisterModal isOpen={isOpen} isRegister={isRegister} toggle={toggle} resetToLoginForm={resetToLoginForm}>
                {isRegister ? <RegisterForm toggleForm={handleToggleForm}/> : <LoginForm toggleForm={handleToggleForm}/>}
            </LogRegisterModal>
        </>
    );
}