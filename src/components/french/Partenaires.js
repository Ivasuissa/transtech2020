import React from "react";
import israelvalley from "../../media/sponsors/israelvalley.png";
import cciif from "../../media/cciiflogo.png";
import escp from "../../media/escp.png";
import cce from "../../media/sponsors/cce.png";
import ccfi from "../../media/sponsors/ccfi.png";

const Partenaires = () => {
  return (
    <div id="partenaires">
      <h1>Nos Partenaires</h1>
      <div className="partenairesImg">
        <img src={escp}></img>
        <img src={cciif}></img>
        <img src={ccfi}></img>
        <img src={israelvalley}></img>
        <img src={cce}></img>
      </div>
    </div>
  );
};
export default Partenaires;
