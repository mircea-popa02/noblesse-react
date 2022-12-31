// import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "semantic-ui-css/semantic.min.css";
import './Contact.css'
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import React, { useRef } from 'react';


const Contact = () => {
    const SERVICE_ID = "service_zf4a1jv";
    const TEMPLATE_ID = "template_0yyo3hd";
    const USER_ID = "YAmXjPUJ52n0jJC4z";

    // const form = useRef();


    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     console.log(form);
    //     console.log(form.current);
    //     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, "YAmXjPUJ52n0jJC4z")
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // };

    // return (
    //     <Container className="contact">
    //         <form ref={form} onSubmit={sendEmail}>
    //             <label>Name</label>
    //             <input type="text" name="user_name" />
    //             <label>Email</label>
    //             <input type="email" name="user_email" />
    //             <label>Message</label>
    //             <textarea name="message" />
    //             {/* <input type="submit" value="Send" /> */}
    //             <div class="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div>
    //             <br />
    //             <input type="submit" value="Submit"></input>
    //         </form>
    //     </Container>
    // );

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        console.log(e);
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, "YAmXjPUJ52n0jJC4z")
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Mesajul a fost trimis cu succes',
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops... Ceva nu a mers bine.',
                    text: error.text,
                })
            });
        e.target.reset()
    };
    return (
        <Container className="contact">
            <h1>Contactează-ne</h1>
            <Form onSubmit={handleOnSubmit} className="d-flex">
                <Form.Field
                    id='form-input-control-email'
                    control={Input}
                    label='Email'
                    name='user_email'
                    placeholder='Email…'
                    required
                    icon='mail'
                    iconPosition='left'
                />
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    label='Nume'
                    name='user_name'
                    placeholder='Nume…'
                    required
                    icon='user circle'
                    iconPosition='left'
                />
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Mesajul tău'
                    name='message'
                    placeholder='Mesaj…'
                    required
                />
                <div className="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div>
                <Button type='submit'>Trimite</Button>
            </Form>
        </Container>
    );


}

export default Contact;