import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./css/style.css";

import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./components/home.jsx";
import Accommodation from "./components/accommodation-sheet.jsx";
import About from "./components/about.jsx";
import NoUrl from "./components/no-url.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="accommodation/:id" element={<Accommodation />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoUrl />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>
);
