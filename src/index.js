import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // Import Provider
import store from './redux/store'; // Import your Redux store
import Login from './login';
import SignUp from './signup';
import Homepage from './homepage';
import Donate from './components/donate';
import EligibilityChecker from './components/eligibility-checker';
import DonationHistory from './components/donation-history';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your app with Provider */}
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/eligibility-checker" element={<EligibilityChecker />} />
          <Route path="/donation-history" element={<DonationHistory/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();