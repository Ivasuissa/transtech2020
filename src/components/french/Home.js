import React from "react";
import Footer from "../Footer";
import Marquee from "../Marquee";
import img1 from "../media/img1.jpg";
import Inscription from "../Inscription"

const Home = () => {
  return (
    <div id="home">
      <div className="homeContent">
        <div className="homeTitle">
          <h1>11ème édition de TransTech</h1>
          <h2>Speciale Start-Ups France-Israël </h2>
          <h4>le 25 Novembre 2020 entre Paris & Tel-Aviv</h4>
          
          <img src={img1}></img>
        </div>
      </div>
    </div>
  );
};
export default Home;
