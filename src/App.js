import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Deliveries from './components/Deliveries';


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


const App = () => (
  <div>
    <Carousel />
    <Deliveries />
  </div>


  //   <ExampleToast>
  //     We now have Toasts
  //     <span role="img" aria-label="tada">
  //       🎉
  //     </span>
  //   </ExampleToast>

);

export default App;
