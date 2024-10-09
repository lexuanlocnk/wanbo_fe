import React from "react";

import AppHeader from "../components/AppHeader";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Home from "../pages/Home/Home";
import AppContent from "../components/AppContent";
import Address from "../components/Address";
import BackToTop from "../components/BackToTop";
import { CartProvider } from "../pages/Cart/CartContext";
import Breadcrumb from "../components/Breadcrumb";

const DefaultLayout = () => {
  return (
    <div>
      <CartProvider>
        <BackToTop />

        <Address />
        <Search />
        <AppHeader />
        <Breadcrumb/>

        <AppContent />

        <Footer />
      </CartProvider>
    </div>
  );
};

export default DefaultLayout;
