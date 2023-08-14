import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import "semantic-ui-css/semantic.min.css";
import './Contact.css'
import emailjs from 'emailjs-com';
import { Form, Input, TextArea } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";


import { Button } from "react-bootstrap";




const Contact = (props) => {
    const language = props.language;
    const SERVICE_ID = "service_zf4a1jv";
    const TEMPLATE_ID = "template_0yyo3hd";
    const recaptchaRef = useRef(null);
    // make async function

    const printToken = () => {
        const token = recaptchaRef.current.getValue();
        console.log(token);
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const token = await recaptchaRef.current.executeAsync();
        console.log(token);
        recaptchaRef.current.reset();

        const form = e.target;
        const params = {
            from_name: form.from_name.value,
            from_email: form.from_email.value,
            message: form.message.value,
            "g-recaptcha-response": token
        };

        console.log(params);

        emailjs.send(SERVICE_ID, TEMPLATE_ID, params, "YAmXjPUJ52n0jJC4z")
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
        <>
            {/* waves gradient */}
            <div class="svg-container">
                <svg id="visual" viewBox="0 115 4000 850" width="300%" xmlns="http://www.w3.org/2000/svg" version="1.1" className="waves">
                    <path className="animated-path" d="M0 199L111.2 183.5C222.3 168 444.7 137 666.8 123.5C889 110 1111 114 1333.2 134.8C1555.3 155.7 1777.7 193.3 2000 219.8C2222.3 246.3 2444.7 261.7 2666.8 256.3C2889 251 3111 225 3333.2 206.3C3555.3 187.7 3777.7 176.3 3888.8 170.7L4000 165L4000 1001L3888.8 1001C3777.7 1001 3555.3 1001 3333.2 1001C3111 1001 2889 1001 2666.8 1001C2444.7 1001 2222.3 1001 2000 1001C1777.7 1001 1555.3 1001 1333.2 1001C1111 1001 889 1001 666.8 1001C444.7 1001 222.3 1001 111.2 1001L0 1001Z" fill="#526336"></path>
                    <path className="animated-path" d="M0 406L111.2 409.7C222.3 413.3 444.7 420.7 666.8 404.2C889 387.7 1111 347.3 1333.2 346.7C1555.3 346 1777.7 385 2000 387.2C2222.3 389.3 2444.7 354.7 2666.8 335.7C2889 316.7 3111 313.3 3333.2 328.3C3555.3 343.3 3777.7 376.7 3888.8 393.3L4000 410L4000 1001L3888.8 1001C3777.7 1001 3555.3 1001 3333.2 1001C3111 1001 2889 1001 2666.8 1001C2444.7 1001 2222.3 1001 2000 1001C1777.7 1001 1555.3 1001 1333.2 1001C1111 1001 889 1001 666.8 1001C444.7 1001 222.3 1001 111.2 1001L0 1001Z" fill="#7a8760"></path>
                    <path className="animated-path" d="M0 447L111.2 462.3C222.3 477.7 444.7 508.3 666.8 529.2C889 550 1111 561 1333.2 545.3C1555.3 529.7 1777.7 487.3 2000 476.5C2222.3 465.7 2444.7 486.3 2666.8 505.8C2889 525.3 3111 543.7 3333.2 559C3555.3 574.3 3777.7 586.7 3888.8 592.8L4000 599L4000 1001L3888.8 1001C3777.7 1001 3555.3 1001 3333.2 1001C3111 1001 2889 1001 2666.8 1001C2444.7 1001 2222.3 1001 2000 1001C1777.7 1001 1555.3 1001 1333.2 1001C1111 1001 889 1001 666.8 1001C444.7 1001 222.3 1001 111.2 1001L0 1001Z" fill="#a3ac8d"></path>
                    <path className="animated-path" d="M0 703L111.2 679.5C222.3 656 444.7 609 666.8 613.7C889 618.3 1111 674.7 1333.2 695.3C1555.3 716 1777.7 701 2000 689.7C2222.3 678.3 2444.7 670.7 2666.8 685.7C2889 700.7 3111 738.3 3333.2 753.2C3555.3 768 3777.7 760 3888.8 756L4000 752L4000 1001L3888.8 1001C3777.7 1001 3555.3 1001 3333.2 1001C3111 1001 2889 1001 2666.8 1001C2444.7 1001 2222.3 1001 2000 1001C1777.7 1001 1555.3 1001 1333.2 1001C1111 1001 889 1001 666.8 1001C444.7 1001 222.3 1001 111.2 1001L0 1001Z" fill="#cdd3bd"></path>
                    <path className="animated-path" d="M0 929L111.2 907.8C222.3 886.7 444.7 844.3 666.8 820.3C889 796.3 1111 790.7 1333.2 791.8C1555.3 793 1777.7 801 2000 812.7C2222.3 824.3 2444.7 839.7 2666.8 853C2889 866.3 3111 877.7 3333.2 859C3555.3 840.3 3777.7 791.7 3888.8 767.3L4000 743L4000 1001L3888.8 1001C3777.7 1001 3555.3 1001 3333.2 1001C3111 1001 2889 1001 2666.8 1001C2444.7 1001 2222.3 1001 2000 1001C1777.7 1001 1555.3 1001 1333.2 1001C1111 1001 889 1001 666.8 1001C444.7 1001 222.3 1001 111.2 1001L0 1001Z" fill="#f8fbef"></path>
                </svg>
            </div>
            <div className="contact-wrapper d-flex justify-content-center">
                <div className="contact" id="contact-form">
                    <h2>{language === "RO" ? "Contactează-ne" : "Contact us"}</h2>
                    <div className="line"></div>
                    <p>{language === "RO" ? "Scrie-ne un mesaj iar noi îți vom răspunde cât mai curând" : "Write us a message and we will get back to you as soon as possible"}</p>
                    <Form onSubmit={handleOnSubmit} className="d-flex">
                        <Form.Field
                            id='form-input-control-email'
                            control={Input}
                            name='from_email'
                            placeholder='Email'
                            required
                        />
                        <Form.Field
                            id='form-input-control-last-name'
                            control={Input}
                            name='from_name'
                            placeholder={language === "RO" ? "Nume" : "Name"}
                            required
                        />
                        <Form.Field
                            id='form-textarea-control-opinion'
                            control={TextArea}
                            name='message'
                            placeholder={language === "RO" ? "Mesaj" : "Message"}
                            required
                        />
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            size="invisible"
                            hl="ro"
                            onChange={printToken}
                        >
                            <small>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
                            </small>
                        </ReCAPTCHA>
                        <br />
                        <Button className="btn-green" type='submit'>
                            {language === "RO" ? "Trimite" : "Send"}
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );


}


export default Contact;