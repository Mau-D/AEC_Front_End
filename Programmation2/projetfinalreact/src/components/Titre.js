import React from "react";
import { Row, Col } from "react-bootstrap";
import sr from "./ScrollReveal";
import "../style/accueil.sass"; /*Modifier ce fichier pour le style en sass*/

//Component pour la page d'accueil avec un lien vers manageTrips
export class Titre extends React.Component {
  //Pour le titre,
  componentDidMount = () => {
    const config = {
      origin: "right",
      duration: 1000,
      delay: 150,
      distance: "500px",
      scale: 1,
      easing: "ease",
    };

    sr.reveal(this.refs.box1, config);
  };

  render() {
    return (
      <Row>
        <Col sm={12}>
          <h2 className="rouge" ref="box1">
            La trotteuse
          </h2>
        </Col>
      </Row>
    );
  }
}
