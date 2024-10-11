import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './CheckInForm.css';

const CheckInForm = ({ onClose, onSubmit }) => {
  const [employeeId, setEmployeeId] = useState('');
  const [timeOut, setTimeOut] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkOutData = {
      employeeId,
      timeOut,
    };

    fetch('http://localhost:3000/attendance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(checkOutData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Check-in data submitted:', data);
        Swal.fire({
          icon: 'success',
          title: 'Check-in successful!',
          text: 'Your check-in data has been successfully recorded.',
        });
        onSubmit(); // Call onSubmit prop to handle form submission
      })
      .catch(error => {
        console.error('Error submitting check-in data:', error);
        Swal.fire({
          icon: 'error',
          title: 'Failed to submit check-in data.',
          text: 'Please try again later.',
        });
      });
  };

  return (
    <div className="form-popup">
      <div className="form-popup-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Check In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="employeeId">Employee ID</label>
            <input
              type="text"
              id="employeeId"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="timeOut">Time In</label>
            <input
              type="time"
              id="timeOut"
              value={timeOut}
              onChange={(e) => setTimeOut(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CheckInForm;
