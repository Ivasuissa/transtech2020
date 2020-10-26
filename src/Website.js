import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Intervenants from "./pages/Intervenants";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";

function Website() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Intervenants />
      <Marquee />
      <Contact />
      <Footer />
    </div>
  );
}

export default Website;
