import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./Footer.css";


const footer = () => {
    return (
        <div className="footer">
            <Col>
                <a>Despre</a>
                <a>Hartă</a>
                <a>Contact</a>
            </Col>

            <Col>
                <svg width="24" height="24" viewBox="0 0 85 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M77.8652 59.701C77.8652 72.8996 70.2148 80.7681 57.382 80.7681H53.1866C51.2476 80.7681 49.6611 79.1364 49.6611 77.1421V56.22C49.6611 55.241 50.4367 54.407 51.3886 54.407L57.5935 54.2983C58.0871 54.262 58.5102 53.8994 58.6159 53.3918L59.8498 46.4661C59.8738 46.3091 59.8644 46.1487 59.8222 45.9958C59.7801 45.8429 59.7061 45.7013 59.6056 45.5807C59.5051 45.46 59.3803 45.3632 59.2398 45.297C59.0994 45.2308 58.9467 45.1966 58.7922 45.197L51.2829 45.3058C50.2957 45.3058 49.5201 44.5081 49.4848 43.529L49.3438 34.6453C49.3438 34.0652 49.8021 33.5575 50.4015 33.5575L58.8627 33.4125C59.462 33.4125 59.9204 32.9411 59.9204 32.3247L59.7793 23.6223C59.7793 23.0059 59.321 22.5345 58.7217 22.5345L49.2028 22.6795C47.8133 22.7012 46.4416 23.0048 45.1663 23.5727C43.891 24.1406 42.7372 24.9618 41.7711 25.9892C40.8049 27.0166 40.0454 28.2299 39.536 29.5598C39.0266 30.8896 38.7774 32.3098 38.8026 33.7388L38.9788 43.7103C39.0141 44.7256 38.2385 45.5233 37.2513 45.5596L33.0207 45.6321C32.4214 45.6321 31.9631 46.1035 31.9631 46.7199L32.0688 53.6093C32.0688 54.2257 32.5272 54.6971 33.1265 54.6971L37.3571 54.6246C38.3442 54.6246 39.1199 55.4223 39.1551 56.4013L39.4724 77.0695C39.5077 79.1001 37.9212 80.7681 35.9469 80.7681H27.8382C15.0054 80.7681 7.35503 72.8996 7.35503 59.6647V29.3151C7.35503 16.1165 15.0054 8.24805 27.8382 8.24805H57.382C70.2148 8.24805 77.8652 16.1165 77.8652 29.3151V59.701Z" fill="#505050" />
                </svg>

                <svg width="24" height="24" viewBox="0 0 85 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M57.1691 8.24805H27.6253C14.7925 8.24805 7.14214 16.1165 7.14214 29.3151V59.6647C7.14214 72.8996 14.7925 80.7681 27.6253 80.7681H57.1338C69.9667 80.7681 77.617 72.8996 77.617 59.701V29.3151C77.6523 16.1165 70.0019 8.24805 57.1691 8.24805ZM42.3972 58.5769C34.8526 58.5769 28.7182 52.2677 28.7182 44.5081C28.7182 36.7484 34.8526 30.4392 42.3972 30.4392C49.9418 30.4392 56.0762 36.7484 56.0762 44.5081C56.0762 52.2677 49.9418 58.5769 42.3972 58.5769ZM63.2682 25.9429C63.0919 26.378 62.8451 26.7769 62.5279 27.1395C62.1753 27.4659 61.7875 27.7197 61.3644 27.901C60.7228 28.1811 60.0146 28.2582 59.3302 28.1226C58.6458 27.987 58.0161 27.6447 57.5216 27.1395C57.2043 26.7769 56.9576 26.378 56.7813 25.9429C56.6002 25.5071 56.5044 25.0389 56.4992 24.5651C56.4992 24.0937 56.605 23.6223 56.7813 23.1872C56.9576 22.7158 57.2043 22.3532 57.5216 21.9906C58.3325 21.1566 59.5664 20.7577 60.6946 21.0116C60.9414 21.0478 61.1529 21.1203 61.3644 21.2291C61.576 21.3016 61.7875 21.4104 61.999 21.5555C62.1753 21.6642 62.3516 21.8455 62.5279 21.9906C62.8451 22.3532 63.0919 22.7158 63.2682 23.1872C63.4445 23.6223 63.5503 24.0937 63.5503 24.5651C63.5503 25.0364 63.4445 25.5078 63.2682 25.9429Z" fill="#505050" />
                </svg>
            </Col>
        </div>
    );
}

export default footer;