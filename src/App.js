import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import Deliveries from './components/Deliveries';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import './App.css';
import Header from './components/Header';
import InfoBar from './components/InfoBar';
import Contact from './components/Contact';
import Map from './components/Map';


const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(false);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const location = {
  address: 'Calea Călărașilor, Brăila 810253',
  lat: 45.257559,
  lng: 27.960914
}

function App() {
  return (
    <div>
      <Header sticky="top" />
      <Carousel />
      <InfoBar />
      <Deliveries />
      <Contact />
      <Map location={location} zoomLevel={17} />
      <Footer/>
    </div>
  );
}

export default App;
