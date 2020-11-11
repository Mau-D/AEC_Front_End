import React, { useState } from "react";
import Projets from "./Projets";
import { Button, Row, Col } from "react-bootstrap";
import TriProjet from "./TriProjet";
import "../styles/projets.sass";

/*Fonction  pour l'affichage des projets, tous les projets sont affichés et les boutons offrent un tri selon la techno*/
function IntroProjet() {
  const [tri, setTri] = useState(false);
  const [techno, setTechno] = useState("");
  /*Lors du clic, la techno est envoyé au state et l'état de tri*/
  function handleClick(techno) {
    setTri(true);
    setTechno(techno);
  }
  /*clic sur tous les projets remet l'état de tri à faux*/
  function handleRetour() {
    setTri(false);
  }
  return (
    <Row id="boutonsTri" className="mt-3">
      <Col xs={12} className="text-center">
        <Button onClick={handleRetour} className="mx-2 mb-2">
          Tous les projets
        </Button>
        <Button
          onClick={() => handleClick("Integration")}
          className="mx-2 mb-2"
        >
          Integration
        </Button>
        <Button onClick={() => handleClick("JQuery")} className="mx-2 mb-2">
          JQuery
        </Button>
        <Button onClick={() => handleClick("PHP")} className="mx-2 mb-2">
          PHP
        </Button>
        <Button onClick={() => handleClick("React")} className="mx-2 mb-2">
          React
        </Button>
        {/* Si l'état de tri, lors du clic d'une techno, composant TriProjet sinon composant Projets */}
        {!tri ? <Projets /> : <TriProjet techno={techno} />}
      </Col>
    </Row>
  );
}

export default IntroProjet;
