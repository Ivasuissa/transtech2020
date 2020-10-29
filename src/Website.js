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
import Home from "./components/french/Home";
import NotFound from "./pages/NotFound";
import Contact from "./components/Contact";
import About from "./components/french/About";
import Programme from "./components/french/Programme";
import Navigation from "./components/french/Navigation";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import Intervenants from "./components/french/Intervenants";
import Inscription from "./components/Inscription";
import EN from "./media/EN.png";
import FR from "./media/FR.png";

function Website() {
  return (
    <div className="container">
     <div>
      <Navigation id="compNavigation" />
      <Home id="compHome" />
      <About id="compAbout" />
      <Programme />
      <Intervenants id="compIntervenants" />
      <Marquee id="compMarquee" />
      <Contact id="compContact" />
      <Footer id="compFooter" />
      </div>
    </div>
  );
}

export default Website;
