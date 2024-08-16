import React, { useState } from 'react';
import './AdminPage.css';

function AttendanceRecord({ employees }) {
  // Initialize attendance state for each employee (default: absent)
  const [attendance, setAttendance] = useState(
    employees.reduce((acc, employee) => {
      if (employee && employee.id !== undefined) {
        acc[employee.id] = 'absent';
      }
      return acc;
    }, {})
  );


  //Handle attendance toggle
  const toggleAttendance = (id) => {
    if (attendance[id] !== undefined) {
      setAttendance({
        ...attendance,
        [id]: attendance[id] === 'present' ? 'absent' : 'present'
      });
    } else {
      console.error(`Employee with id ${id} not found in attendance state.`);
    }
  };


  // Function to post attendance record
  const postAttendanceRecord = () => {
    console.log('Posting Attendance Record:', attendance);
  
    // Assume your backend expects a POST request with the attendance data
    fetch('https://json-server-vercel-ashy-nine.vercel.app/attendance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(attendance),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Optionally, update the state if needed based on the response
      })
      .catch(error => {
        console.error('Error posting attendance data:', error);
      });
  };


  return (
    <div className="attendance-record">
      <h2>Attendance Records</h2>
      {employees.length === 0 ? (
        <p>No employees available for attendance.</p>
      ) : (
        <>
          <ul>
            {employees.map((employee) =>
              employee && employee.id && employee.name ? (
                <li key={employee.id}>
                  {employee.name} - {attendance[employee.id]}
                  <button
                    onClick={() => toggleAttendance(employee.id)}
                    className={`attendance-btn ${
                      attendance[employee.id] === 'present' ? 'present' : 'absent'
                    }`}
                  >
                    Mark as {attendance[employee.id] === 'present' ? 'Absent' : 'Present'}
                  </button>
                </li>
              ) : (
                <li key={employee?.id || Math.random()}>Invalid employee data</li>
              )
            )}
          </ul>
          <button onClick={postAttendanceRecord} className="post-attendance-btn">
            Post Attendance Record
          </button>
        </>
      )}
    </div>
  );
}


export default AttendanceRecord;
