import React from 'react';
import './NavBar.css'
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/reducers/modalSlice';

function NavBar() {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(toggleModal());
  }
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
} export default NavBar;
