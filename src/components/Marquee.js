import React from "react";
import israelvalley from ".././media/sponsors/israelvalley.png";
import cciif from ".././media/cciiflogo.png";
import escp from ".././media/escp.png";

import ccfi from ".././media/sponsors/ccfi.png";

const Marquee = () => {
  return (
    <div id="marquee">
      <marquee className="marqueeContent">
        <img src={escp}></img>
        <img src={cciif}></img>
        <img src={ccfi}></img>
        <img src={israelvalley}></img>

      </marquee>
    </div>
  );
};
export default Marquee;
