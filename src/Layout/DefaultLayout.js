import React from "react";

import AppHeader from "../components/AppHeader";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Home from "../pages/Home/Home";
import AppContent from "../components/AppContent";
import Address from "../components/Address";
import BackToTop from "../components/BackToTop";

const DefaultLayout = () => {
  return (
    <div>
      <BackToTop/>
      
      <Address/>
      <Search />
      <AppHeader />

      <AppContent/>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
