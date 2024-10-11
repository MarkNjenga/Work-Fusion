import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginRegister = ({ onLoginSuccess }) => {
  const [formType, setFormType] = useState('login'); // 'login' or 'register'
  const [formValues, setFormValues] = useState({ name: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formType === 'register') {
      try {
        const response = await fetch('hhttp://localhost:3000/Register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formValues),
        });

        if (response.ok) {
          toast.success('Registration successful!');
          setFormValues({ name: '', password: '' });
          setFormType('login');
        } else {
          toast.error('Registration failed.');
        }
      } catch (error) {
        toast.error('An error occurred.');
      }
    } else {
      try { 
        const response = await fetch('http://localhost:3000/Register');
        const users = await response.json();
        const user = users.find(
          (u) => u.name === formValues.name && u.password === formValues.password
        );

        if (user) {
          toast.success('Login successful!');
          onLoginSuccess();  // Function to handle successful login
        } else {
          toast.error('Invalid credentials.');
        }
      } catch (error) {
        toast.error('An error occurred.');
      }
    }
  };

  return (
    <div className="login-register-container">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h2>{formType === 'login' ? 'Login' : 'Register'}</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formValues.name}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {formType === 'login' ? 'Login' : 'Register'}
        </button>
        <button type="button" onClick={() => setFormType(formType === 'login' ? 'register' : 'login')}>
          {formType === 'login' ? 'Need an account? Register' : 'Have an account? Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginRegister;
