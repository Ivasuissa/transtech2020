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
import Footer from "./components/Footer";
import Marquee from "./components/english/Marquee";
import IntervenantsENG from "./components/english/IntervenantsENG";
import CommiteeENG from "./components/english/CommiteeENG";
import TechniqueENG from "./components/english/TechniqueENG";
import Partners from "./components/english/Partners";

function MainEnglish() {
  return (
    <div id="MainEnglish">
          <HomeENG />
          <AboutENG />
          <ProgrammeENG />
          <CommiteeENG/>
          <IntervenantsENG />
          <TechniqueENG/>
          <Partners/>
          <Marquee />
          <Contact />
          <Footer />
      </div>

  );
}

export default MainEnglish;
