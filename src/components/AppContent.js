import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Introduce from "../pages/Introduce/Introduce";
import News from "../pages/News/News";
import Cart from "../pages/Cart/Cart";
import { CartContext, CartProvider } from "../pages/Cart/CartContext";
import Pathname from "./Pathname";

const AppContent = () => {
  return (
    <CartProvider>
      <Pathname/>
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/introduce" element={<Introduce />} />

        <Route path="/news" element={<News />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/" element={<Navigate to="home" replace />} />
      </Routes>
    </CartProvider>
  );
};

export default AppContent;
