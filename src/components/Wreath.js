import React from "react";
import Footer from './Footer';
import Header from './Header';
import Title from './Title';
import Swal from 'sweetalert2';
import { Container } from "react-bootstrap";


import "./Wreath.css";

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
                    Coroanele funerare sunt o modalitate de a exprima respectul și recunoștința față de persoana decedată. Acestea sunt realizate din flori naturale și sunt
                </p>
                <div className="gallery">
                    <img onClick={() => openModal("1.jpg")} src="1.jpg" alt="coroana" />
                    <img onClick={() => openModal("2.jpg")} src="2.jpg" alt="coroana" />
                    <img onClick={() => openModal("3.jpg")} src="3.jpg" alt="coroana" />
                    <img onClick={() => openModal("4.jpg")} src="4.jpg" alt="coroana" />
                    <img onClick={() => openModal("5.jpg")} src="5.jpg" alt="coroana" />
                    <img onClick={() => openModal("6.jpg")} src="6.jpg" alt="coroana" />
                    <img onClick={() => openModal("7.jpg")} src="7.jpg" alt="coroana" />
                    <img onClick={() => openModal("8.jpg")} src="8.jpg" alt="coroana" />
                    <img onClick={() => openModal("9.jpg")} src="9.jpg" alt="coroana" />
                    <img onClick={() => openModal("10.jpg")} src="10.jpg" alt="coroana" />
                    <img onClick={() => openModal("11.jpg")} src="11.jpg" alt="coroana" />

                </div>
            </Container>

            {/* <div class="grid">
                <div class="column">
                    <img src="https://picsum.photos/500/700?random=1-1" alt="" />
                    <img src="https://picsum.photos/500/700?random=1-2" alt="" />
                    <img src="https://picsum.photos/500/700?random=1-3" alt="" />
                    <img src="https://picsum.photos/500/700?random=1-4" alt="" />

                </div>
                <div class="column">
                    <img src="https://picsum.photos/500/700?random=2-1" alt="" />
                    <img src="https://picsum.photos/500/700?random=2-2" alt="" />
                    <img src="https://picsum.photos/500/700?random=2-3" alt="" />
                    <img src="https://picsum.photos/500/700?random=2-4" alt="" />
                    <img src="https://picsum.photos/500/700?random=2-5" alt="" />
                    <img src="https://picsum.photos/500/700?random=2-6" alt="" />
                    <img src="https://picsum.photos/500/700?random=2-7" alt="" />
                </div>
                <div class="column">
                    <img src="https://picsum.photos/500/700?random=3-1" alt="" />
                    <img src="https://picsum.photos/500/700?random=3-2" alt="" />
                    <img src="https://picsum.photos/500/700?random=3-3" alt="" />
                    <img src="https://picsum.photos/500/700?random=3-4" alt="" />
                    <img src="https://picsum.photos/500/700?random=3-5" alt="" />
                    <img src="https://picsum.photos/500/700?random=3-6" alt="" />
                    <img src="https://picsum.photos/500/700?random=3-7" alt="" />
                </div>
                <div class="column">
                    <img src="https://picsum.photos/500/700?random=4-1" alt="" />
                    <img src="https://picsum.photos/500/700?random=4-2" alt="" />
                    <img src="https://picsum.photos/500/700?random=4-3" alt="" />
                    <img src="https://picsum.photos/500/700?random=4-4" alt="" />
                    <img src="https://picsum.photos/500/700?random=4-5" alt="" />
                    <img src="https://picsum.photos/500/700?random=4-6" alt="" />
                    <img src="https://picsum.photos/500/700?random=4-7" alt="" />
                </div>
                <div class="column">
                    <img src="https://picsum.photos/500/700?random=5-1" alt="" />
                    <img src="https://picsum.photos/500/700?random=5-2" alt="" />
                    <img src="https://picsum.photos/500/700?random=5-3" alt="" />
                    <img src="https://picsum.photos/500/700?random=5-4" alt="" />
                </div>
            </div> */}


            <Footer></Footer>
        </div>
    );
}

export default Wreath;