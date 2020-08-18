import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//Component pour Le cas d'une page introuvable
export class BoutonRetourAccueil extends React.Component {
  render() {
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
}
