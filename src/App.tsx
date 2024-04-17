import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from  './Components/Login';
import Register from './Components/Register';
import Home from './Components/HomePage';

function App() {

  const [loading,setloading] = useState(false);

  const Logout = () => {
    setloading(true);
    console.log("logging out");
    sessionStorage.clear();
    window.location.href = "/Login";
    setloading(false);
  return(
    <>
      {/* {loading && <LoadingScreen/>} */}
    </>
  )
  }


  return (
      <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Navigate to="/Login" replace />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Logout' element={<Logout/>} />
      </Routes>
    </div>
  );
}

export default App;
