// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./features/homePage/HomePage";
import AboutPage from "./features/aboutPage/AboutPage";
import NavBar from "./features/navBar/NavBar";
import AuthModal from "./features/authentication/AuthModal/AuthModal";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
      <AuthModal />
    </div>
  );
}

export default App;
