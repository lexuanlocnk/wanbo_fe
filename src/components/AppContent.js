import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Introduce from "../pages/Introduce/Introduce";
import News from "../pages/News/News";
import NewsDetai from "../pages/News/NewsDetail";
import Cart from "../pages/Cart/Cart";
import { CartContext, CartProvider } from "../pages/Cart/CartContext";
import Login from "../pages/Account/Login";
import Register from "../pages/Account/Register";

const AppContent = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/product/:id" element={<ProductDetail />} />

      <Route path="/introduce" element={<Introduce />} />

      <Route path="/news" element={<News />} />

      <Route path="/news/:id" element={<NewsDetai />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/" element={<Navigate to="home" replace />} />
    </Routes>
  );
};

export default AppContent;
