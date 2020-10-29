import React from "react";
import Navigation from "../components/french/Navigation";
import Footer from "../components/Footer";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CCIIF from "../media/sponsors/cciif.png";
import Inscription from "./Inscription";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contactContent">
        <h1>Contact</h1>
        <div className="contactBox">
          <ul>
            <li>
              {" "}
              <img src={CCIIF}></img>
            </li>
            <li>
              <i className="fa fa-map-marker-alt"></i>
              <span>HaMered Street 29, Tel-Aviv</span>
            </li>
            <li>
              <i className="fa fa-mobile-alt"></i>
              <CopyToClipboard text="0642844454">
                <span
                  className="clickInput"
                  onClick={() => alert("Telephone copié")}
                >
                  +(972) 3 533 33 06
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="fa fa-envelope"></i>
              <CopyToClipboard text="ev.suissa@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => alert("email copié")}
                >
                  transtech.israel2020@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Contact;
