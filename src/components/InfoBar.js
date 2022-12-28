import React from 'react';
import { Col, Container } from 'react-bootstrap';
import './InfoBar.css';
import { Row } from 'react-bootstrap';


const info = () => {
    return (
        <Container className='infobar'>
            <Row>
                <Col className='col-2'>
                    Livrare rapidă
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15L21 8L12 1V15Z" stroke="#2c2f2580" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1 15L10 8L1 1V15Z" stroke="#2c2f2580" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </Col>
                <Col className='col-2'>
                    Plăți securizate
                    <svg width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 26C11 26 21 21 21 13.5V4.75L11 1L1 4.75V13.5C1 21 11 26 11 26Z" stroke="#2c2f2580" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </Col>
                <Col className='col-2'>
                    Felicitare inclusă
                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 1H19C20.1 1 21 1.9 21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3C1 1.9 1.9 1 3 1Z" stroke="#2c2f2580" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21 3L11 10L1 3" stroke="#2c2f2580" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </Col>
                <Col className='col-3'>
                    Peste 20 de ani de experiență
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 1L7.25 14.75L1 8.5" stroke="#2c2f2580" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </Col>
            </Row>
        </Container>
    );
}

export default info;

