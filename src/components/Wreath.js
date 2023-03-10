import React from "react";
import Footer from './Footer';
import Header from './Header';
import Title from './Title';
import Swal from 'sweetalert2';
import { Container } from "react-bootstrap";
import { storage } from '../firebase';
import { ref } from "firebase/storage";
import { useEffect, useState } from 'react';
import { listAll, getDownloadURL } from 'firebase/storage';
import { getMetadata } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import "./Wreath.css";

// render footer after Items is loaded
let isLoaded = false;

const Items = () => {
    // if Items is not loaded do not render Footer


    const [itemInfo, setItemInfo] = useState([]);

    const fetchPost = async () => {
        await getDocs(collection(db, "wreaths"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setItemInfo(newData);
            })
    }

    useEffect(() => {
        fetchPost();
    }, [])

    const [images, setImages] = useState([]);
    const storageRef = ref(storage, "wreaths/");
    const [metaDatas, setMetaDatas] = useState([]);

    useEffect(() => {
        listAll(storageRef).then(async function (result) {
            result.items.forEach(async function (imageRef) {

                let [metaPoint, img] = await Promise.all([getMetadata(imageRef), getDownloadURL(imageRef)])
                setMetaDatas((metaDatas) => [...metaDatas, metaPoint.name]);
                setImages((images) => [...images, img]);

            });
        }).catch(function (error) {
            // Uh-oh, an error occurred!
        });
    }, []);

    const openModal = (numberOfImag) => {
        Swal.fire({
            title: numberOfImag,
            text: numberOfImag,
            // imageUrl: numberOfImag,
            // imageWidth: 400,
            imageHeight: 300,
            showCloseButton: true,
            showCancelButton: false,
            showConfirmButton: false,
            imageAlt: 'Descriere coroan??',
            html:
                '<a href="https://www.google.com/maps/dir/?api=1&destination=Floraria+Noblesse%2C+Braila">Comand?? online</a>'
        })
    }

    if (itemInfo[0] !== undefined && images.length === metaDatas.length && images.length !== 0) {
        isLoaded = true;
        return (
            <>
            <div className="gallery">
                {images.map((image, index) => {
                    return (
                        <div className="gallery-item">
                            <img src={image} alt="coroana" />

                            {itemInfo[0].descriptions.map((description) => {
                                return (
                                    <>
                                        {metaDatas[index] === description.title &&
                                            <>
                                                <div className="gallery-item-info">
                                                    <div className="d-flex mini-container">
                                                        <h6>{description.name}</h6>
                                                        {description.desc.map((desc) => {
                                                            return (
                                                                <span>{desc}</span>
                                                            )
                                                        }
                                                        )}
                                                    </div>
                                                </div>
                                                <a href={description.link}>
                                                    <button className="btn btn-primary">Comand??</button>
                                                </a>
                                            </>
                                        }
                                    </>
                                )
                            })}

                        </div>
                    )
                })
                }
            </div >
            </>
        )
    } else {
        return (
            <div className="loading-screen">
                <p>Loading...</p>
            </div>
        )
    }
}

const Wreath = () => {

    return (
        <div>
            <Title></Title>
            <Header></Header>
            <Container className="gallery-container">
                <h2>Coroane funerare</h2>
                <div className="line"></div>
                <p>
                    Coroanele funerare sunt o modalitate de a exprima respectul ??i recuno??tin??a fa???? de persoana decedat??. Acestea sunt realizate din flori naturale dar ??i din flori artificiale, ??n func??ie de preferin??ele dumneavoastr??.
                </p>

                <Items></Items>
            </Container>
            
            <Footer></Footer>
            
        </div>
    );
}

export default Wreath;  