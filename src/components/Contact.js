import React from "react";
import { Form, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './Contact.css'

const Contact = () => {
    return (
        <Container className="contact">
            <h1>Contactează-ne</h1>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {/* <Form.Label>Adresa ta de e-mail*</Form.Label> */}
                            <Form.Control type="email" placeholder="E-mail*" />
                            <Form.Text className="text-muted">
                                Aceasta este adresa de e-mail unde veți primi un răspuns din partea noastră.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            {/* <Form.Label>Nume</Form.Label> */}
                            <Form.Control className="text-muted" placeholder="Nume" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            {/* <Form.Label>Mesajul tău</Form.Label> */}
                            <Form.Control className="text-muted" placeholder="Prenume" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1d">
                            {/* <Form.Label>Mesajul tău</Form.Label> */}
                            <Form.Control as="textarea" placeholder="Mesajul tău*" rows={5} />
                        </Form.Group>

                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                        <Button variant="primary" type="submit">
                            Trimite
                        </Button>
                    </Form>
                </Col>
                {/* <Col>
                    <h2>Ceva imagine</h2>
                    <img src="./images/flower.jpg" alt="flower" />
                </Col> */}
            </Row>

        </Container>
    );
}

export default Contact;