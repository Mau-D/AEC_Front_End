import React from "react";
import { BottinClients } from "../BottinClients/BottinClients";
import { Connexion } from "../Connexion/Connexion";
//Component qui gère l'affichage si l'usager a entré le bon mot de passe
export class Accueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = { connected: false };
    this.gestionConnexion = this.gestionConnexion.bind(this);
    this.changeState = this.changeState.bind(this);
  }
  //Méthode qui change l'état de connexion
  changeState(etat) {
    this.setState({ connected: etat });
  }
  //Méthode qui affiche le bottin si la connexion est établie sinon le formulaire de connexion
  gestionConnexion() {
    if (this.state.connected) {
      return <BottinClients />;
    } else {
      return <Connexion onClick={this.changeState} />;
    }
  }
  //Retourne la méthode qui gère la connexion
  render() {
    return this.gestionConnexion();
  }
}
