import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./components/Gallery";
import NotFound from "./components/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </Router>
);
