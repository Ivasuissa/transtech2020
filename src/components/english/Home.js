import React from "react";
import Footer from "../Footer"
import Marquee from "../Marquee";
import img1 from "../media/img1.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContent">
        <div className="homeTitle">
          <h1>11th Edition of TransTech</h1>
          <h2>Special Start-Ups France-Israel </h2>
          <h4>The Novembre 25th, 2020 between Paris & Tel-Aviv</h4>

          <img src={img1}></img>
        </div>
      </div>
    </div>
  );
};
export default Home;
