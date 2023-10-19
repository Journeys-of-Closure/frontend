import './NavBar.css'
import LogRegisterModal from '../../pages/SignIn&UpModal/SignIn_UpModal';
import useModal from '../../hooks/useModal';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function NavBar() {
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
                <Link to="/login" className='nav-btn'> Login </Link>
            </div>
            <LogRegisterModal/>
        </>
    );
}