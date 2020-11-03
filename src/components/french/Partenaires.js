import React from "react";
import israelvalley from "../../media/sponsors/israelvalley.png";
import cciif from "../../media/cciiflogo.png";
import escp from "../../media/escp.png";

const Partenaires= () => {
  return (
    <div id="partenaires">
          <h1>Nos Partenaires</h1>
        <div className="partenairesImg">
          <img src={escp}></img>
          <img src={cciif}></img>
          <img src={israelvalley}></img>
          </div>
    </div>
  );
};
export default Partenaires;
