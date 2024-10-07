import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Introduce from "../pages/Introduce/Introduce";
import News from "../pages/News/News";
import NewProduct from "../pages/NewProduct/NewProduct";
import Contact from "../pages/Contact/Contact";

const AppContent = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />

      <Route path="/product/:id" element={<ProductDetail />} />

      <Route path="/introduce" element={<Introduce />} />

      <Route path="/news" element={<News />} />

      <Route path="/new-product" element={<NewProduct />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/" element={<Navigate to="home" replace />} />
    </Routes>
  );
};

export default AppContent;
