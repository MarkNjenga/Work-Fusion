import { useState, useEffect } from 'react';
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
  const [showLoginRegister, setShowLoginRegister] = useState(true); // State to manage LoginRegister visibility

  useEffect(() => {
    // Show the LoginRegister form when the browser loads
    if (showLoginRegister) {
      setShowLoginRegister(true);
    }
  }, [showLoginRegister]);

  const handleLoginSuccess = () => {
    setShowLoginRegister(false); // Close the LoginRegister form on successful login
  };

  return (
    <Router>
      <div className="App">
        {showLoginRegister && (
          <LoginRegister onLoginSuccess={handleLoginSuccess} />
        )}
        {!showLoginRegister && (
          <>
            <NavBar /> {/* Include the NavBar component */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/adminpgage" element={<AdminPage />} />
            </Routes>
          </>
         )} 
        <ToastContainer /> 
      </div>
    </Router>
  );
}

export default App;
