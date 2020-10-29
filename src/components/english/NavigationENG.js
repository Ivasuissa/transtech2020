import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainEnglish from "../../MainEnglish";
import MainFrench from "../../MainFrench";
import AboutENG from "./AboutENG";
import ProgrammeENG from "./ProgrammeENG";
import Intervenants from "./IntervenantsENG";
import Home from "./HomeENG";
import Contact from "../Contact";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import EN from "../../media/EN.png";
import FR from "../../media/FR.png";
import Language from "../Language";

const NavigationENG = props => {
  console.log(props);
  const handleChange = props.handleChange;
  return (
    <div>
      <div className="header"  >
        <div id="button"onClick={() => handleChange()}>FR</div>
        <div className="logo">
          <h1> TRANSTECH 2020</h1>
        </div>
        <div className="navbar">
          <div className="navigation">
            <ul>
              <li>
                <a href="#homeEN">Home</a>
              </li>
              <li>
                <a href="#aboutEn">About</a>
              </li>

              <li>
                <a href="#programmmeEN">Program</a>
              </li>

              <li>
                <a href="#intervenantEN">Speakers</a>
              </li>
              <li>
                <a href="http://transtech2020.eventbrite.com?s=125451659">Tickets</a>
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

export default NavigationENG;
