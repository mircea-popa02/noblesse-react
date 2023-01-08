import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { useRef } from 'react';


import './Header.css';

const NavbarInstance = () => {
    const [expanded, setExpanded] = useState(false);
    const navMenu = useRef(null)

    const [openSlide, setopenSlide] = useState(""); 

    const closeOpenMenus = (e)=>{
        if(navMenu.current && expanded && !navMenu.current.contains(e.target)){
          setExpanded(false)
        }
    }

    document.addEventListener('mousedown', closeOpenMenus)

    const handleClickScroll = () => {
        setExpanded(false)
        const element = document.getElementById('contact-form');
        console.log(element);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const goToLandingPage = () => {
        window.location.href = '/';
    };
    return (
        <Navbar expand="lg" sticky="top" style={{ padding: 0 }} className="navbar-main" expanded={expanded} ref={navMenu}>
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}>

                    <svg width="24" height="24" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10H25" stroke="#CAEC7D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2 2H17.4531" stroke="#CAEC7D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2 18H25" stroke="#CAEC7D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </Navbar.Toggle>
                <h1 className="header-mobile d-lg-none d-xl-none" onClick={goToLandingPage}>Noblesse</h1>
                <Navbar.Brand href="/en" style={{ color: "#fff" }} className="d-lg-none d-xl-none">
                    <svg
                        id="logo" width="24" height="24" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3486 27.86C22.7658 27.86 28.7786 21.8472 28.7786 14.43C28.7786 7.01281 22.7658 1 15.3486 1C7.93139 1 1.91858 7.01281 1.91858 14.43C1.91858 21.8472 7.93139 27.86 15.3486 27.86Z" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1.91858 14.43H28.7786" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.3486 1C18.7078 4.67761 20.6168 9.4502 20.7206 14.43C20.6168 19.4098 18.7078 24.1824 15.3486 27.86C11.9893 24.1824 10.0803 19.4098 9.97656 14.43C10.0803 9.4502 11.9893 4.67761 15.3486 1V1Z" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className='lang-switch'>RO</p>

                </Navbar.Brand >
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '200px' }}
                        navbarScroll
                    >
                        <Nav.Link onClick={() => setExpanded(false)} href="/">Buchete</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} href="/coroane">Coroane</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} href="/">Aranjamente</Nav.Link>
                        <NavDropdown title="Diverse" id="navbarScrollingDropdown">
                            <NavDropdown.Item onClick={() => setExpanded(false)} >Hartă</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => setExpanded(false)} href="/coroane">
                                Magazin de coroane
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => setExpanded(false)} href="/contact" id='section-1'>
                                Contactează-ne
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={handleClickScroll}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="/en" style={{ color: "#fff" }} className="d-none d-lg-flex">
                    <svg
                        id="logo" width="24" height="24" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3486 27.86C22.7658 27.86 28.7786 21.8472 28.7786 14.43C28.7786 7.01281 22.7658 1 15.3486 1C7.93139 1 1.91858 7.01281 1.91858 14.43C1.91858 21.8472 7.93139 27.86 15.3486 27.86Z" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1.91858 14.43H28.7786" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.3486 1C18.7078 4.67761 20.6168 9.4502 20.7206 14.43C20.6168 19.4098 18.7078 24.1824 15.3486 27.86C11.9893 24.1824 10.0803 19.4098 9.97656 14.43C10.0803 9.4502 11.9893 4.67761 15.3486 1V1Z" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    RO
                </Navbar.Brand >
            </Container>
        </Navbar>
    );
};

export default NavbarInstance;