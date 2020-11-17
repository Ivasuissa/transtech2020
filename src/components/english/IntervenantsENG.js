import React, { Component } from "react";
import {
  IntervenantsData,
  CybersecuData,
  HealthTechData,
  FintechData,
  relationsData
} from "../../data/IntervenantsDataEnglish";

export default class IntervenantENG extends Component {
  state = {
    intervenants: IntervenantsData,
    Cybersecus: CybersecuData,
    HealthTechs: HealthTechData,
    Fintechs: FintechData,
    Relations: relationsData
  };
  render() {
    let {
      intervenants,
      Cybersecus,
      HealthTechs,
      Fintechs,
      Relations
    } = this.state;

    return (
      <div id="intervenants">
        <div className="intervenantsTitle">
          <h1>Speakers</h1>
        </div>
        <ul className="intervenantsDisplay">
          {intervenants.map(intervenant => {
            return (
              <li key={intervenant.id}>
                <img src={intervenant.photo}></img>
                <div className="iconLinkedin">
                  <h3>{intervenant.name}</h3>
                  <a href={intervenant.linkedin} target="_blank">
                    {" "}
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <h5>{intervenant.position}</h5>
              </li>
            );
          })}
        </ul>

        <div className="intervenantsTitle">
          <h2>Relations France / Israel</h2>
        </div>
        <ul className="intervenantsDisplay">
          {Relations.map(Relation => {
            return (
              <li key={Relation.id}>
                <img src={Relation.photo}></img>
                <div className="iconLinkedin">
                  <h3>{Relation.name}</h3>
                  <a href={Relation.linkedin} target="_blank">
                    {" "}
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <h5>{Relation.position}</h5>
                <h5>{Relation.company}</h5>
              </li>
            );
          })}
        </ul>

        <div className="intervenantsTitle">
          <h2>Cybersecurity</h2>
        </div>
        <ul className="PanelDisplay">
          {Cybersecus.map(Cybersecu => {
            return (
              <li key={Cybersecu.id}>
                <img src={Cybersecu.photo}></img>
                <div className="iconLinkedin">
                  <h3>{Cybersecu.name}</h3>
                  <a href={Cybersecu.linkedin} target="_blank">
                    {" "}
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <h5>{Cybersecu.position}</h5>
                <h5>{Cybersecu.company}</h5>
              </li>
            );
          })}
        </ul>

        <div className="intervenantsTitle">
          <h2>Health Tech</h2>
        </div>
        <ul className="PanelDisplay">
          {HealthTechs.map(HealthTech => {
            return (
              <li key={HealthTech.id}>
                <img src={HealthTech.photo}></img>
                <div className="iconLinkedin">
                  <h3>{HealthTech.name}</h3>
                  <a href={HealthTech.linkedin} target="_blank">
                    {" "}
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <h5>{HealthTech.position}</h5>
                <h5>{HealthTech.company}</h5>
              </li>
            );
          })}
        </ul>

        <div className="intervenantsTitle">
          <h2>Fintech & Blockchain</h2>
        </div>
        <ul className="PanelDisplay">
          {Fintechs.map(Fintech => {
            return (
              <li key={Fintech.id}>
                <img src={Fintech.photo}></img>
                <div className="iconLinkedin">
                  <h3>{Fintech.name}</h3>
                  <a href={Fintech.linkedin} target="_blank">
                    {" "}
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <h5>{Fintech.position}</h5>
                <h5>{Fintech.company}</h5>
              </li>
            );
          })}
        </ul>

        <h1>Partners</h1>
      </div>
    );
  }
}
