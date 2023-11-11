// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationComponent from './components/RegistrationComponent';
import LoginComponent from './components/LoginComponent';
import PersonalCabinet from './components/PersonalCabinet';
import Home from './pages/Home'; // Import your Home component



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Define the route for the root URL */}
        <Route path="/register" element={<RegistrationComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/personal-cabinet" element={<PersonalCabinet />} />
      </Routes>
    </Router>
  );
};

export default App;
