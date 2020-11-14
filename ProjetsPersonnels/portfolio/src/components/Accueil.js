import React from "react";
//import APropos from "./APropos";
//import Contact from "./Contact";
import { IMAGES } from "../constantes";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { AnimationHover } from "./AnimationHover";
//Animations react-reveal
import Rotate from "react-reveal/Rotate";

function Accueil() {
  let location = useLocation(); /*variable de la page où je me trouve */

  return (
    <>
      <Row id="banniere">
        {/*Texte de présentation*/}
        <Col xs={12} lg={8}>
          <Container>
            <Row>
              {/*Titre*/}
              <Col lg={12} className="text-center text-light">
                <h1>MAU-D</h1>
                <h2>Développeur Web Front-End Junior</h2>
              </Col>
              {/*Texte*/}
              <Row className="mt-3">
                <Col xs={{ span: 11, offset: 1 }} lg={8}>
                  <h3>Bonjour, je me présente Maud</h3>
                  <p className="text-left font-medium p-md-4">
                    <span className="pl-5">Présentement étudiante,</span> je
                    suis à la recherche d'un stage ou d'un emploi stimulant. Ce
                    changement de carrière fait suite à ma passion des
                    technologies et mon désir constant d'apprendre.
                  </p>
                </Col>
              </Row>
            </Row>
            {location.pathname !== "/onepage/" && (
              <Row className="mt-1">
                {/*Lien vers la version une seule page*/}
                <Col xs={{ span: 11, offset: 1 }} lg={8}>
                  <h5>
                    Vous préférez "scroller", allez directement à la version
                  </h5>
                  <Link to={"onepage/"}>
                    <h2>One Page</h2>
                  </Link>
                </Col>
              </Row>
            )}
          </Container>
        </Col>
        {/*Photo*/}

        <Col xs={10} md={4} className="p-5 mt-5 text-right">
          <Rotate top right>
            <Card className="photo mt-5">
              <AnimationHover />
              <Card.Body className="pt-0">
                <Card.Text className="font-small">C'est moi!</Card.Text>
              </Card.Body>
            </Card>
          </Rotate>
        </Col>
      </Row>
      {location.pathname !== "/onepage/" && (
        <Row className="p-5 text-center" id="cardLien">
          <Col xs={12} sm={4}>
            <Rotate top left>
              <Card className="apropos mt-3 p-2">
                <Card.Img
                  fluid
                  variant="top"
                  src={IMAGES.chemin}
                  className="p-2"
                />
                <Card.Body className="p-0">
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
            </Rotate>
          </Col>
          <Col xs={12} sm={4}>
            <Rotate bottom right>
              <Card className="projets mt-1 p-2">
                <Card.Img
                  variant="top"
                  src={IMAGES.ordi}
                  className="pb-0 p-2 p-md-2 "
                />
                <Card.Body className="p-0">
                  <Link to={"projets/"}>
                    <Card.Title className="m-0 font-medium">
                      <span className="font-medium">Projets</span>
                    </Card.Title>
                  </Link>
                  <Card.Text className="font-small">
                    Explorer mes travaux
                  </Card.Text>
                </Card.Body>
              </Card>
            </Rotate>
          </Col>
          <Col xs={12} sm={4}>
            <Rotate top right>
              <Card className="contact mt-5 p-2">
                <Card.Img variant="top" src={IMAGES.contact} className="p-2" />
                <Card.Body className="pt-0">
                  <Link to={"contact/"}>
                    <Card.Title className="m-0">
                      <span className="font-medium">Contact</span>
                    </Card.Title>
                  </Link>
                </Card.Body>
              </Card>
            </Rotate>
          </Col>
        </Row>
      )}
    </>
  );
}

export default Accueil;
