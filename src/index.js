import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppEng from './AppEng';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <div className='title'>
      <h1 className="header d-none d-lg-block">Noblesse</h1>
    </div>
    
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/en" element={<AppEng />} />
    </Routes>

  </Router>
);
