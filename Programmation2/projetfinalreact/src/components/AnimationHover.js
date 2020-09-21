import React from "react";
import hoverEffect from "hover-effect"; /*animation images hover */
import { Col } from "react-bootstrap";

import "../style/test.sass"; /*Modifier ce fichier pour le style en sass*/

//Component pour la page d'accueil avec un lien vers manageTrips
export class AnimationHover extends React.Component {
  constructor(props) {
    super(props);
  }
  //Pour le titre,
  componentDidMount = () => {
    /*animation */
    new hoverEffect({
      parent: document.querySelector(".ticket"),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      image1: require("../img/rue.jpg"),
      image2: require("../img/voiture_orange.jpg"),
      displacementImage:
        "https://cdn.rawgit.com/robin-dela/hover-effect/b6c6fd26/images/stripe1mul.png?raw=true",
    });
  };

  render() {
    return (
      <Col className="fond vh-100" sm={12}>
        <div className="ticket">
          <div className="overlay"></div>
          <div className="flight-info">
            <h3>Vous êtes enfin prêt!</h3>
            <div className="flight-locations">
              <h1>LAX</h1>
              <h1>JFK</h1>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}
