import { useState, useEffect } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import EmployeeData from './EmployeeData';
import AttendanceRecord from './AttendanceRecord';
import Report from './Report';

function Control() {
  const [employees, setEmployees] = useState([]);
  const [showFullData, setShowFullData] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);
  const [showReport, setShowReport] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('https://json-server-vercel-ashy-nine.vercel.app/users');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, { ...newEmployee, id: Date.now() }]);
  };

  const removeEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  return (
    <div className="admin-page">
      <h1>Admin Page - Employee Management</h1>

      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} removeEmployee={removeEmployee} />

      <button onClick={() => setShowFullData(!showFullData)} className="toggle-data-btn">
        {showFullData ? 'Hide Full Data' : 'Show Full Data'}
      </button>
      {showFullData && <EmployeeData employees={employees} />}

      <button onClick={() => setShowAttendance(!showAttendance)} className="toggle-data-btn">
        {showAttendance ? 'Hide Attendance Records' : 'Show Attendance Records'}
      </button>
      {showAttendance && <AttendanceRecord employees={employees} />}

      <button onClick={() => setShowReport(!showReport)} className="toggle-data-btn">
        {showReport ? 'Hide Reports' : 'Show Reports'}
      </button>
      {showReport && <Report employees={employees} />}
    </div>
  );
}

export default Control;
