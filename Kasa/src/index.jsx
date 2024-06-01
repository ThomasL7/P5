import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/reset.sass";
import "./styles/index.sass";

import Home from "./pages/home.jsx";
import Accommodation from "./pages/accommodation-sheet.jsx";
import About from "./pages/about.jsx";
import NoUrl from "./pages/no-url.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="accommodation/:id" element={<Accommodation />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoUrl />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
