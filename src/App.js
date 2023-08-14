import React, { useEffect } from 'react';
import Deliveries from './components/Deliveries';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import ScrollCards from './components/ScrollCards';
import Header from './components/Header';
import InfoBar from './components/InfoBar';
import Contact from './components/Contact';
import Map from './components/Map';
import Title from './components/Title';
import { useRef } from "react";
import InfoBarMobile from './components/InfoBarMobile';
import './App.css';


const location = {
  address: 'Noblesse Brăila',
  lat: 45.257559,
  lng: 27.960650
}

function App() {
  const ref = useRef(null);

  const [language, setLanguage] = React.useState("RO");

  const passLanguage = (language) => {
    setLanguage(language);
    console.log(language);
  }

  return (
    <div ref={ref}>
      <Title />
      <Header sticky="top" passLanguage={passLanguage} />
      <Carousel language={language} />
      <Deliveries language={language} />
      {/* <InfoBar language={language} /> */}
      {/* <ScrollCards language={language} /> */}
      <Contact language={language} />
      <Map location={location} zoomLevel={17} language={language} />
      <Footer />
    </div>
  );
}

export default App;

