import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainEnglish from "../../MainEnglish";
import MainFrench from "../../MainFrench";
import AboutENG from "./AboutENG";
import ProgrammeENG from "./ProgrammeENG";
import Intervenants from "./IntervenantsENG";
import HomeENG from "./HomeENG";
import Contact from "../Contact";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import EN from "../../media/EN.png";
import FR from "../../media/FR.png";
import Language from "../Language";

const NavigationENG = props => {

  console.log(props);
  const handleChange = props.handleChange;
  return (
    <div className="navigation">
    <div className="header">
      <div className="logo">
        <h1> TRANSTECH 2020</h1>
      </div>
      <nav class="navbar navbar-expand-lg navbar-white bg-blue">
      <div class="navbar-brand" id="button" onClick={() => handleChange()}>
              FR
           </div>
        <a class="navbar-brand" target="_blank" href="http://transtech2020.eventbrite.com?s=125451659">Tickets</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#programme">Program</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#intervenants">Speakers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
</nav>
</div>
</div>
  );
};

export default NavigationENG;