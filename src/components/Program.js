import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import "./Program.css";

const Program = (props) => {
    const language = props.language;
    return (
        <div className='map-wrapper' id='program'>
            <div className='map-container'>
                <div className='map-header'>
                    <h2>{language === "RO" ? "Program de lucru" : "Working hours"}</h2>
                    <div className="line"></div>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='col-4 d-lg-flex infobar'>
                            <strong>
                                {language === "RO" ? "Luni-Vineri" : "Monday-Friday"}
                            </strong>
                        </Col>
                        <Col className='col-4 d-lg-flex'>
                            <strong>
                                {language === "RO" ? "Sâmbătă" : "Saturday"}
                            </strong>
                        </Col>
                        <Col className='col-4 d-lg-flex'>
                            <strong>
                                {language === "RO" ? "Duminică" : "Sunday"}
                            </strong>
                        </Col>
                    </Row>

                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='col-4 d-lg-flex infobar'>
                            <p>
                                {language === "RO" ? "9:00 - 18:00" : "9:00 - 18:00"}
                            </p>
                        </Col>
                        <Col className='col-4 d-lg-flex'>
                            <p>
                                {language === "RO" ? "9:00 - 14:00" : "9:00 - 14:00"}
                            </p>
                        </Col>
                        <Col className='col-4 d-lg-flex'>
                            <p>
                                {language === "RO" ? "Închis" : "Closed"}
                            </p>
                        </Col>
                    </Row>
                    <br></br>
                </div>
            </div>
        </div>
    )
}

export default Program
