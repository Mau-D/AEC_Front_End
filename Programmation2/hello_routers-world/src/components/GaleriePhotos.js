import React from "react";
import { Row, Col } from "react-bootstrap";
import { Photos } from "./Photos";

//Variable pour la galerie de photos
const galeriePhotos = [
  {
    src: require("../img/photo1.jpg"),
    alt: "baleine",
    title: "baleine",
  },
  {
    src: require("../img/photo2.jpg"),
    alt: "hotel",
    title: "hotel",
  },
  {
    src: require("../img/photo3.jpg"),
    alt: "hotel",
    title: "hotel",
  },
  {
    src: require("../img/photo4.jpg"),
    alt: "traversier",
    title: "traversier",
  },
  {
    src: require("../img/photo5.jpg"),
    alt: "baleine",
    title: "baleine",
  },
  {
    src: require("../img/photo6.jpg"),
    alt: "baleine",
    title: "baleine",
  },
  {
    src: require("../img/tadoussac.jpg"),
    alt: "plage de Tadoussac",
    title: "plage de Tadoussac",
  },
  {
    src: require("../img/photo1.jpg"),
    alt: "baleine",
    title: "baleine",
  },
  {
    src: require("../img/photo2.jpg"),
    alt: "hotel",
    title: "hotel",
  },
  {
    src: require("../img/photo3.jpg"),
    alt: "hotel",
    title: "hotel",
  },
  {
    src: require("../img/photo4.jpg"),
    alt: "traversier",
    title: "traversier",
  },
  {
    src: require("../img/photo5.jpg"),
    alt: "baleine",
    title: "baleine",
  },
];

//Component pour l'affichage des photos
export class GaleriePhotos extends React.Component {
  constructor(props) {
    super(props);
    this.affichagePhoto = this.affichagePhoto.bind(this);
  }
  //Méthode pour afficher les photos de la galerie avec le component Photos
  affichagePhoto() {
    return (
      <>
        {galeriePhotos.map((element, i) => (
          <Photos
            key={"Photo" + i}
            src={element.src}
            alt={element.alt}
            title={element.title}
          />
        ))}
      </>
    );
  }
  render() {
    return (
      <>
        <Row className="text-center">
          <Col>
            <h1>Galerie photos</h1>
          </Col>
        </Row>
        <Row>{this.affichagePhoto()}</Row>
      </>
    );
  }
}
