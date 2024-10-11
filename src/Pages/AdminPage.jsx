// AdminPage.jsx
import React, { useState, useEffect } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import EmployeeData from './EmployeeData';
import AttendanceRecord from './AttendanceRecord';
import Report from './Report';
import './AdminPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboardList, faFileAlt, faList, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminPage() {
  const [employees, setEmployees] = useState([]);
  const [showComponent, setShowComponent] = useState('data');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      toast.error('Error fetching employee data');
      console.error('Error fetching employee data:', error);
    }
  };

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, { ...newEmployee, id: Date.now() }]);
    toast.success('Employee added successfully!');
  };

  const removeEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
    toast.success('Employee removed successfully!');
  };

  return (
    <div className="admin-page-container">
      <div className="sidebar">
        <ul>
          <li onClick={() => setShowComponent('data')}>
            <FontAwesomeIcon icon={faClipboardList} /> Employee Data
          </li>
          <li onClick={() => setShowComponent('form')}>
            <FontAwesomeIcon icon={faFileSignature} /> Employee Registration
          </li>
          <li onClick={() => setShowComponent('list')}>
            <FontAwesomeIcon icon={faList} /> Employee List
          </li>
          <li onClick={() => setShowComponent('attendance')}>
            <FontAwesomeIcon icon={faUser} /> Attendance Records
          </li>
          <li onClick={() => setShowComponent('report')}>
            <FontAwesomeIcon icon={faFileAlt} /> Employee Reports
          </li>
        </ul>
      </div>

      <div className="content">
        {showComponent === 'data' && <EmployeeData employees={employees} />}
        {showComponent === 'form' && <EmployeeForm addEmployee={addEmployee} />}
        {showComponent === 'list' && <EmployeeList employees={employees} removeEmployee={removeEmployee} />}
        {showComponent === 'attendance' && <AttendanceRecord employees={employees} />}
        {showComponent === 'report' && <Report employees={employees} />}
      </div>

      <ToastContainer />
    </div>
  );
}

export default AdminPage;
