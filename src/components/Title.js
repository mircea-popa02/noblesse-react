import React from "react";
import './Title.css'


const Title = () => {
    const goToMainPage = () => {
        window.location.href = "/";
    }
    return (
        <div className="title">
            <div className="info">
                <div className="d-none d-lg-block">+40 761 332 100 </div>
                <h1 className="header d-none d-lg-block" onClick={goToMainPage}>Noblesse</h1>

                <div className="d-none d-lg-block">L-V 9:00-20:00
                <hr/> S-D 9:00-16:00</div>
            </div>

            

        </div>
    );
}

export default Title;