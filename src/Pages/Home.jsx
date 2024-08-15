import React, { useState, useEffect } from 'react';
import EmployeeDetails from './EmployeeDetails';
import CheckInForm from './CheckInForm';
import CheckOutForm from './CheckOutForm';
import './Home.css';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);

  useEffect(() => {
    fetch('https://json-server-vercel-ashy-nine.vercel.app/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  const openCheckInForm = () => {
    setShowCheckIn(true);
    setShowCheckOut(false); // Ensure Check-Out form is hidden when Check-In form is open
  };

  const openCheckOutForm = () => {
    setShowCheckOut(true);
    setShowCheckIn(false); // Ensure Check-In form is hidden when Check-Out form is open
  };

  const closeCheckInForm = () => setShowCheckIn(false);
  const closeCheckOutForm = () => setShowCheckOut(false);

  const handleCheckInSubmit = () => {
    closeCheckInForm(); // Close the form after submission
  };

  const handleCheckOutSubmit = () => {
    closeCheckOutForm(); // Close the form after submission
  };

  return (
    <div className="home-container">
      <h1>EMPLOYEES HUB</h1>
      <div className="button-container">
        <button className="checkin-button" onClick={openCheckInForm}>
          Check In
        </button>
        <button className="checkout-button" onClick={openCheckOutForm}>
          Check Out
        </button>
      </div>
      <EmployeeDetails users={users} />
      {showCheckIn && (
        <CheckInForm
          onClose={closeCheckInForm}
          onSubmit={handleCheckInSubmit}
        />
      )}
      {showCheckOut && (
        <CheckOutForm
          onClose={closeCheckOutForm}
          onSubmit={handleCheckOutSubmit}
        />
      )}
    </div>
  );
};

export default Home;

