import React from "react";
//import BoutonAjoutTrip from "./BoutonAjoutTrip";
import { Container, Row, Col, Image } from "react-bootstrap";

//Variables pour téléverser les photos des régions
const photos = {
  coccinelle: require("../img/coccinelle.jpg"),
  pieds: require("../img/pieds.jpg"),
  camion: require("../img/camion.jpg"),
};

//Component pour la page d'accueil avec un lien vers manageTrips
export class Accueil extends React.Component {
  //Pour le titre,

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1 className="color">La trotteuse</h1>
            <h2>Vous amènera où vous voulez</h2>
          </Col>
        </Row>
        <Container fluid id="pageAccueil">
          <Row className="text-center">
            <Col md={5} className="px-0 border border-dark">
              <Image fluid src={photos.coccinelle} rounded />
            </Col>
            <Col md={2} className="px-0 border border-dark">
              <p>TEXTE</p>
            </Col>
            <Col md={5} className="px-0 border border-dark">
              <Image fluid className="" src={photos.camion} rounded />
            </Col>
          </Row>
          <Row>
            <Col md={3} className="px-0 border border-dark">
              <p>TEXTE</p>
            </Col>
            <Col md={6} className="px-0 border border-dark">
              <Image fluid src={photos.pieds} rounded />
            </Col>
            <Col md={3} className="px-0 border border-dark">
              <p>TEXTE</p>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="px-0 border border-dark">
              <p>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
              </p>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col>
            <p>Lien</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
