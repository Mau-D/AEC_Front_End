import React from "react";
//import APropos from "./APropos";
//import Contact from "./Contact";
import { IMAGES } from "../constantes";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

import "../styles/principal.sass";

function Accueil() {
  let location = useLocation(); /*variable de la page où je me trouve */
  return (
    <>
      <Container fluid className="p-0">
        {/*Ensemble de la page d'accueil */}

        <Row id="banniere">
          {/*Texte de présentation*/}
          <Col xs={8}>
            <Container>
              <Row>
                {/*Titre*/}
                <Col
                  xs={{ span: 8, offset: 2 }}
                  className="text-center mt-5 text-light"
                >
                  MAU-D Bonjour, Je me présente Maud <br></br> Développeur Web
                  Front-End Junior
                </Col>
                {/*Texte*/}
                <Col xs={{ span: 8, offset: 2 }} className="mt-5">
                  <p className="text-left text-light">
                    <span className="pl-5">Présentement étudiante,</span> je
                    suis à la recherche d'un stage ou d'un emploi stimulant. Ce
                    changement de carrière fait suite à ma passion des
                    technologies et mon désir constant d'apprendre. J'adore la
                    résolution de problème et je suis attirée vers ce nouveau
                    style de vie combinant création et techniques.
                  </p>
                </Col>
              </Row>
              {location.pathname !== "/onepage/" && (
                <Row className="mt-2">
                  {/*Lien vers la version une seule page*/}
                  <Col className="text-light">
                    Vous préférez "scroller", allez directement à la version
                    OnePage.
                  </Col>
                  <Col xs={{ span: 4, offset: 1 }}>
                    <Link to={"onepage/"}>
                      <h2>One Page</h2>
                    </Link>
                  </Col>
                </Row>
              )}
            </Container>
          </Col>
          {/*Photo*/}
          <Col xs={3} className="p-5 mt-4">
            <div className="polaroid">
              <p>C'est moi!</p>
              <Image fluid src={IMAGES.photo} id="photoMoi" />
            </div>
          </Col>
        </Row>
        {location.pathname !== "/onepage/" && (
          <Row className="p-5 d-flex justify-content-center">
            <Col xs={12} className="text-center d-flex justify-content-center">
              <Card className="apropos mt-3">
                <Card.Img variant="top" src={IMAGES.chemin} className="p-2" />
                <Card.Body className="pt-0">
                  <Link to={"apropos/"}>
                    <Card.Title className="m-0">À propos</Card.Title>
                  </Link>
                  <Card.Text>Pour me connaître</Card.Text>
                </Card.Body>
              </Card>

              <Card className="projets mt-5">
                <Card.Img variant="top" src={IMAGES.ordi} className="p-2" />
                <Card.Body className="pt-0">
                  <Link to={"projets/"}>
                    <Card.Title className="m-0">Projets</Card.Title>
                  </Link>
                  <Card.Text>Explorer mes projets Web</Card.Text>
                </Card.Body>
              </Card>

              <Card className="contact mt-1">
                <Card.Img variant="top" src={IMAGES.contact} className="p-2" />
                <Card.Body className="pt-0">
                  <Card.Title className="m-0">Coordonnées</Card.Title>
                  <Card.Text>Contactez-moi!</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default Accueil;
