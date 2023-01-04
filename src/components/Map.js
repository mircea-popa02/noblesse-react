import React from 'react'
import GoogleMapReact from 'google-map-react'
import Swal from 'sweetalert2';
import './Map.css'

const LocationPin = ({ text }) => {
    const goToLink = () => {
        // Swal.fire({
        //     title: 'Custom image',
        //     text: 'Modal with a custom image.',
        //     imageUrl: 'https://unsplash.it/400/200',
        //     imageWidth: 400,
        //     imageHeight: 200,
        //     imageAlt: 'Custom image',
        //     html:
        //         '<a href="https://www.google.com/maps/dir/?api=1&destination=Floraria+Noblesse%2C+Braila">Deschide cu Google Maps</a>'
        // })
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


const Map = ({ location, zoomLevel }) => {
    const defaultMapOptions = {
        rotateControl: false,
        disableDefaultUI: true
    };
    const goToLink = () => {
        window.open("https://www.google.com/maps/dir/?api=1&destination=Floraria+Noblesse%2C+Braila", "_blank")
    }
    return (
        <div className="map">
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
            <p>Brăila, Piața Dorobanți, nr. 1, bloc 20B</p>
            <button className="btn btn-primary" onClick={goToLink}>
                Deschide
                {/* <svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 1L11.8 14.2" stroke="#CAEC7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M25 1L16.6 25L11.8 14.2L1 9.4L25 1Z" stroke="#CAEC7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg> */}
            </button>
        </div>
    )
}

export default Map