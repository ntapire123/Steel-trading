import React from "react";
import Navbar from "./Landing_page/Navbar";
import Footer from "./Landing_page/Footer";
import Homepage from "./Landing_page/home/Homepage";
import Signup from "./Landing_page/signup/Signup"
import Support from "./Landing_page/support/SupportPage"
import About from "./Landing_page/about/AboutPage"
import Pricing from "./Landing_page/pricing/PricingPage"
import Product from "./Landing_page/products/ProductPage"
import NotFound from "./Landing_page/NotFound";
import Login from "./Landing_page/signup/Login";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar className="navBar" />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/pricing" element={<Pricing/>}></Route>
          <Route path="/products" element={<Product/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
