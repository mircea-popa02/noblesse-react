import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import Wreath from './components/Wreath';
import Contact from './components/Contact';
import Title from './components/Title';
import Header from './components/Header';
import Footer from './components/Footer';
import Map from './components/Map';

const root = ReactDOM.createRoot(document.getElementById('root'));

const location = {
  address: 'Noblesse Brăila',
  lat: 45.257559,
  lng: 27.960650
}
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/coroane" element={<Wreath />} />
      <Route path="/harta" element={[
        <Title />,
        <Header />,
        <br></br>,
        <Map location={location} zoomLevel={17} />,
        // <Footer />
      ]} />
      <Route path="/contact" element={[
        <Title />,
        <Header />,
        <br></br>,
        <Contact />,
        <Footer />
      ]} />

      
    </Routes>
  </Router>
);
