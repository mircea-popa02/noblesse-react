import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Deliveries from './components/Deliveries';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <Router>
    <div className='title'>
      <h1 className="header">Noblesse</h1>
    </div>
    <Header sticky="top" />
    
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    
  </Router>,

  document.getElementById('root')
);
