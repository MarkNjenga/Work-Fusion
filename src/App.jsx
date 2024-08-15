// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
// import Contact from './Pages/Contact';
import Control from './Pages/Control';
import NavBar from './Pages/NavBar'; // Import NavBar component
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar /> {/* Include the NavBar component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/control" element={<Control />} />
        </Routes>
        <ToastContainer /> 
      </div>
    </Router>
  );
}

export default App;
