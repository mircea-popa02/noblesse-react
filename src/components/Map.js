import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'
import { Button, Col } from "react-bootstrap";
import { Row } from 'react-bootstrap';


const LocationPin = ({ text }) => {
    const goToLink = () => {
        window.open("https://www.google.com/maps/dir/?api=1&destination=Floraria+Noblesse%2C+Braila", "_blank")

    }
    return (
        <div className="pin" onClick={goToLink}>
            <svg width="24" height="24" viewBox="0 0 29 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.86 14.43C27.86 24.8756 14.43 33.8289 14.43 33.8289C14.43 33.8289 1 24.8756 1 14.43C1 10.8681 2.41494 7.45217 4.93356 4.93356C7.45217 2.41494 10.8681 1 14.43 1C17.9919 1 21.4078 2.41494 23.9264 4.93356C26.4451 7.45217 27.86 10.8681 27.86 14.43Z" stroke="#526336" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.43 18.9066C16.9024 18.9066 18.9067 16.9024 18.9067 14.43C18.9067 11.9576 16.9024 9.95331 14.43 9.95331C11.9576 9.95331 9.95334 11.9576 9.95334 14.43C9.95334 16.9024 11.9576 18.9066 14.43 18.9066Z" stroke="#526336" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p className="pin-text">{text}</p>
        </div>
    )
}

const Map = ({ location, zoomLevel, language }) => {
    const defaultMapOptions = {
        rotateControl: false,
        disableDefaultUI: true
    };

    const goToLink = () => {
        window.open("https://www.google.com/maps/dir/?api=1&destination=Floraria+Noblesse%2C+Braila", "_blank")
    }
    return (
        <div className='map-wrapper' id='map'>
            <div className="map-container">
                <div className='map-header'>
                    <h2>{language === "RO" ? "Unde ne găsești" : "Where to find us"}</h2>
                    <div className="line"></div>
                    <p>
                        {language === "RO" ? "Vino să ne vizitezi magazinul pentru a găsi ceea ce ai nevoie. Te așteptăm!" : "Come visit our store to find what you need. We are waiting for you!"}
                    </p>
                </div>
                <div className="google-map">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyCysPPf0Rrw2hUmKoF20mEaPQniOTtimPI' }}
                        defaultCenter={location}
                        defaultZoom={zoomLevel}
                        options={defaultMapOptions}
                    >
                        <LocationPin
                            lat={location.lat}
                            lng={location.lng}
                            text={location.address}
                            key="key"
                        />
                    </GoogleMapReact>

                </div>
                <div className='d-flex justify-content-center align-items-center flex-column address-container'>
                    <p>Brăila, Piața Dorobanți, nr. 1, bloc 20B</p>
                    <Button className="btn-green" onClick={goToLink}>
                        {language === "RO" ? "Deschide" : "Open map"}
                    </Button>
                    <br></br>
                </div>
            </div>
        </div>
    )
}

export default Map