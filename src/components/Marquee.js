import React from "react";
import bits from "../media/bit.png";
import technion from "../media/technion.png";
import bersay from "../media/sponsors/bersay.png";
import herez from "../media/sponsors/herez.png";
import onepoint from "../media/sponsors/onepoint.png";
import Weizmann from "../media/sponsors/Weizmann.png";
import orange from "../media/sponsors/orange.png";
import edf from "../media/sponsors/edf.png";
import renault from "../media/sponsors/renault.png";
import elnet from "../media/sponsors/elnet.png";
import raizone from "../media/sponsors/raizone.png";
import airbus from "../media/sponsors/airbus.png";
import nation from "../media/sponsors/startupnation.png";
import thales from "../media/sponsors/thales.png";
import upstream from "../media/sponsors/upstream.png";
import catalyst from "../media/sponsors/catalyst.png";
import appflyer from "../media/sponsors/appflyer.png";
import glilot from "../media/sponsors/glilot.png";
import dell from "../media/sponsors/dell.svg";
const Marquee = () => {
  return (
    <div className="aboutMarquee">
      <marquee className="marquee">
        <img className="tooBig" src={airbus}></img>
        <img className="tooBig" src={thales}></img>
        <img className="tooBig" src={glilot}></img>
        <img className="tooBig" src={dell}></img>
        <img className="tooBig" src={upstream}></img>
        <img className="tooBig" src={appflyer}></img>
        <img className="tooBig" src={catalyst}></img>
        <img className="tooBig" src={bits}></img>
        <img className="tooBig" src={nation}></img>
        <img className="tooBig" src={raizone}></img>
      </marquee>
    </div>
  );
};

export default Marquee;
