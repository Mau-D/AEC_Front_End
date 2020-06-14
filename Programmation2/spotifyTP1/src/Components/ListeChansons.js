import React from "react";
import Image from "react-bootstrap/Image";
//Méthode pour les éléments du tableau des chansons
export class ListeChansons extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  //Méthode pour changer l'état en mode Paroles(Chansons)
  handleClick() {
    this.props.onClick(true);
    this.props.recupTitre(this.props.titreChanson);
  }
  render() {
    return (
      <>
        <tr onClick={this.handleClick}>
          <td>{this.props.numero}</td>
          <td className="text-center">
            <Image fluid src={require("../img/coeur.png")} id="coeur" />
          </td>
          <td>{this.props.titreChanson}</td>
        </tr>
      </>
    );
  }
}
