// App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './features/homeSection/HomePage/HomePage';
import NavBar from './components/Navbar/NavBar';
import AuthModal from './features/authentication/AuthModal/AuthModal';
import api from './api/api';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <AuthModal />
    </div>
  );
}

export default App;
