import React, { useState } from "react";
import Projets from "./Projets";
import { Button, Row, Col } from "react-bootstrap";
import TriProjet from "./TriProjet";
import "../styles/projets.sass";
//animations react reveal
import Swing from "react-reveal/Swing";

/*Fonction  pour l'affichage des projets, tous les projets sont affichés et les boutons offrent un tri selon la techno*/
function IntroProjet() {
  const [techno, setTechno] = useState("tout");
  /*Lors du clic, la techno est envoyé au state et l'état de tri*/
  function handleClick(techno) {
    setTechno(techno);
  }

  return (
    <>
      <Row className="pt-5 pb-5"></Row>
      <Row>
        <Swing>
          <Col xs={8} className="mb-5 mt-5 titre">
            <h1 className="p-5">Mes Projets</h1>
          </Col>
        </Swing>
      </Row>
      <Row id="boutonsTri" className="mt-3 mx-auto">
        <Col xs={12} className="text-center">
          <Button
            type="button"
            onClick={() => handleClick("tout")}
            className="mx-2 mb-2"
          >
            Tous les projets
          </Button>

          <Button
            type="button"
            onClick={() => handleClick("Integration")}
            className="mx-2 mb-2"
          >
            Integration
          </Button>

          <Button
            type="button"
            onClick={() => handleClick("JQuery")}
            className="mx-2 mb-2"
          >
            JQuery
          </Button>

          <Button
            type="button"
            onClick={() => handleClick("PHP")}
            className="mx-2 mb-2"
          >
            PHP
          </Button>

          <Button
            type="button"
            onClick={() => handleClick("rct")}
            className="mx-2 mb-2"
          >
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
