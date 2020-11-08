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
          <Col xs={9}>
            <Container>
              <Row>
                {/*Titre*/}
                <Col xs={12} className="text-center text-light">
                  <h1>MAU-D</h1>
                  <h2>Développeur Web Front-End Junior</h2>
                </Col>
                {/*Texte*/}
                <Row>
                  <Col xs={8}>
                    <h3>Bonjour, je me présente Maud</h3>
                    <p className="text-left font-medium p-4">
                      <span className="pl-5">Présentement étudiante,</span> je
                      suis à la recherche d'un stage ou d'un emploi stimulant.
                      Ce changement de carrière fait suite à ma passion des
                      technologies et mon désir constant d'apprendre.
                    </p>
                  </Col>
                </Row>
              </Row>
              {location.pathname !== "/onepage/" && (
                <Row className="mt-1">
                  {/*Lien vers la version une seule page*/}
                  <Col className="text-light">
                    Vous préférez "scroller", allez directement à la version
                    <Link to={"onepage/"}>
                      <h3>One Page</h3>
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
            <Col
              xs={12}
              className="text-center d-flex justify-content-center"
              id="cardLien"
            >
              <Card className="apropos mt-3">
                <Card.Img variant="top" src={IMAGES.chemin} className="p-2" />
                <Card.Body className="pt-0">
                  <Link to={"apropos/"}>
                    <Card.Title className="m-0">
                      <span className="font-medium">À propos</span>
                    </Card.Title>
                  </Link>
                  <Card.Text className="font-small">
                    Pour me connaître
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="projets mt-5">
                <Card.Img variant="top" src={IMAGES.ordi} className="p-2" />
                <Card.Body className="pt-0">
                  <Link to={"projets/"}>
                    <Card.Title className="m-0 font-medium">
                      <span className="font-medium">Projets</span>
                    </Card.Title>
                  </Link>
                  <Card.Text className="font-small">
                    Explorer mes projets Web
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="contact mt-1">
                <Card.Img variant="top" src={IMAGES.contact} className="p-2" />
                <Card.Body className="pt-0">
                  <Link to={"contact/"}>
                    <Card.Title className="m-0">
                      <span className="font-medium">Contact</span>
                    </Card.Title>
                  </Link>
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
