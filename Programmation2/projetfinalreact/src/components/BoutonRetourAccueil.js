import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//Component pour Le cas d'une page introuvable
function BoutonRetourAccueil() {
  return (
    <Row>
      <Col className="text-right">
        <Link to="/" className="btn btn-primary">
          Retour à l'accueil
        </Link>
      </Col>
    </Row>
  );
}
export default BoutonRetourAccueil;
