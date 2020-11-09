import React, { Component } from "react";
import { OrgaFR } from "../../data/OrgaFR";

export default class Commitee extends Component {
  state = {
    orgas: OrgaFR
  };
  render() {
    let { orgas } = this.state;

    return (
      <div id="orga">
        <div className="orgaTitle">
          <h1>Comité d'Organisation</h1>
        </div>
        <ul className="orgaDisplay">
          {orgas.map(orga => {
            return (
              <li key={orga.id}>
                <img src={orga.photo}></img>
                <div className="iconLinkedin">
                  <h3>{orga.name}</h3>
                 <a href={orga.linkedin} target="_blank"> <i className="fab fa-linkedin"></i></a>
                </div>
                <h5>{orga.position}</h5>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
