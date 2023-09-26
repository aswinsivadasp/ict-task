import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Corrected import
import Login from './components/Login';
import RegistrationForm from './components/RegistrationForm';
import React from 'react';
import Home from './components/Home';
import ForgotPswd from './components/ForgotPswd';
import AddImage from './AddImage';
import ViewImage from './components/ViewImage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/forgot-pswd" element={<ForgotPswd />} />
          <Route path="/addImage" element={<AddImage />} />
          <Route path="/view-image" element={<ViewImage/>} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
