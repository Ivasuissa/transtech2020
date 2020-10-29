import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainFrench from "../../MainFrench";
import About from "./About";
import Programme from "./Programme";
import Intervenants from "./Intervenants";
import Home from "./Home";
import Contact from "../Contact";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import EN from "../../media/EN.png";
import FR from "../../media/FR.png";

const Navigation = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1> TRANSTECH 2020</h1>
      </div>
      <div className="navbar">
        <div className="navigation">
          <ul>
            <li>
              <a href="#home">Accueil</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#programme">Programme</a>
            </li>

            <li>
              <a href="#intervenants">Intervenants</a>
            </li>
            <li>
              <a href="#intervenants">Tickets</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>{" "}
      </div>
    </div>
  );
};

export default Navigation;
