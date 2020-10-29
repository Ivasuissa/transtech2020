import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cciif from "../media/cciiflogo.png";

const Footer = () => {
  return (
    <div id="footer">
      {/* <img src={cciif}></img> */}
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/CCIIF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/israelvalleynews/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="footertext">
          {" "}
          © Copyright 2020 | Chambre de Commerce et d'Industrie Israël - France{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
