


// PersonalCabinet.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PersonalCabinet = () => {
  const [doctorData, setDoctorData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/doctor/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDoctorData(response.data);
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    fetchDoctorData();
  }, []);

  const handleLogout = async () => {
    try {
      // Make a request to the backend to handle logout
      await axios.post('http://localhost:5000/api/doctor/logout', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      // Remove the authentication token from localStorage
      localStorage.removeItem('token');

      // Redirect to the login page or any other appropriate location
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  return (
    <div>
      <h2>Welcome to Your Personal Cabinet!</h2>
      {doctorData ? (
        <div>
          <p>Email: {doctorData.email}</p>
          <p>Full Name: {doctorData.fullname}</p>
          <p>Age: {doctorData.age}</p>
          <p>City: {doctorData.city}</p>
          <p>Place of Work: {doctorData.place_of_work}</p>
          <p>Position: {doctorData.position}</p>
          <p>Specialization: {doctorData.specialization}</p>
          <p>Phone: {doctorData.phone}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
  
};

export default PersonalCabinet;
