import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Router,
  Switch,
  HashRouter,
  NavLink
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import NotFound from "./pages/NotFound";
import Contact from "./components/Contact";
import About from "./components/About";
import Programme from "./components/Programme";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import Intervenants from "./components/Intervenants";
import Inscription from "./components/Inscription";

function Website() {
  return (
    <div className="container">
      <Navigation id="compNavigation" />
      <Home id="compHome" />
      <About id="compAbout" />
      <Programme />
      <Intervenants id="compIntervenants" />
      <Marquee id="compMarquee" />
      <Contact id="compContact" />
      <Footer id="compFooter" />
    </div>
  );
}

export default Website;
