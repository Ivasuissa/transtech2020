import React, { Component } from "react";
import { TechniqueDataENG } from "../../data/techniqueDataENG";

export default class TechniqueENG extends Component {
  state = {
    equipes: TechniqueDataENG
  };
  render() {
    let { equipes } = this.state;

    return (
      <div id="technique">
        <div className="techniqueTitle">
          <h1>Technical Department</h1>
        </div>
        <ul className="techniqueDisplay">
          {equipes.map(equipe => {
            return (
              <li key={equipe.id}>
                <img src={equipe.photo}></img>
                <h3>{equipe.name}</h3>
                <h5>{equipe.position}</h5>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
