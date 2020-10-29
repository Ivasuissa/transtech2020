import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Footer";
import israel from "../../media/israel.jpeg";
import france from "../../media/france.png"

const About = () => {
  return (
    <div id="compProgramme" className="TransTech2020">
      <div className="TransTech2020Title">
        <h1>Programme</h1>
      </div>
      <div className="TransTech2020Content">
        <div className="presentation">
          <h4>4 themes for its 11th Edition of November 25, 2020:</h4>
          <ul>
            <li>
              <h5>• Cybersecurity </h5>
            </li>
            <li>
              <h5>• Bitcoin and Cryptocurrency </h5>
            </li>
            <li>
              <h5>•  Health Tech, </h5>
            </li>
            <li>
              <h5>• The relationship between France / Israël </h5>
            </li>
          </ul>
        </div>
        <div>
          <h4>
            The conference will be held in French and English, in Tel Aviv
            in the meeting room on the 13th floor of the Chamber of Commerce
            Israel - France and Paris, in an ESCP Europe amphitheater.
            <br></br> Will also be broadcast via Zoom.
          </h4>
        </div>
        <div className="details">
          <div className="bloc1">
            <div className="place">
              <h3>Tel-Aviv</h3>
              <img src={israel}></img>
            </div>
            <div className="time">
              <i class="fas fa-clock"></i>
              <h4>
              From 14:00 to 18:00  Israeli hour ( 15:00 to 17:00  French hour)
              </h4>
            </div>
            <div className="presentateur">
              <i class="fas fa-microphone"></i>
              <h4>
              Animated by <b>M. Daniel Rouach</b>, President of the France Israel Chamber of Commerce (CCIIF)
               and  <b>M. Shiran Katz</b>, CCIIF Board member.     
              </h4>
            </div>
            <div className="where">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h4> <b> CHAMBER OF COMMERCE ISRAEL FRANCE,</b> </h4>
                <h4>29, Hamered Street – </h4>
                <h4>61500 Tel-Aviv </h4>
                <h4>13rd floor - Meeting Room </h4>
              </div>
            </div>
          </div>

          {/* <div className="icons">
            <i class="fas fa-clock"></i>
            <i class="fas fa-microphone"></i>
            <i class="fas fa-map-marker-alt"></i>
          </div> */}

          <div className="bloc2">
            <div className="place">
              <h3>Paris</h3>
              <img src={france}></img>
            </div>
            <div className="time">
              <i class="fas fa-clock"></i>
              <h4>
                {" "}
                From 19: 00 to  20:30 Israeli hour (18 to 19:30  French hour)
              </h4>
            </div>
            <div className="presentateur">
              <i class="fas fa-microphone"></i>
              <h4>
                {" "}
                Animated by <b>M. Andre Dan</b>, Co-founder Challengy, Speaker & Coach.
              </h4>
            </div>
            <div className="where">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h4>
                  {" "}
                  <b> ESCP EUROPE SCHOOL,</b>{" "}
                </h4>
                <h4>79 Avenue de la République </h4> 
                  <h4>Paris 75011 </h4>
                <h4>Amphitheater Gelis</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
