import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./components/Gallery";
import NotFound from "./components/NotFound";
import Map from "./components/Map";

const root = ReactDOM.createRoot(document.getElementById("root"));

const location = {
  address: "Noblesse Brăila",
  lat: 45.257559,
  lng: 27.96065,
};

const language = localStorage.getItem("language");

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/map" element={<Map location={location} zoomLevel={16} language={language} /> } />
    </Routes>
  </Router>
);
