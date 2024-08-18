import React from 'react';

function EmployeeData({ employees }) {
  return (
    <div className="employee-data">
      <h2>Full Employee Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee ID</th>
            <th>PF Number</th>
            <th>Designation</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.employeeId}</td>
              <td>{employee.pfNumber}</td>
              <td>{employee.designation}</td>
              <td>{employee.address}</td>
              <td>{employee.email}</td>
              <td>{employee.phoneNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeData;
