import React from 'react';

function Report({ employees = [], attendance = {} }) {
  // Calculate total employees, present, and absent
  const totalEmployees = employees.length;
  const presentCount = employees.filter(employee => attendance[employee.id] === 'present').length;
  const absentCount = totalEmployees - presentCount;

  return (
    <div className="report">
      <h2>Reports</h2>

      <div className="report-summary">
        <p><strong>Total Employees:</strong> {totalEmployees}</p>
        <p><strong>Present:</strong> {presentCount}</p>
        <p><strong>Absent:</strong> {absentCount}</p>
      </div>

      <div className="report-details">
        <h3>Employee Status</h3>
        <ul>
          {employees.map(employee => (
            <li key={employee.id}>
              {employee.name} - {attendance[employee.id] === 'present' ? 'Present' : 'Absent'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Report;
