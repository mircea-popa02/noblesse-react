import React from 'react';
import Deliveries from './components/Deliveries';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import ScrollCards from './components/ScrollCards';
import './App.css';
import Header from './components/Header';
import InfoBar from './components/InfoBar';
import Contact from './components/Contact';
import Map from './components/Map';
import Title from './components/Title';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import InfoBarMobile from './components/InfoBarMobile';




// const ExampleToast = ({ children }) => {
//   const [show, toggleShow] = useState(false);

//   return (
//     <>
//       {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
//       <Toast show={show} onClose={() => toggleShow(false)}>
//         <Toast.Header>
//           <strong className="mr-auto">React-Bootstrap</strong>
//         </Toast.Header>
//         <Toast.Body>{children}</Toast.Body>
//       </Toast>
//     </>
//   );
// };
const location = {
  address: 'Noblesse Brăila',
  lat: 45.257559,
  lng: 27.960650
}

function App() {
  

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element.querySelector(".map"),
      {
        opacity: 0,
        scale: 0.7,
        y: -100
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".deliveries"),
          start: "top top",
          end: "bottom center",
          scrub: true
        }
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".contact"),
      {
        opacity: 0,
        scale: 0.7,
        y: -100
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".carousel"),
          start: "top top",
          end: "bottom bottom",
          scrub: true
        }
      }
    );
  }, []);


  return (
    
    <div ref={ref}>
      <Title />
      <Header sticky="top" />
      <Carousel />
      <InfoBar />
      <InfoBarMobile />
      <Deliveries />
      {/* <Slider /> */}
      <ScrollCards />
      <Contact />
      <Map location={location} zoomLevel={17} />
      <Footer />
    </div>

    
  );
}

export default App;

