import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import About from "../pages/About";
import Marquee from "../components/Marquee";
import img1 from "../media/img1.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContent">
        <div className="homeTitle">
          <h1>11ème édition de TransTech</h1>
          <h2>Special Start-Ups France-Israel </h2>
          <h4>le 25 Novembre à Paris & Tel-Aviv</h4>

          <img src={img1}></img>
        </div>
      </div>
    </div>
  );
};
export default Home;
