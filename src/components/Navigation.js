import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                <span>Accueil</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/About" activeClassName="navActive">
                <span>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Programme" activeClassName="navActive">
                <span>Programme</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Intervenants" activeClassName="navActive">
                  <a href="" target="_blank">Inscription</a>
              </NavLink>
            </li>
       
            <li>
              <NavLink exact to="/Contact" activeClassName="navActive">
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
