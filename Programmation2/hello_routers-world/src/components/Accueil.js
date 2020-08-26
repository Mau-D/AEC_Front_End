import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

//Variable pour la photo de la page d'accueil
const accueil = {
  src: require("../img/tadoussac.jpg"),
  alt: "plage de Tadoussac",
  title: "plage de Tadoussac",
};

//Component pour l'affichage de la photo et du texte d'accueil
export class Accueil extends React.Component {
  render() {
    return (
      <Container>
        <Row className="text-center">
          <Col>
            <Image
              fluid
              className="d-inline-block"
              src={accueil.src}
              alt={accueil.alt}
              title={accueil.title}
              rounded
            />
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <h1>Plaisir à l'horizon...</h1>
            <br></br>
            <h2>
              Amants de la nature ou passionnés de culture, sportifs ou
              contemplatifs, baleines en observation ou rapaces en migration...
              Il y en a pour tous les goûts à Tadou !
            </h2>
            <br></br>
            <p>
              Tadoussac, village de 800 âmes, est situé dans la région
              touristique de la Côte-Nord, au Québec, à un carrefour maritime
              composé du fleuve Saint-Laurent et du fjord du Saguenay. Ici on se
              rencontre, on festoie, on échange, c’est une tradition depuis des
              milliers d’années! D’abord pour les Premières Nations, puis avec
              les Européens qui se sont établis au début du 17e siècle. Chaque
              printemps, les habitants se préparent à accueillir les visiteurs
              en provenance de tous les horizons. Avec enthousiasme ils ouvrent
              le cœur et les portes du village. Si l’été promet d’être
              effervescent, l’automne plus paisible est flamboyant. Bienvenue!
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
