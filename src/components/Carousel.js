import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './Carousel.css'
import { storage } from '../firebase';
import { ref } from "firebase/storage";
import { useEffect, useState } from 'react';
import { listAll, getDownloadURL } from 'firebase/storage';
import { getMetadata } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';

function CarouselFadeExample() {
    const [images, setImages] = useState([]);
    const storageRef = ref(storage, "images/");

    useEffect(() => {
        listAll(storageRef).then((res) => {
            res.items.forEach((storageRef) => {
                getDownloadURL(storageRef).then((url) => {
                    setImages((images) => [...images, url]);
                });
            });
        })
    }, []);


    for (let i = 0; i < images.length; i++) {
        // console.log(images[i]);
        let imageRef = ref(storage, images[i]);
        getMetadata(imageRef).then((metadata) => {
            // Metadata now contains the metadata for 'images/forest.jpg'
            // console.log(metadata);
        }
        )

    }



    const [todos, setTodos] = useState([]);

    const fetchPost = async () => {

        await getDocs(collection(db, "descriptions"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setTodos(newData);
                console.log(todos, newData);
            })

    }

    useEffect(() => {
        fetchPost();
    }, [])

    console.log(todos);

    // // Get metadata properties
    // getMetadata(storageRef)
    //     .then((metadata) => {
    //         // Metadata now contains the metadata for 'images/forest.jpg'
    //         console.log(metadata);
    //     })
    //     .catch((error) => {
    //         // Uh-oh, an error occurred!
    //         console.log(error);
    //     });


    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={images[0]}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Aranajmente florare pentru </h3>
                    <h3> orice ocazie</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={images[1]}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Nu ??tii ce s?? ??i cumperi?</h3>
                    <p>Un buchet de flori va impresiona ??ntotdeauna</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={images[2]}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Preg??tim cadoul perfect</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;