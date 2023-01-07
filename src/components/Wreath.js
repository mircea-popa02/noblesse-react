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



const Items = () => {
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
        listAll(storageRef).then((res) => {
            res.items.forEach((storageRef) => {
                getDownloadURL(storageRef).then((url) => {
                    setImages((images) => [...images, url]);
                    
                });

                getMetadata(storageRef).then((metadata) => {
                    setMetaDatas((metaDatas) => [...metaDatas, metadata.name]);
                }
                )
            });
        })
    }, []);


    


    if (itemInfo[0] !== undefined && images.length === metaDatas.length && images.length !== 0) {
        return (
            <div className="gallery">
                {images.map((image, index) => {
                    return (
                        <div className="gallery-item">
                            <img src={image} alt="coroana" />
                            {/* {console.log(index)}
                            {console.log(metaDatas[index])} */}
                            {itemInfo[0].descriptions.map((description) => {
                                return (
                                    <div className="gallery-item-info">
                                        {metaDatas[index] === description.title &&
                                            <div className="d-flex mini-container">
                                                {/* {console.log(description.title + " title " + metaDatas[index]+ " meta ")} */}

                                                {description.desc.map((desc) => {
                                                    return (
                                                        <span>{desc}</span>
                                                    )
                                                }
                                                )}
                                            </div>
                                        }
                                    </div>
                                )
                            })}
                            <a href="google.com">
                                <button className="btn btn-primary">Comandă</button>
                            </a>
                        </div>
                    )
                })
                }
            </div >
        )
    } else {
        return (
            <div>
                <p>loading</p>
            </div>
        )
    }
}





const Wreath = () => {


    function openModal(numberOfImag) {
        Swal.fire({
            title: 'Descriere coroană',
            text: 'Modal with a custom image.',
            imageUrl: numberOfImag,
            // imageWidth: 400,
            imageHeight: 300,
            showCloseButton: true,
            showCancelButton: false,
            showConfirmButton: false,
            imageAlt: 'Descriere coroană',
            html:
                '<a href="https://www.google.com/maps/dir/?api=1&destination=Floraria+Noblesse%2C+Braila">Comandă online</a>'
        })
    }

    return (
        <div>
            <Title></Title>
            <Header></Header>
            <Container className="gallery-container">
                <h2>Coroane funerare</h2>
                <div className="line"></div>
                <p>
                    Coroanele funerare sunt o modalitate de a exprima respectul și recunoștința față de persoana decedată. Acestea sunt realizate din flori naturale dar și din flori artificiale, în funcție de preferințele dumneavoastră.
                </p>

                <Items></Items>
                {/* <div className="gallery"> */}
                {/* <div className="gallery-item">
                        <img onClick={() => openModal("1.jpg")} src={images[0]} alt="coroana" />
                        <div className="gallery-item-info">
                            <div className="d-flex mini-container">
                                <span className="text-center">ieftin</span>
                                <span className="text-center">clasic</span>
                                <span className="text-center">simplu</span>
                                <span className="text-center">elegant</span>
                            </div>
                            <a href="google.com">
                                <button className="btn btn-primary">Comandă</button>
                            </a>
                        </div>
                    </div>
                    <img onClick={() => openModal("2.jpg")} src={images[1]} alt="coroana" /> */}
                {/* <img onClick={() => openModal("3.jpg")} src={images[2]} alt="coroana" />
                    <img onClick={() => openModal("4.jpg")} src={images[3]} alt="coroana" />
                    <img onClick={() => openModal("5.jpg")} src="5.jpg" alt="coroana" />
                    <img onClick={() => openModal("6.jpg")} src="6.jpg" alt="coroana" />
                    <img onClick={() => openModal("7.jpg")} src="7.jpg" alt="coroana" />
                    <img onClick={() => openModal("8.jpg")} src="8.jpg" alt="coroana" />
                    <img onClick={() => openModal("9.jpg")} src="9.jpg" alt="coroana" />
                    <img onClick={() => openModal("10.jpg")} src="10.jpg" alt="coroana" />
                    <img onClick={() => openModal("11.jpg")} src="11.jpg" alt="coroana" /> */}

                {/* </div> */}
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default Wreath;