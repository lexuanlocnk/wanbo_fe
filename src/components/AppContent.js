import React, { Suspense, useContext } from "react";
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
import Test from "../pages/NewProduct/Test";
import Thankyou from "../pages/Checkout/Thankyou";
import OrderDetail from "../pages/Account/ComponentsInfo/OrderDetail"

const AppContent = () => {
  const { cartItems } = useContext(CartContext);
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

      <Route path="/product" element={<NewProducts />} />
      {/* <Route path="/Test" element={<Test />} /> */}

      <Route path="/search" element={<Search />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/checkout"
        element={
          cartItems.length > 0 ? <Checkout /> : <Navigate to="/home" replace />
        } />
      <Route path="/thankyou" element={<Thankyou />} />

      <Route path="/compare-product" element={<CompareProduct />} />

      <Route path="/information" element={<Information />} />

      <Route path="/information/:id" element={<OrderDetail />} />

      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default AppContent;
