import React from "react";
import hoverEffect from "hover-effect"; /*animation images hover */
import { Container } from "react-bootstrap";

import "../styles/principal.sass"; /*Modifier ce fichier pour le style en sass*/

//Component pour l'animation de l'en-tête des détails des road Trips
export class AnimationHover extends React.Component {
  //Pour le titre,
  componentDidMount = () => {
    /*animation */
    new hoverEffect({
      parent: document.querySelector(".ticket"),
      intensity1: 0.01,
      intensity2: 0.01,
      speedIn: 7,
      speedOut: 2,
      angle2: Math.PI / 2,
      image1: require("../img/noir.jpg"),
      image2: require("../img/photo.jpg"),
      displacementImage: require("../img/transition.jpg"),
    });
  };

  render() {
    return (
      <Container className="p-2">
        <div className="ticket"></div>
      </Container>
    );
  }
}
