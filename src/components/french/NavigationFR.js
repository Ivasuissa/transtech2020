import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainFrench from "../../MainFrench";
import AboutFR from "./AboutFR";
import ProgrammeFR from "./ProgrammeFR";
import IntervenantsFR from "./IntervenantsFR";
import HomeFR from "./HomeFR";
import Contact from "../Contact";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import EN from "../../media/EN.png";
import FR from "../../media/FR.png";
import Button from "../Language";
import anglais from "../../media/anglais.png"

const NavigationFR = props => {
  const handleChange = props.handleChange;
  console.log(props);

  return (
    <div className="navigation">
      <div className="header">
        <div className="logo">
          <h1> TRANSTECH 2020</h1>
        </div>
        <nav class="navbar navbar-expand-lg navbar-white bg-blue">
         <div class="navbar-brand" id="button" onClick={() => handleChange()}>
              ENG
           </div>
          <a class="navbar-brand" target="_blank" href="http://transtech2020.eventbrite.com?s=125451659" > Billets</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#home">Accueil <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">À Propos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#programme">Programme</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#intervenants">Intervenants</a>
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

export default NavigationFR;
