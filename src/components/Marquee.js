import React from "react";
import quedit from "../media/quedit.png";
import bits from "../media/bit.png";
import technion from "../media/technion.png";
import escp from "../media/escp.png";
import leumi from "../media/leumi.png";
import israelvalley from "../media/sponsors/israelvalley.png";
import cciif from "../media/cciiflogo.png";
import AFI from "../media/sponsors/AFI.png";
import bersay from "../media/sponsors/bersay.png";
import herez from "../media/sponsors/herez.png";
import onepoint from "../media/sponsors/onepoint.png";
import Weizmann from "../media/sponsors/Weizmann.png";
import orange from "../media/sponsors/orange.png";
import edf from "../media/sponsors/edf.png";
import renault from "../media/sponsors/renault.png";
import elnet from "../media/sponsors/elnet.png";
import Inscription from "./Inscription";

const Marquee = () => {
  return (
    <div className="aboutMarquee">
      <h1>Nos Partenaires</h1>
      <marquee className="marquee">
        <img className="small" src={cciif}></img>
        <img className="small" src={israelvalley}></img>
        <img className="tooBig" src={escp}></img>
        <img className="small" src={bersay}></img>
        <img className="tooBig" src={AFI}></img>
        <img className="tooBig" src={herez}></img>
        <img className="tooBig" src={onepoint}></img>
        <img className="tooBig" src={Weizmann}></img>
        <img className="tooBig" src={orange}></img>
        <img className="small" src={edf}></img>
        <img className="small" src={renault}></img>
        <img className="small" src={elnet}></img>
      </marquee>
    </div>
  );
};

export default Marquee;
