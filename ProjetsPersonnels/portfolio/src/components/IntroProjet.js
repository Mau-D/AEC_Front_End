import React, { useState } from "react";
import { PROJETS } from "../constantes";
import Projets from "./Projets";
import { Row, Col, Container, Button } from "react-bootstrap";
import TriProjet from "./TriProjet";
function IntroProjet(props) {
  const [tri, setTri] = useState(false);
  const [techno, setTechno] = useState("");
  function handleClick(techno) {
    setTri(true);
    setTechno(techno);
  }
  function handleRetour() {
    setTri(false);
  }
  return (
    <>
      <Button onClick={handleRetour}>Tous les projets</Button>
      <Button onClick={() => handleClick("Integration")}>Integration</Button>
      <Button onClick={() => handleClick("JQuery")}>JQuery</Button>
      <Button onClick={() => handleClick("PHP")}>PHP</Button>
      <Button onClick={() => handleClick("React")}>React</Button>
      {!tri ? <Projets /> : <TriProjet techno={techno} />}
    </>
  );
}

export default IntroProjet;
