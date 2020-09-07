import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//Component pour Le cas d'une page introuvable
function BoutonRetourManage() {
  return (
    <Row>
      <Col className="text-right">
        <Link to="/listetrips" className="btn btn-primary">
          Retour à la liste des road trips
        </Link>
      </Col>
    </Row>
  );
}
export default BoutonRetourManage;
