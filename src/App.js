import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import Deliveries from './components/Deliveries';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import './App.css';


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

// const App = () => (
//   <div>
//     <Carousel />
//     <Deliveries />
//     <Footer/>
//   </div>
// );
function App() {

  return (
    <div>
      <Carousel />
      <Deliveries />
      <Footer/>
    </div>
  );
}

export default App;
