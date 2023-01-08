import React from "react";
import { Container } from "react-bootstrap";
import "semantic-ui-css/semantic.min.css";
import './Contact.css'
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";




const Contact = () => {
    const SERVICE_ID = "service_zf4a1jv";
    const TEMPLATE_ID = "template_0yyo3hd";
    // const USER_ID = "YAmXjPUJ52n0jJC4z";
    const recaptchaRef = React.createRef();

    const handleOnSubmit = (e) => {
        e.preventDefault();

        // reset the captcha



        // recaptchaRef.current.execute()
        // console.log(e.target);
        // console.log(e);
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
                    title: 'Ceva nu a funcționat. Vă rugăm să încercați din nou.',
                    text: error.text,
                })
            });
        e.target.reset()
    };
    return (
        <Container className="contact" id="contact-form">
            <h2>Contactează-ne</h2>
            <div className="line"></div>
            <p>Scrie-ne un mesaj iar noi îți vom răspunde cât mai curând</p>
            <Form onSubmit={handleOnSubmit} className="d-flex">
                <Form.Field
                    id='form-input-control-email'
                    control={Input}
                    name='from_email'
                    placeholder='Email'
                    required
                // icon='mail'
                // iconPosition='left'
                />
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    name='from_name'
                    placeholder='Nume'
                    required
                // icon='user circle'
                // iconPosition='left'
                />
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    name='message'
                    placeholder='Mesajul tău'
                    required
                />
                {/* <div className="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div> */}
                <div className="d-lg-none d-xl-none">
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        size="compact"
                        hl="ro"
                    />
                </div>
                <div className="d-none d-lg-block d-xl-block">
                <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        hl="ro"
                    />
                </div>



                <Button type='submit'>Trimite</Button>
            </Form>
        </Container>
    );


}


export default Contact;