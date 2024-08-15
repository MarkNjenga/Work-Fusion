import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './CheckOutForm.css';

const CheckOutForm = ({ onClose, onSubmit }) => {
  const [employeeId, setEmployeeId] = useState('');
  const [timeOut, setTimeOut] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const checkOutData = {
      employeeId,
      timeOut,
    };
  
    fetch('https://json-server-vercel-ashy-nine.vercel.app/attendance', {
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
        console.log('Check-out data submitted:', data);
        Swal.fire({
          icon: 'success',
          title: 'Check-out successful!',
          showConfirmButton: false,
          timer: 1500
        });
        onSubmit(); // Call onSubmit prop to handle form submission
      })
      .catch(error => {
        console.error('Error submitting check-out data:', error);
        Swal.fire({
          icon: 'error',
          title: 'Failed to submit check-out data. Please try again later.',
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
            <label htmlFor="timeOut">Time Out</label>
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

export default CheckOutForm;
