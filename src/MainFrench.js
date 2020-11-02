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
import HomeFR from "./components/french/HomeFR";
import NotFound from "./pages/NotFound";
import Contact from "./components/Contact";
import AboutFR from "./components/french/AboutFR";
import ProgrammeFR from "./components/french/ProgrammeFR";
import NavigationFR from "./components/french/NavigationFR";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import IntervenantsFR from "./components/french/IntervenantsFR";
import Commitee from "./components/french/Commitee";
import Technique from "./components/french/Technique";
import Inscription from "./components/Inscription";
import EN from "./media/EN.png";
import FR from "./media/FR.png";

function MainFrench() {
  return (
    <div id="#MainFrench">
      <HomeFR />
      <AboutFR />
      <ProgrammeFR />
      <Commitee />
      <IntervenantsFR />
      <Technique />
      <Marquee />
      <Contact />
      <Footer />
    </div>
  );
}

export default MainFrench;
