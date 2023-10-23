import './NavBar.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../redux/reducers/modalSlice';

export default function NavBar() {
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
                <div className='nav-btn' onClick={openModal}>
                    <p>Login</p>
                </div>
            </div>
        </>
    );
}