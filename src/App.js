import React from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import WhyChooseUs from "./pages/WhyChooseUs";
import ProductCategory from "./pages/ProductCategory";
import DeliveryPartners from "./pages/DeliveryPartners";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="app-wrapper">

      <Navbar />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/categories" element={<ProductCategory />} />
          <Route path="/products/delivery-partners" element={<DeliveryPartners />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
};

export default App;
