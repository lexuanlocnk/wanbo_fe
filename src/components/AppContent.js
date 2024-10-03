import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Introduce from "../pages/Introduce/Introduce";
import News from "../pages/News/News";

const AppContent = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />

      <Route path="/product/:id" element={<ProductDetail />} />

      <Route path="/introduce" element={<Introduce />} />

      <Route path="/news" element={<News />} />
      
      <Route path="/" element={<Navigate to="home" replace />} />

    </Routes>
  );
};

export default AppContent;
