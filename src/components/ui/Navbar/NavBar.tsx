import './NavBar.css'
import LoginModal from '../../../pages/SignInPage/LoginModal';
import useModal from '../../../hooks/useModal';
import LoginForm from '../../form/LoginForm/LoginForm';

export function NavBar() {
    const { isOpen, toggle } = useModal();
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
            <LoginModal isOpen={isOpen} toggle={toggle}>
                <LoginForm />
            </LoginModal>
        </>
    );
}