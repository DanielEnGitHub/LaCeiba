import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "../pages/Products";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product/>} />
      </Routes>
    </Router>
  );
};

export default Rutas;
