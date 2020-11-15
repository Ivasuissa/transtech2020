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
import Partenaires from "./components/Partenaires";
import IntervenantsENG from "./components/english/IntervenantsENG";
import CommiteeENG from "./components/english/CommiteeENG";
import TechniqueENG from "./components/english/TechniqueENG";
import Marquee from "./components/Marquee";
import Inscription from "./components/Inscription";

function MainEnglish() {
  return (
    <div id="MainEnglish">
      <HomeENG />
      <AboutENG />
      <ProgrammeENG />
      <Inscription />
      <CommiteeENG />
      <IntervenantsENG />
      <TechniqueENG />
      <Marquee />
      <Partenaires />
      <Contact />
      <Footer />
    </div>
  );
}

export default MainEnglish;
