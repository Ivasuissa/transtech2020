import React from "react";
import img1 from "../../media/img1.jpg";

const HomeFR = () => {
  return (
    <div id="home">
      <div className="homeContent">
        <div className="homeTitle">
          <h1>11ème Édition</h1>
          <h2>Spéciale Start-Ups France-Israël </h2>
          <h4>le 25 Novembre 2020 entre Paris & Tel-Aviv</h4>

          <img src={img1}></img>
        </div>
      </div>
    </div>
  );
};
export default HomeFR;
