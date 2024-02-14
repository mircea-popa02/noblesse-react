// notfound js

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404 - Not Found!</h1>
            <Link to="/">
                <Button variant="outline-primary">Go Home</Button>
            </Link>
        </div>
    )
}

export default NotFound