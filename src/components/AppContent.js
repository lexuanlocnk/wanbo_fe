import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Introduce from "../pages/Introduce/Introduce";
import News from "../pages/News/News";
import NewsDetail from "../pages/News/NewsDetail";
import Cart from "../pages/Cart/Cart";
import { CartContext, CartProvider } from "../pages/Cart/CartContext";
import Login from "../pages/Account/Login";
import Register from "../pages/Account/Register";
import NewProduct from "../pages/NewProduct/NewProduct";
import Contact from "../pages/Contact/Contact";
import Checkout from "../pages/Checkout/Checkout";
import CompareProduct from "../pages/Compare/compare";
import Information from "../pages/Account/Information";
import NewProducts from "../pages/NewProduct/NewProducts";
import Search from "../pages/Search/Search";

const AppContent = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/product/:urlProduct" element={<ProductDetail />} />

      <Route path="/introduce" element={<Introduce />} />

      <Route path="/news/:urlNew" element={<News />} />

      <Route path="/news/:urlNew/:urlDetail" element={<NewsDetail />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/new-product" element={<NewProduct />} />

      <Route path="/:catUrl" element={<NewProducts />} />

      <Route path="/search" element={<Search />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/checkout" element={<Checkout />} />

      <Route path="/compare-product" element={<CompareProduct />} />

      <Route path="/information" element={<Information />} />

      <Route path="/" element={<Navigate to="home" replace />} />
    </Routes>
  );
};

export default AppContent;
