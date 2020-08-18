import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ManageMotorcycle } from "./ManageMotorcycle";

//Component pour la structure du site et le lien vers manage de la bd
export class Accueil extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className="text-center">
          <Col>
            <ManageMotorcycle />
          </Col>
        </Row>
      </Container>
    );
  }
}
