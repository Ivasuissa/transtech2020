import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import About from "../pages/About";
import Marquee from "../components/Marquee";
import img1 from "../media/img1.jpg";

const HomeFR = () => {
  return (
    <div className="home">
      <div className="homeContent">
        <div className="homeTitle">
          <h1>11ème édition </h1>
          <h2>Speciale Start-Ups France-Israël </h2>
          <h4>le 25 Novembre 2020 entre Paris & Tel-Aviv</h4>
          {/* 
          <img src={img1}></img> */}
        </div>
      </div>
    </div>
  );
};
export default HomeFR;
