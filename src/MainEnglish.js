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
import HomeENG from "./components/english/HomeENG";
import NotFound from "./pages/NotFound";
import Contact from "./components/Contact";
import AboutENG from "./components/english/AboutENG";
import ProgrammeENG from "./components/english/ProgrammeENG";
import NavigationENG from "./components/english/NavigationENG";
import Footer from "./components/Footer";
import Marquee from "./components/english/Marquee";
import IntervenantsENG from "./components/english/IntervenantsENG";
import Inscription from "./components/Inscription";


function MainEnglish() {
  return (
    <div id="MainEnglish">
    <div className="container">
      <div>
         <HomeENG />
        <AboutENG/>
        <ProgrammeENG />
        <IntervenantsENG  />
        <Marquee />
        <Contact />
      </div>
    </div>
    </div>
  );
}

export default MainEnglish;
