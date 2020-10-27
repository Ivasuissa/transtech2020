import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="about">
      <div className="title">
        <i class="fas fa-quote-left"></i>
        <h1>
          Un véritable pont économique et commercial <br></br>entre la France et
          Israël.
        </h1>
        <i class="fas fa-quote-right"></i>
      </div>
      <div className="aboutContent">
        <p>
          <b>TransTech2020 </b>- est une conférence internationale sur le
          transfert de technologies et la coopération technologique qui réunit
          chaque année des sociétés, des start-ups, des experts et des
          spécialistes de l’innovation
        </p>
        <p>
          Cet événement est l’occasion privilégiée de mieux comprendre le
          transfert de technologie en Israël, d’évaluer le potentiel des
          technologies financières et de rencontrer de nombreux leaders
          économiques israéliens et européens.
        </p>
        <p>
          Nous offrons aux acteurs économiques la possibilité de s’informer,
          d’interagir, de développer leurs relations et de renforcer les
          alliances économiques entre la France et Israël.
        </p>
      </div>
    </div>
  );
};
export default About;
