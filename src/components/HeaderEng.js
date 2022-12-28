import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import './Header.css';

const NavbarInstance = () => {
    return (
        <Navbar expand="lg" sticky="top" style={{padding: 0}}>
            <Container fluid>
                <Navbar.Brand href="/">
                    <svg id="logo"
                        width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 19.9091C17.2635 19.9091 19.9091 17.2635 19.9091 14C19.9091 10.7365 17.2635 8.09091 14 8.09091C10.7365 8.09091 8.09094 10.7365 8.09094 14C8.09094 17.2635 10.7365 19.9091 14 19.9091Z" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 1V3.36364" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 24.6364V27" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.80548 4.80545L6.48366 6.48363" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.5164 21.5163L23.1945 23.1945" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 14H3.36364" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M24.6364 14H27" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.80548 23.1945L6.48366 21.5163" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.5164 6.48363L23.1945 4.80545" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '200px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/ro">Bouquets</Nav.Link>
                        <Nav.Link href="/ro">Funeral Wreaths</Nav.Link>
                        <Nav.Link href="/ro">Floral Arrangements</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <NavDropdown title="Others" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="action3">Crama Casa Panciu</NavDropdown.Item>
                            <NavDropdown.Item href="action4">
                                Map
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="action5">
                                Contact us
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Navbar.Brand href="/" style={{color: "#fff"}}>
                        <svg
                            id="logo" width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3486 27.86C22.7658 27.86 28.7786 21.8472 28.7786 14.43C28.7786 7.01281 22.7658 1 15.3486 1C7.93139 1 1.91858 7.01281 1.91858 14.43C1.91858 21.8472 7.93139 27.86 15.3486 27.86Z" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.91858 14.43H28.7786" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.3486 1C18.7078 4.67761 20.6168 9.4502 20.7206 14.43C20.6168 19.4098 18.7078 24.1824 15.3486 27.86C11.9893 24.1824 10.0803 19.4098 9.97656 14.43C10.0803 9.4502 11.9893 4.67761 15.3486 1V1Z" stroke="#CAEC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        RO/EN
                    </Navbar.Brand >
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarInstance;