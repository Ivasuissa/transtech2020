import React, { Component } from "react";
import { BrowserRouter, Route, Switch, HashRouter, NavLink } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Programme from "./pages/Programme";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import Intervenants from "./components/Intervenants";
import Inscription from "./components/Inscription";

function Website() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Programme/>
      <Intervenants />
      <Marquee />
      <Contact />
      <Footer />
    </div>
  );
}

export default Website;
