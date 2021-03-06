import React, { Component } from "react";
import { IntervenantsData } from "../data/IntervenantsData";

export default class IntervenantsFR extends Component {
  state = {
    intervenants: IntervenantsData
  };
  render() {
    let { intervenants } = this.state;

    return (
      <div className="intervenants">
        <div className="intervenantsTitle">
          <h1>Intervenants</h1>
        </div>
        <ul className="intervenantsDisplay">
          {intervenants.map(intervenant => {
            return (
              <li key={intervenant.id}>
                <img src={intervenant.photo}></img>
                <h3>{intervenant.name}</h3>
                <h5>{intervenant.position}</h5>
              </li>
            );
          })}
        </ul>
    
      </div>
    );
  }
}
