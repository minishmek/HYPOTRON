// RegistrationComponent.js
import React, { useState } from 'react';
import axios from 'axios';
import '../css/AuthForm.css';

const RegistrationComponent = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullname: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/doctor/registration', formData);
      // Handle success, store the token, redirect to profile, etc.
    } catch (error) {
      // Handle error.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <input
        type="text"
        name="fullname"
        value={formData.fullname}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationComponent;
