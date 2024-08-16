import React, { useEffect, useState } from 'react';
import './History.css';

const History = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    fetch('https://json-server-vercel-ashy-nine.vercel.app/attendance')
      .then(response => response.json())
      .then(data => setAttendanceRecords(data))
      .catch(error => console.error('Error fetching attendance records:', error));
  }, []);

  return (
    <div className="history-container">
      <h2>Attendance History</h2>
      <table className="history-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Check-In Time</th>
            <th>Check-Out Time</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.employeeId}</td>
              <td>{record.timeIn}</td>
              <td>{record.timeOut || 'Not checked out'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
