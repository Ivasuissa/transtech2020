import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import israel from "../media/israel.jpeg";
import france from "../media/france.png";

const About = () => {
  return (
    <div className="TransTech2020">
      <div className="TransTech2020Title">
        <h1>TransTech 2020</h1>
      </div>
      <div className="TransTech2020Content">
        <div className="presentation">
          <h4>4 thèmes pour sa 11ème Edition du 25 Novembre 2020:</h4>
          <ul>
            <li>
              <h5>• La Cybersecurité, </h5>
            </li>
            <li>
              <h5>• Le Bitcoin et la Cryptomonnaie, </h5>
            </li>
            <li>
              <h5>• La Health Tech, </h5>
            </li>
            <li>
              <h5>• Les relations entre France / Israël </h5>
            </li>
          </ul>
        </div>
        <div>
          <h4>
            La conférence sera tiendra en français et en anglais, à Tel-Aviv, ,
            dans la salle de réunion du 13ème étage de la Chambre de Commerce
            Israël – France et à Paris,dans un amphithéâtre de l’ESCP Europe.
            <br></br> L'ensemble sera également diffusée via Zoom.
          </h4>
        </div>
        <div className="details">
          <div className="bloc1">
            <div className="place">
              <h3>Tel-Aviv</h3>
              <img src={israel}></img>
            </div>
            <div className="time">
              <i class="fas fa-clock"></i>
              <h4>
                <b>De 15h à 18h</b>,heure israélienne (14h à 17h heure
                française)
              </h4>
            </div>
            <div className="presentateur">
              <i class="fas fa-microphone"></i>
              <h4>
                Animée par <b>Monsieur Daniel Rouach</b>, Président de la
                Chambre de Commerce Israël-France (CCIF) et{" "}
                <b>Monsieur Shiran Katz</b>, Board member de la CCIF).
              </h4>
            </div>
            <div className="where">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h4>
                  <b>Chambre de Commerce Israël – France,</b>
                </h4>
                <h4>29, Hamered Street – 61500 Tel-Aviv </h4>
                <h4>Salle de réunion du 13ème étage </h4>
              </div>
            </div>
          </div>

          {/* <div className="icons">
            <i class="fas fa-clock"></i>
            <i class="fas fa-microphone"></i>
            <i class="fas fa-map-marker-alt"></i>
          </div> */}

          <div className="bloc2">
            <div className="place">
              <h3>Paris</h3>
              <img src={france}></img>
            </div>
            <div className="time">
              <i class="fas fa-clock"></i>
              <h4>
                {" "}
                <b>De 19h à 20h30 </b>,heure française israélienne (18h à 19h30
                heure française)
              </h4>
            </div>
            <div className="presentateur">
              <i class="fas fa-microphone"></i>
              <h4>
                {" "}
                <b>Animée par Monsieur André Dan</b>, Conférencier & Coach,{" "}
                Co-fondateur de Challengy.
              </h4>
            </div>
            <div className="where">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h4>
                  {" "}
                  <b>Ecole ESCP Europe,</b>{" "}
                </h4>
                <h4>79 Avenue de la République, Paris 75011 </h4>
                <h4>Amphithéâtre Gélis</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
