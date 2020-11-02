import React, { Component } from "react";
import { TechniqueData } from "../../data/techniqueData";

export default class Technique extends Component {
  state = {
    equipes: TechniqueData
  };
  render() {
    let { equipes } = this.state;

    return (
      <div id="technique">
        <div className="techniqueTitle">
          <h1>Equipe Technique</h1>
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