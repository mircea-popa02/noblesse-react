import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./NotFound.css";
import Header from "./Header";
import Title from "./Title";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("language");
    if (data) {
      setLanguage(data);
    }
  }, []);

  const passLanguage = (language) => {
    setLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <>
      <Title></Title>
      <Header sticky="top" passLanguage={passLanguage} />
      <div className="not-found-wrapper">
        <div className="not-found-container d-flex flex-column">
          <h1>
            {language === "RO" ? "Pagina nu a fost găsită" : "Page not found"}
          </h1>
          <div className="line"></div>
          <p>
            {language === "RO"
              ? "Ne pare rău, dar pagina pe care încercați să o accesați nu există."
              : "We're sorry, but the page you are trying to access does not exist."}
          </p>
          <Link to="/">
            <Button className="btn-dark-green">
              {language === "RO" ? "Acasă" : "Home"}
            </Button>
          </Link>
          <img className="flower" src="corner2.jpg" alt="404" />
        </div>
      </div>
      <Footer language={language} />
    </>
  );
};

export default NotFound;
