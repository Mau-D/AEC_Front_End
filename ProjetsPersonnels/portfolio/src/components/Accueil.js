import React from "react";
//import APropos from "./APropos";
//import Contact from "./Contact";
import { IMAGES } from "../constantes";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";

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
                  className="text-center mt-5 p-5 text-light"
                >
                  Bonjour, Je me présente Maud <br></br> Développeur Web
                  Front-End Junior
                </Col>
                {/*Texte*/}
                <Col xs={{ span: 8, offset: 2 }} className="mt-5 p-5">
                  <p className="text-left text-light">
                    <span className="pl-5">Présentement étudiante,</span> je
                    suis à la recherche d'un stage ou d'un emploi stimulant. Ce
                    changement de carrière fait suite à ma passion des
                    technologies et mon désir d'apprendre constant. J'adore la
                    résolution de problème et je suis attirée vers ce nouveau
                    style de vie combinant création et techniques.
                  </p>
                </Col>
              </Row>
              {location.pathname !== "/onepage/" && (
                <Row className="mt-5">
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
          <Col xs={3} className="p-5 mt-5">
            <div className="polaroid">
              <p>C'est moi!</p>
              <Image fluid src={IMAGES.photo} id="photoMoi" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Accueil;
