import React from "react";
import img1 from "../media/img1.jpg";
import escp from "../../media/escp.png";
import ccfi from "../../media/sponsors/ccfi.png";

const HomeENG = () => {
  return (
    <div id="home">
      <div className="homeContent">
        <div className="homeTitle">
        <div id="logo">
            <img id="escp" src={escp}></img>
            <h1>11th Edition</h1>
            <img id="ccfi" src={ccfi}></img>
          </div>
         
          <h2>Special Start-Ups France-Israel </h2>
          <h4>The Novembre 25th, 2020 between Paris & Tel-Aviv</h4>
          <img src={img1}></img>
        </div>
      </div>
    </div>
  );
};
export default HomeENG;
