import React from 'react';
import { Col, Container } from 'react-bootstrap';
import './InfoBar.css';
import { Row } from 'react-bootstrap';


const info = () => {
    return (
        <Container className="infobar d-lg-none d-xl-none">
            <div className='container d-grid'>
                <span className="col mobile d-lg-none d-xl-none">
                    L-V 9:00-20:00
                </span>
                <span className='col mobile d-lg-none d-xl-none'>
                    S-D 9:00-16:00
                </span>
                <span className='col mobile d-lg-none d-xl-none'>
                    +40 722 222 222
                </span>
                <span className='col mobile d-lg-none d-xl-none'>
                    email@email.com
                </span>
            </div>
        </Container>
    );
}

export default info;

