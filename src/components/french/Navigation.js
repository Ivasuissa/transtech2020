import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainFrench from "../../MainFrench"
import About from "./About";
import Programme from "./Programme";
import Intervenants from "./Intervenants";
import Home from "./Home";
import Contact from "../Contact";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import EN from "../../media/EN.png"
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
            <li className="normalLi">
              <NavLink exact to="/Home" activeClassName="navActive">
                <Link exact to="MainFrench">
                  Accueil
                </Link>
              </NavLink>
            </li>
            <li className="normalLi">
              <NavLink exact to="/About" activeClassName="navActive">
                <Link exact to="About">
                  About
                </Link>
              </NavLink>
            </li>
            <li className="normalLi">
              <NavLink exact to="/Programme" activeClassName="navActive">
                <Link exact to="Programme">
                  Programme
                </Link>
              </NavLink>
            </li>
            <li className="normalLi">
              <NavLink exact to="/Intervenants" activeClassName="navActive">
                <Link exact to="Intervenants">
                 Intervenants
                </Link>
              </NavLink>
            </li>
            <li className="normalLi">
              <NavLink exact to="/Contact" activeClassName="navActive">
                <Link exact to="Contact">
                  Billets
                </Link>
              </NavLink>
            </li >

            <li className="normalLi">
              <NavLink exact to="/Contact" activeClassName="navActive">
                <Link exact to="Contact">
                  Contact
                </Link>
              </NavLink>
            </li >
            {/* <li className="imgLi">
              <NavLink exact to="/MainEnglish" activeClassName="navActive">
                <Link exact to="/MainEnglish">
                  <img src={EN}></img>
                </Link>
              </NavLink>
            </li>
            <li className="imgLi">
              <NavLink exact to="/MainFrench" activeClassName="navActive">
                <Link exact to="/MainFrench">
                <img src={FR}></img>
                </Link>
              </NavLink>
            </li> */}
          </ul>
         
     
       
      </div>{" "}
  
    </div>
    </div>
  );
};

export default Navigation;
