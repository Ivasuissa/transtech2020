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
          <b>TransTech2020 </b>- TransTech est une conférence internationale sur
          le transfert de Technologie et la coopération technologique qui réunit
          chaque année des sociétés, start-ups, experts et spécialistes de
          l’innovation.
        </p>
        <p>
          La diffusion et le transfert de nouvelles technologies est un pilier
          majeur qui soutient la raison d'être de l'écosystème israélien.
          TransTech offre aux acteurs économiques la possibilité non seulement
          de s’informer, mais aussi d’interagir et de développer des relations
          dans ce domaine.
        </p>
        <p>
          Un des objectifs est de renforcer les alliances économiques entre la
          France et Israël. Cet évènement est l’occasion privilégiée de
          rencontrer et échanger avec de nombreux leaders économiques israéliens
          et européens, du secteur privé et gouvernemental. .
        </p>
      </div>
    </div>
  );
};
export default About;
