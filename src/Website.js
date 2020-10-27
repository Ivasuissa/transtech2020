import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import TransTech2020 from "./pages/TransTech2020";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import Intervenants from "./components/Intervenants";

function Website() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <TransTech2020/>
      <Intervenants />
      <Marquee />
      <Contact />
      <Footer />
    </div>
  );
}

export default Website;
