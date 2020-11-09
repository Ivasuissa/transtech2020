import React, { Component } from "react";
import { IntervenantsData } from "../../data/IntervenantsDataEnglish";

export default class IntervenantENG extends Component {
  state = {
    intervenants: IntervenantsData
  };
  render() {
    let { intervenants } = this.state;

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
                 <a href={intervenant.linkedin} target="_blank"> <i className="fab fa-linkedin"></i></a>
                 </div>
                <h5>{intervenant.position}</h5>
              </li>
            );
          })}
        </ul>
    
      </div>
    );
  }
}
