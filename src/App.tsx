// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./features/homePage/HomePage";
import NavBar from "./features/homePage/navBar/NavBar";
import AuthModal from "./features/authentication/AuthModal/AuthModal";

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
