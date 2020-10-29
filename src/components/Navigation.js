import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Website from "../Website";
import About from "./About";
import Programme from "./Programme";
import Intervenants from "./Intervenants";
import Contact from "./Contact";

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
                <Link exact to="Website">
                  Accueil
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
                  Programme
                </Link>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Intervenants" activeClassName="navActive">
                <Link exact to="Intervenants">
                  Inscription
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
      </div>
    </div>
  );
};

export default Navigation;
