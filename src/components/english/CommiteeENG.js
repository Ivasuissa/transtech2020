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
          <h1>Organizing Commitee</h1>
        </div>
        <ul className="orgaDisplay">
          {orgas.map(orga => {
            return (
              <li key={orga.id}>
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
