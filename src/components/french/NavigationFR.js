import React from "react";
import { NavLink, Link } from "react-router-dom";
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

const NavigationFR = props => {
  const handleChange = props.handleChange;
  console.log(props);

  return (
    <div>
      <div className="header">
        <div id="button" onClick={() => handleChange()}>
          EN
        </div>
        <div className="logo">
          <h1> TRANSTECH 2020</h1>
        </div>
        <div className="navbar">
          <div className="navigation">
            <ul>
              <li>
                <a href="#homeFR">Accueil</a>
              </li>
              <li>
                <a href="#aboutFR">À propos</a>
              </li>

              <li>
                <a href="#programmeFR">Programme</a>
              </li>

              <li>
                <a href="#intervenantsFR">Intervenants</a>
              </li>
              <li>
                <a href="http://transtech2020.eventbrite.com?s=125451659" target="_blank">
                  Tickets
                </a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default NavigationFR;
