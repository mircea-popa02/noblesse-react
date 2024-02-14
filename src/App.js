import React, { useEffect, useState } from 'react';
import Deliveries from './components/Deliveries';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import ScrollCards from './components/ScrollCards';
import Header from './components/Header';
import Contact from './components/Contact';
import Map from './components/Map';
import Title from './components/Title';
import Program from './components/Program';
import { useRef } from "react";
import './App.css';


const location = {
  address: 'Noblesse Brăila',
  lat: 45.257559,
  lng: 27.960650
}

function App() {
  const ref = useRef(null);

  const [language, setLanguage] = useState("");

  useEffect(() => {
    const data = localStorage.getItem('language');
    if (data) {
      setLanguage(data);
    }
  }, [])

  const passLanguage = (language) => {
    setLanguage(language);
    localStorage.setItem('language', language);
  }

  return (
    <div ref={ref}>
      <Title />
      <Header sticky="top" passLanguage={passLanguage} />
      <Carousel language={language} />
      <Deliveries language={language} />
      <ScrollCards language={language} />
      <Program language={language} />
      <Map location={location} zoomLevel={16} language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;

