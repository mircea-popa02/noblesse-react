import React from 'react';
import { Col, Container } from 'react-bootstrap';
import './Deliveries.css';
import { Row } from 'react-bootstrap';

const deliveries = () => {
    return (
            <Col className='deliveries'>
                <Row className='card'>
                    <h2>Livrări de flori</h2>
                    <p>
                        Brăila
                        <svg width="20" height="35" viewBox="0 0 29 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.86 14.43C27.86 24.8756 14.43 33.8289 14.43 33.8289C14.43 33.8289 1 24.8756 1 14.43C1 10.8681 2.41494 7.45217 4.93356 4.93356C7.45217 2.41494 10.8681 1 14.43 1C17.9919 1 21.4078 2.41494 23.9264 4.93356C26.4451 7.45217 27.86 10.8681 27.86 14.43Z" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.43 18.9066C16.9024 18.9066 18.9067 16.9024 18.9067 14.43C18.9067 11.9576 16.9024 9.95331 14.43 9.95331C11.9576 9.95331 9.95334 11.9576 9.95334 14.43C9.95334 16.9024 11.9576 18.9066 14.43 18.9066Z" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </p>
                    <button>
                        <a href="https://florariebraila.ro/">Cumpără</a>
                    </button>
                </Row>
                <Row className="pic d-none d-lg-block">
                    <img src="pic3.jpg" alt="delivery" />
                </Row>
            </Col>
    )
}

export default deliveries;