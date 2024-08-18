
import { useState } from 'react';

function EmployeeForm({ addEmployee }) {
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [pfNumber, setPfNumber] = useState('');
  const [designation, setDesignation] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee({ name, employeeId, pfNumber, designation, address, email, phoneNo });
    // Clear form fields
    setName('');
    setEmployeeId('');
    setPfNumber('');
    setDesignation('');
    setAddress('');
    setEmail('');
    setPhoneNo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Employee</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Employee ID" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} required />
      <input type="text" placeholder="PF Number" value={pfNumber} onChange={(e) => setPfNumber(e.target.value)} required />
      <input type="text" placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
      <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" placeholder="PhoneNo" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} required />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
