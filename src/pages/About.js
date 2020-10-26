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
          <b>TransTech </b>- une conférence internationale sur le transfert de
          technologies et la coopération technologique qui réunit chaque année
          des chefs d’entreprises français et israéliens, des universitaires de
          haut rang, des entrepreneurs internationaux et des fondateurs de
          start-ups innovantes.
        </p>
        <p>
          Nos intervenant viennent décrire leur parcours, exposer leurs visions
          et leurs plans pour l’avenir de leurs entreprises à travers leur
          analyse du monde économique, technologique et commercial actuel.
        </p>
        <p>
          TransTech offre aux acteurs économiques un accès à une plateforme
          d’informations et d’interactions favorable au développement des
          relations économiques France-Israël.
        </p>
      </div>
    </div>
  );
};
export default About;
