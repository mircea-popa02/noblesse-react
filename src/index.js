import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Title from "./components/Title";

const root = ReactDOM.createRoot(document.getElementById("root"));

const language = localStorage.getItem("language");

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/gallery"
        element={
          <>
            <Title></Title>
            <Header sticky="top" passLanguage={() => {}} />
            <Gallery />
            <Footer language={language} />
          </>
        }
      />
      <Route path="/*" element={<NotFound language={language} />} />
    </Routes>
  </Router>
);
