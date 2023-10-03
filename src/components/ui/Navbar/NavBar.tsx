import { NavLink } from 'react-router-dom';
import './NavBar.css'
import LoginModal from '../../../pages/SignInPage/LoginModal';
import useModal from '../../../hooks/useModal';
import LoginForm from '../../form/LoginForm';

export function NavBar() {
    const { isOpen, toggle } = useModal();
    return (
        <>
            <div id='navbar'>
                <NavLink className='link-container' to='/memorial-waters'>
                    <p>Memorial Waters</p>
                </NavLink>
                <NavLink className='link-container' to='/light-of-giving'>
                    <p>Light of Giving</p>
                </NavLink>
                <div className='link-container'>
                    <p>Help & Support</p>
                </div>
                <div className='link-container' onClick={toggle}>
                    <p>Login</p>
                </div>
            </div>
            <LoginModal isOpen={isOpen} toggle={toggle}>
                <LoginForm />
            </LoginModal>
        </>
    );
}