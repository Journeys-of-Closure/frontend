import './NavBar.css'
import SignIn_UpModal from '../../pages/SignIn&UpModal/SignIn_UpModal';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import RegisterForm from '../form/RegisterForm/RegisterForm';
import LoginForm from '../form/LoginForm/LoginForm';
import { toggleModal } from '../../redux/reducers/modalSlice';

export default function NavBar() {
    const isRegister = useSelector((state: RootState) => state.modal.isRegister);
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch(toggleModal());
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
                <Link to="/login" className='nav-btn' onClick={openModal}>
                    <p>Login</p>
                </Link>
            </div>
            <SignIn_UpModal>
                {isRegister ? <RegisterForm/> : <LoginForm/>}
            </SignIn_UpModal>
        </>
    );
}