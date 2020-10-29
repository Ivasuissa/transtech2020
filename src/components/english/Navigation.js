import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainEnglish from "../../MainEnglish";
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
              <NavLink exact to="/Home" activeClassName="navActive">
                <Link exact to="MainEnglish">
                  Home
                </Link>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/About" activeClassName="navActive">
                <Link exact to="About">
                  About
                </Link>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Programme" activeClassName="navActive">
                <Link exact to="Programme">
                  Program
                </Link>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Intervenants" activeClassName="navActive">
                <Link exact to="Intervenants">
                  Speakers
                </Link>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Intervenants" activeClassName="navActive">
                <Link exact to="Intervenants">
                  Buy Tickets
                </Link>
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/Contact" activeClassName="navActive">
                <Link exact to="Contact">
                  Contact
                </Link>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
};

export default Navigation;
