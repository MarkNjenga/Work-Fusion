import React from 'react';
import './AdminPage.css';


function EmployeeList({ employees, removeEmployee }) {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>.</p>
      ) : (
        <ul>
          {employees.map(employee => (
            <li key={employee.id}>
              {employee.name} - ID: {employee.employeeId} - PF: {employee.pfNumber} - Designation: {employee.designation} -Address: {employee.address} - Email: {employee.email} - PhoneNo: {employee.phoneNo}
              <button onClick={() => removeEmployee(employee.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default EmployeeList;


