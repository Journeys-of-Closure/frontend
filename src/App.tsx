import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={HomePage}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
