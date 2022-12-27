import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './Carousel.css'


function CarouselFadeExample() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="slide1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption >
                    <h3>Aranajmente florare pentru </h3>
                    <h3> orice ocazie</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="slide2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Nu știi ce să îi cumperi?</h3>
                    <p>Un buchet de flori va impresiona întotdeauna</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="slide3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Pregătim cadoul perfect</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;