// AuthNavbar.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { logoutUser } from '../../../redux/reducers/authSlice';
import './AuthNavbar.css';

const AuthNavbar: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    // You can dispatch an action to log the user out here (e.g., dispatch(logoutUser())).
  };

  return (
    <nav className="auth-navbar">
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        {user ? (
          <>
            <li className="nav-item">Profile</li>
            <li className="nav-item">Dashboard</li>
            <li className="nav-item">Shop</li>
            <li className="nav-item" onClick={handleLogout}>Logout</li>
          </>
        ) : (
          <li className="nav-item">Login</li>
        )}
      </ul>
    </nav>
  );
};

export default AuthNavbar;
