import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//Component pour le lien qui redirige vers la page d'Accueil
export class RetourAccueil extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Link to="/" className="btn btn-primary">
            Retour à l'accueil
          </Link>
        </Col>
      </Row>
    );
  }
}
