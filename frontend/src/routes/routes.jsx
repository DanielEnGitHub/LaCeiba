import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "../pages/Products";
import Main from "../pages/Main/Main";
import Provider from "../pages/Provider";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main><Product/></Main>} />
        <Route path="/products" element={<Main><Product/></Main>} />
        <Route path="/providers" element={<Main><Provider/></Main>} />
        <Route path="/categories" element={<Main><h2>Categorias</h2></Main>} />
      </Routes>
    </Router>
  );
};

export default Rutas;
