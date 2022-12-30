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

function App() {
  return (
    <div>
      <Header sticky="top" />
      <Carousel />
      <InfoBar />
      <Deliveries />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
