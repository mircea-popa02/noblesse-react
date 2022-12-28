import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './Carousel.css'
import { storage } from '../firebase';
import { ref } from "firebase/storage";
import { useEffect, useState } from 'react';
import { listAll, getDownloadURL } from 'firebase/storage';

function CarouselFadeExample() {
    const [images, setImages] = useState([]);
    const storageRef = ref(storage, "images/");

    useEffect(() => {
        console.log("here");
        listAll(storageRef).then((res) => {
            console.log("here");
            console.log(res);
            res.items.forEach((storageRef) => {
                getDownloadURL(storageRef).then((url) => {
                    setImages((images) => [...images, url]);
                });
            });
        })
    }, []);

    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={images[1]}
                    alt="First slide"
                />
                <Carousel.Caption >
                    <h3>Floral arrangaments for every occasion</h3>
                    <p>Some english text</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={images[0]}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Don't know what to get?</h3>
                    <p>A bouquet of flower will always impress</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={images[2]}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>We are delivering the perfect present</h3>
                    <p>
                        Some english text
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;