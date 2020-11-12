import React from "react";
import img1 from "../../media/img1.jpg";
import escp from "../../media/escp.png";
import ccfi from "../../media/sponsors/ccfi.png";

const HomeFR = () => {
  return (
    <div id="home">
      <div className="homeContent">
        <div className="homeTitle">
        <div id="logo">
            <img id="escp" src={escp}></img>
            <h1>11ème Édition</h1>
            <img id="ccfi" src={ccfi}></img>
          </div>
          <h2>Spéciale Start-Ups France-Israël </h2>
          <h4>le 25 Novembre 2020 entre Paris & Tel-Aviv</h4>
        </div>
        <img id="big" src={img1}></img>
      </div>
    </div>
  );
};
export default HomeFR;
