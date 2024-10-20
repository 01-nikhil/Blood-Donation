
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Login from './login';
import SignUp from './signup';
import Homepage from './homepage';
import Donate from './donate';

const root = ReactDOM.createRoot(document.getElementById('root'));   

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode> 

);

reportWebVitals();