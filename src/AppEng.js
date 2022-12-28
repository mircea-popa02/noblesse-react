import DeliveriesEng from './components/DeliveriesEng';
import React, { useState } from 'react';
import FooterEng from './components/FooterEng';
import CarouselEng from './components/CarouselEng';
import './App.css';
import HeaderEng from './components/HeaderEng';

function App() {
    return (
        <div>
            <HeaderEng sticky="top" />
            <CarouselEng />
            <DeliveriesEng />
            <FooterEng />
        </div>
    );
}

export default App;
