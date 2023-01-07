import React from "react";
import { Container } from "react-bootstrap";
import "./Slider.css";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";


function Slider() {

    return (
        <>
            <div className="slider ">
            <h2>    </h2>
            <Carousel fade variant="dark">
                <Carousel.Item>
                    <img src="https://picsum.photos/id/1067/640/640" />
                    <img src="https://picsum.photos/id/122/640/640" />
                    <img src="https://picsum.photos/id/188/640/640" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src="https://picsum.photos/id/249/640/640" />
                    <img src="https://picsum.photos/id/257/640/640" />
                    <img src="https://picsum.photos/id/1067/640/640" />
                </Carousel.Item>
            </Carousel>
            </div>
        </>
    );
}

export default Slider;