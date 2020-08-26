import React from "react";
import { Row, Col } from "react-bootstrap";

//Component pour l'affichage de chacun des personnages
export class NomPays extends React.Component {
  render() {
    console.log("Perso" + this.props);
    return (
      <Row className="text-left">
        <Col>
          {/* On aurait tendance à passer en props les informations du personnage. 
            On ne peut pas faire ça car si l'usager entre /Luke Skywalker sans cliquer sur le lien
            Ou s'il met la page en favoris...
            On doit donc appeler de nouveau l'API après le clique sur le lien.
        */}
          <ul>
            <li>{this.props.nom}</li>
          </ul>
        </Col>
      </Row>
    );
  }
}
