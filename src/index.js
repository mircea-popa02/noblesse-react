import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import Wreath from './components/Wreath';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/coroane/" element={<Wreath />} />    
    </Routes>
  </Router>
);
