// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage/HomePage';
import NavBar from './components/Navbar/NavBar';
import AuthModal from './components/AuthModal/AuthModal';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <AuthModal/>
    </div>
  );
}

export default App;
