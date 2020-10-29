import React from "react";



class Formulaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      entreprise: "",
      email: "",
      zoom: false,
      physique: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const name = e.target.name;
    const type = e.target.type;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <div className="formulaireContent">
            <h2>INSCRIPTION</h2>
            <h5>TransTech 2020, le 25 novembre à Tel-Aviv</h5>

          <input
            type="texte"
            placeholder="Nom"
            value={this.state.nom}
            onChange={this.handleChange}
            id="nom"
            name="nom"
          />
          <input
            type="texte"
            placeholder="Prénom"
            value={this.state.prenom}
            onChange={this.handleChange}
            id="prenom"
            name="prenom"
          />

          <input
            type="texte"
            placeholder="Entreprise"
            value={this.state.entreprise}
            onChange={this.handleChange}
            id="entreprise"
            name="entreprise"
          />

          <input
            type="texte"
            id="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <div className="participants">
            <label html="participant">Nombre de participant(s): </label>
            <input type="number" value="0" step="0.01" min="0"></input>
          </div>

          <div className="checkbox">
            <label className="titleParticipation" html="format">
              Participation:{" "}
            </label>
            <label html="format">Physique </label>
            <input
              type="checkbox"
              checked={this.state.checked}
              onChange={this.handleChange}
              name="physique"
            />
            <label html="format">Sur Zoom </label>
            <input
              type="checkbox"
              checked={this.state.checked}
              onChange={this.handleChange}
              name="zoom"
            />
          </div>
          {/* {JSON.stringify(this.state)} */}
          <button class="btn btn-primary">Envoyer</button>
        </div>
      </div>
    );
  }
}

export default Formulaire;
