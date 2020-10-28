import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contact us</h1>
          <ul>
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
