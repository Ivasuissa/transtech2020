import React from "react";
import Navigation from "../components/Navigation";
import hum from "../media/hum.png";
import rob from "../media/robot.png";
import Footer from "../components/Footer";
import Formulaire from "../components/Formulaire";

const Inscription = () => {
  return (
    <div className="inscription">
      <div className="inscriptionContent">
        <img src={rob}></img>
        <div className="inscriptionFormulaire">
          <Formulaire />
        </div>
        <img src={hum}></img>
      </div>
    </div>
  );
};

export default Inscription;
