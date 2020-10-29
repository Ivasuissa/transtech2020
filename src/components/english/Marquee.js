import React from "react";
import quedit from "../media/quedit.png";
import bits from "../media/bit.png";
import technion from "../media/technion.png";
import escp from "../media/escp.png";
import leumi from "../media/leumi.png";
import israelvalley from "../../media/israelvalley.png"
import cciif from "../../media/sponsors/cciif.png"
import AFI from "../../media/sponsors/AFI.png";
import bersay from "../../media/sponsors/bersay.png";
import herez1 from "../../media/sponsors/herez1.png";
import onepoint from "../../media/sponsors/onepoint.png";
import Weizmann from "../../media/sponsors/Weizmann.png";
import orange from "../../media/sponsors/orange.png";
import edf from "../../media/sponsors/edf.png";
import renault from "../../media/sponsors/renault.png";
import elnet from "../../media/sponsors/elnet.jpeg";


const Marquee = () => {
  return (
    <div className="aboutMarquee">
      <h1>Sponsors & Partners</h1>
      <marquee className="marquee">
        <img className="small" src={cciif}></img>
        <img className="small" src={israelvalley}></img>
        <img className="tooBig" src={escp}></img>
        <img className="small" src={bersay}></img>
        <img className="tooBig" src={AFI}></img>
        <img className="tooBig" src={herez1}></img>
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
