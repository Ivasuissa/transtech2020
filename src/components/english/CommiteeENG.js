import React, { Component } from "react";
import { OrgaENG } from "../../data/OrgaENG";

export default class CommiteeENG extends Component {
  state = {
    orgas: OrgaENG
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
                <h3>{orga.name}</h3>
                <h5>{orga.position}</h5>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
