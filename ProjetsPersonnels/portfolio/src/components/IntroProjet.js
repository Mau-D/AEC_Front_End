import React, { useState } from "react";
import Projets from "./Projets";
import { Button, Row, Col } from "react-bootstrap";
import TriProjet from "./TriProjet";
import "../styles/projets.sass";

/*Fonction  pour l'affichage des projets, tous les projets sont affichés et les boutons offrent un tri selon la techno*/
function IntroProjet() {
  const [techno, setTechno] = useState("tout");
  /*Lors du clic, la techno est envoyé au state et l'état de tri*/
  function reactClick() {
    setTechno("rct");
  }
  function PHPClick() {
    setTechno("PHP");
  }
  function JQueryClick() {
    setTechno("JQuery");
  }
  function IntegrationClick() {
    setTechno("Integration");
  }
  /*clic sur tous les projets remet l'état de tri à faux*/
  function handleRetour() {
    setTechno("tout");
  }

  return (
    <>
      <Row id="boutonsTri" className="mt-3">
        <p>{techno}</p>
        <Col xs={2} className="text-center">
          <Button type="button" onClick={handleRetour} className="mx-2 mb-2">
            Tous les projets
          </Button>
        </Col>
        <Col xs={2} className="text-center">
          <Button
            type="button"
            onClick={IntegrationClick}
            className="mx-2 mb-2"
          >
            Integration
          </Button>
        </Col>

        <Col xs={2} className="text-center">
          <Button type="button" onClick={JQueryClick} className="mx-2 mb-2">
            JQuery
          </Button>
        </Col>
        <Col xs={2} className="text-center">
          <Button type="button" onClick={PHPClick} className="mx-2 mb-2">
            PHP
          </Button>
        </Col>
        <Col xs={2} className="text-center">
          <Button type="button" onClick={reactClick} className="mx-2 mb-2">
            React
          </Button>
        </Col>
      </Row>
      {/* Si l'état de tri, lors du clic d'une techno, composant TriProjet sinon composant Projets */}
      {techno === "tout" ? <Projets /> : <TriProjet techno={techno} />}
    </>
  );
}

export default IntroProjet;
