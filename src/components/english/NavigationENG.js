import React from "react";

import FR from "../../media/france.png";
import israelValley from "../../media/sponsors/israelvalley.png";
import ccif from "../../media/sponsors/cciif.png";
import program from "../../program.pdf";


const NavigationENG = props => {
  const handleChange = props.handleChange;

  return (
    <div className="navigation">
      <div className="header">
        <div className="logo">
        <img src={ccif}></img>
          <h1> TRANSTECH 2020</h1>
          <img src={israelValley}></img>
        </div>
        <nav class="navbar navbar-expand-lg navbar-white bg-blue">
        <img  className="drapeau" src={FR}onClick={() => handleChange()}></img>
          <a
          id='billet'
            class="navbar-brand"
            target="_blank"
            href="https://www.eventbrite.com/e/transtech-2020-11th-edition-special-start-ups-paris-tlv-tickets-127696009201"
          >
            Tickets
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#home">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
            
              <li class="nav-item">
                <a class="nav-link" href="#intervenants">
                  Speakers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href={program} id="planning" target="_blank">
                  Program
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavigationENG;
