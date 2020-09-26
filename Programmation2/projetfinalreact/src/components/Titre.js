import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import sr from "./ScrollReveal";
import "../style/accueil.sass"; /*Modifier ce fichier pour le style en sass*/
const clock = require("../img/clock.png");
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
      <Row id="titre">
        <Col xs={12} sm={8}>
          <Image fluid src={clock} className="haut-5" />
          <h1 className="font-large" ref="box1">
            La trotteuse
          </h1>
        </Col>
      </Row>
    );
  }
}
