import React from "react";
import './Title.css'


const Title = () => {
  const goToMainPage = () => {
    window.location.href = "/";
  }
  return (
    <div className="title d-flex justify-content-center align-items-center flex-column">
      <h1 className="header d-none d-lg-block" onClick={goToMainPage}>Noblesse</h1>
    </div>
  );
}

export default Title;