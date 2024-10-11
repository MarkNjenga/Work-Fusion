import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import AdminPage from './Pages/AdminPage';
import NavBar from './Pages/NavBar'; // Import NavBar component
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginRegister from './Pages/LoginRegister';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  useEffect(() => {
    // Check if user is already logged in (e.g., via localStorage or a token)
    const token = localStorage.getItem('authToken'); // Example of token check
    if (token) {
      setIsLoggedIn(true); // User is logged in
    } else {
      setIsLoggedIn(false); // User is not logged in, show login form
    }
  }, []);

  const handleLoginSuccess = (token) => {
    localStorage.setItem('authToken', token); // Store the token in localStorage
    setIsLoggedIn(true); // Set login state to true after successful login
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove the token from localStorage on logout
    setIsLoggedIn(false); // Set login state to false
  };

  return (
    <Router>
      <div className="App">
        {!isLoggedIn ? (
          <LoginRegister onLoginSuccess={handleLoginSuccess} /> // Show login form if not logged in
        ) : (
          <>
            <NavBar onLogout={handleLogout} /> {/* Include NavBar with logout functionality */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/control" element={<AdminPage />} />
            </Routes>
          </>
        )}
        <ToastContainer /> {/* For notifications */}
      </div>
    </Router>
  );
}

export default App;
