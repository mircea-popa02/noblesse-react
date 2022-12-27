import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./Footer.css";


const footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <h3>Despre noi</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            euismod, nisl nec tincidunt luctus, nunc nisl aliquet nisl, ut
                            aliquet nunc nisl eu lectus. Sed euismod, nisl nec tincidunt
                            luctus, nunc nisl aliquet nisl, ut aliquet nunc nisl eu lectus.
                        </p>
                    </Col>
                    <Col>
                        <h3>Link-uri utile</h3>
                        <ul>
                            <li class="list-group-item">
                                <a href="#">Crama Casa Panciu</a>
                            </li>
                            <li class="list-group-item">
                                <a href="#">Hartă</a>
                            </li>
                            <li class="list-group-item">
                                <a href="#">Facebook</a>
                            </li>
                            <li class="list-group-item">
                                <a href="#">Instagram</a>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>Contact</h3>
                        <p>
                            <svg
                                width="20"
                                height="35"
                                viewBox="0 0 29 35"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M27.86 14.43C27.86 24.8756 14.43 33.8289 14.43 33.8289C14.43 33.8289 1 24.8756 1 14.43C1 10.8681 2.41494 7.45217 4.93356 4.93356C7.45217 2.41494 10.8681 1 14.43 1C17.9919 1 21.4078 2.41494 23.9264 4.93356C26.4451 7.45217 27.86 10.8681 27.86 14.43Z"
                                    stroke="#CAEC7D"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M14.43 18.9066C16.9024 18.9066 18.9067 16.9024 18.9067 14.43C18.9067 11.9576 16.9024 9.95331 14.43 9.95331C11.9576 9.95331 9.95334 11.9576 9.95334 14.43C9.95334 16.9024 11.9576 18.9066 14.43 18.9066Z"
                                    stroke="#CAEC7D"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            Strada Florilor, nr. 1, Braila
                        </p>
                        <p>
                            <svg width="20" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.999 25.0057V29.8326C33.0008 30.2807 32.909 30.7242 32.7295 31.1348C32.55 31.5453 32.2867 31.9139 31.9565 32.2168C31.6263 32.5197 31.2365 32.7504 30.812 32.8939C30.3876 33.0375 29.9378 33.0908 29.4915 33.0505C24.5405 32.5125 19.7847 30.8207 15.6062 28.111C11.7187 25.6407 8.42282 22.3448 5.95254 18.4573C3.23338 14.2599 1.54119 9.48093 1.01306 4.50767C0.972852 4.06274 1.02573 3.61432 1.16832 3.19094C1.31092 2.76757 1.5401 2.37853 1.84129 2.04858C2.14248 1.71864 2.50907 1.45502 2.91772 1.27452C3.32637 1.09401 3.76813 1.00058 4.21487 1.00016H9.04173C9.82256 0.992471 10.5795 1.26898 11.1716 1.77814C11.7636 2.2873 12.1503 2.99437 12.2596 3.76755C12.4634 5.31225 12.8412 6.82895 13.3859 8.2887C13.6024 8.86459 13.6492 9.49045 13.5209 10.0921C13.3926 10.6938 13.0945 11.2461 12.6619 11.6836L10.6185 13.727C12.9089 17.755 16.2441 21.0902 20.2722 23.3807L22.3156 21.3373C22.753 20.9047 23.3053 20.6066 23.907 20.4783C24.5087 20.3499 25.1346 20.3968 25.7105 20.6133C27.1702 21.158 28.6869 21.5358 30.2316 21.7395C31.0132 21.8498 31.727 22.2435 32.2372 22.8457C32.7475 23.4479 33.0186 24.2166 32.999 25.0057Z" stroke="#CAEC7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            0722 222 222
                        </p>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default footer;