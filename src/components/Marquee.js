import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import quedit from "../media/quedit.png";
import bits from "../media/bit.png";
import technion from "../media/technion.png";
import escp from "../media/escp.png";
import leumi from "../media/leumi.png";
import israelvalley from "../media/israelvalley.jpg";
import cciif from "../media/cciif.png";

const Marquee = () => {
  return (
    <div className="aboutMarquee">
    <h1>Nos Partenaires</h1>
    <marquee className="marquee">
      <img className="small" src={cciif}></img>
      <img className="small" src={israelvalley}></img>
      <img className="tooBig" src={escp}></img>
      <img className="tooBig" src={leumi}></img>
      <img className="tooBig" src={technion}></img>
      <img className="small" src={bits}></img>
      <img className="tooBig" src={quedit}></img>
    </marquee>
  </div> 
  );
};

export default Marquee;