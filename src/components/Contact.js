import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CCIIF from "../media/sponsors/cciif.png";

const Contact = () => {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <div className="contactContent">
        <div className="contactBox">
          <ul className="listCo">
            <li>
              {" "}
              <img src={CCIIF}></img>
            </li>
            <li>
              <i className="fa fa-map-marker-alt"></i>
              <CopyToClipboard text="HaMered Street 29, Tel-Aviv">
                <span
                  className="clickInput"
                  onClick={() => alert("Telephone copié")}
                >
                  HaMered Street 29, Tel-Aviv
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="fa fa-mobile-alt"></i>
              <CopyToClipboard text="+(972) 55-5001297">
                <span
                  className="clickInput"
                  onClick={() => alert("Telephone copié")}
                >
                  +(972) 55-5001297 (ISR)
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <CopyToClipboard text="+(33) 7 55 54 12 75">
                <span
                  className="clickInput"
                  onClick={() => alert("Telephone copié")}
                >
                  +(33) 7 55 54 12 75 (FR)
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
      <p>*TBC : To be Confirmed </p>
    </div>
  );
};
export default Contact;
