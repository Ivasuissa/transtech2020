import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Footer";
import israel from "../../media/israel.jpeg";
import france from "../../media/france.png";

const ProgrammeENG = () => {
  return (
    <div id="programme" className="TransTech2020">
      <div className="TransTech2020Title">
        <h1>Program</h1>
      </div>
      <div className="TransTech2020Content">
        <div className="presentation">
          <h5>4 themes for this 11th Edition:</h5>
          <div className="blocA">
            <div id="security">
              <h3>I. Cybersecurity </h3>
              <h3>(15h-15h35 IL / 14h-14h35 FR)</h3>
              <p>
                Israel is the second country in the world for cyber security
                exports. Indeed, many countries are now working with Israeli
                cyber security companies to protect their systems. Israel is
                investing hundreds of millions of shekels each year in
                infrastructure aimed at transforming the desert city, Beersheva,
                into a "global cyber security hub." Why is the Israeli
                cybersecurity ecosystem so innovative? What are the
                technological trends in this ecosystem?
              </p>
            </div>
            <div id="BitCoin">
              <h3>II. Fintech & Blockchain</h3>
              <h3>(17h30-18h20 IL / 16h30-17h20 FR)</h3>
              <p>
                Israel, one of the countries in the world with the most
                developed crypto ecosystem, is about to take a real turn in this
                area. Indeed since 2018, crypto-currencies have been treated
                like other financial assets, requiring individual investors to
                pay a capital gains tax of 25%. The Israeli Knesset is
                re-examining the Tax Code, considering dropping the capital
                gains tax on Bitcoin and other cryptocurrencies, thereby
                dramatically increasing demand and therefore interest in this
                ecosystem.
              </p>
            </div>
          </div>
          <div class="blocB">
            <div id="HealthTech">
              <h3>III. Health Tech</h3>
              <h3>(16h40-17h30 IL / 15h40-16h30 FR)</h3>
              <p>
                Israel’s many health tech start-ups are attracting unprecedented
                interest from abroad, with multinational medical giants looking
                to benefit from the country’s ongoing high-tech boom. Israel’s
                health tech is spurred on by a global demand for innovative
                healthcare solutions, accelerated largely with the COVID 19
                pandemic. Considering that life sciences alone represent nearly
                50% of scientific research in Israel, the country has become a
                hub for medical and health innovation and, consequently, a
                target for investors.
              </p>
            </div>
            <div id="relations">
              <h3>IV. Relations between Israel and France</h3>
              <h3>(19-20h IL - 18h-19h FR)</h3>
              <p>
                From the military to the civilian, there is no lack of
                opportunities for the transfer of knowledge and technology.
                Political relations between France and Israel are solid, with
                France standing firm on the State of Israel's right to security.
                The Air Force Chief of Staff has just returned from a visit to
                Israel. The two countries cooperate in defense and intelligence
                but also in areas such as civil aviation, or more recently the
                fight against pandemics. The French economy, second in Europe by
                size, provides market access for Israeli innovation and its
                powerful research capabilities and teams. Geographical proximity
                and cultural links are an asset, France being home to the
                largest Jewish community in Europe, while Israel, one of the
                largest French diasporas.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="infoconf">
            The conference, held <b>in French </b> and <b>in English </b>, will
            be divided in two parts
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
                <b> From 14:00 to 19:00, </b>Israeli hour ( 13:00 to 18:00
                French hour)
              </h4>
            </div>
            <div className="presentateur">
              <i class="fas fa-microphone"></i>
              <h4>
                Hosted by <b>Dr. Daniel Rouach</b>, President of the France
                Israel Chamber of Commerce (CCIIF) and <b>Mr. Shiran Katz</b>,
                CCIIF Board member.
              </h4>
            </div>
            <div className="where">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h4>
                  {" "}
                  <b> CHAMBER OF COMMERCE ISRAEL FRANCE,</b>{" "}
                </h4>
                <h4>29, Hamered Street – </h4>
                <h4>61500 Tel-Aviv </h4>
                <h4>13rd floor - Meeting Room </h4>
              </div>
            </div>
          </div>

          <div className="bloc2">
            <div className="place">
              <h3>Paris</h3>
              <img src={france}></img>
            </div>
            <div className="time">
              <i class="fas fa-clock"></i>
              <h4>
                {" "}
                <b> From 19: 00 to 20:30, </b> Israeli hour (18 to 19:30 French
                hour)
              </h4>
            </div>
            <div className="presentateur">
              <i class="fas fa-microphone"></i>
              <h4>
                {" "}
                Hosted by <b>Mr. Andre Dan</b>, Co-founder Challengy, Speaker &
                Coach.
              </h4>
            </div>
            <div className="where">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h4>
                  {" "}
                  <b> ESCP Business School,</b>{" "}
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
export default ProgrammeENG;
