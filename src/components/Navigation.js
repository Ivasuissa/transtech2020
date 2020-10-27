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
                <span>À Propos</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/TransTech2020" activeClassName="navActive">
                <span>Intervenants</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Inscription" activeClassName="navActive">
                <span>Programmes</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Contact" activeClassName="navActive">
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* <div className="socialNetwork">
          <ul>
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Navigation;
