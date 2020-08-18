import React from "react";
import { Row, Col, Image } from "react-bootstrap";

//Component pour Le cas d'une page introuvable
export class PageNotFound extends React.Component {
  render() {
    return (
      <Row className="text-center">
        <Col>
          <h1>Page introuvable</h1>
          <Image
            className="d-inline-block"
            src={require("../img/404motorcycle.png")}
            alt="Page introuvable erreur 404"
          />
          <p>Nous serons bientôt là...revenez un peu plus tard</p>
        </Col>
      </Row>
    );
  }
}
