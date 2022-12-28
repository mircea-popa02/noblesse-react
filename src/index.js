import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <div className='title'>
      <h1 className="header">Noblesse</h1>
    </div>
    <Header sticky="top" />

    <Routes>
      <Route path="/" element={<App />} />
    </Routes>

  </Router>
);
