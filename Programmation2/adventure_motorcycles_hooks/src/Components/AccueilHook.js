import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ManageMotorcycleHook from "./ManageMotorcycleHook";

//Component pour la structure du site et le lien vers manage de la bd
function Accueil() {
  return (
    <Container fluid>
      <Row className="text-center">
        <Col>
          <ManageMotorcycleHook />
        </Col>
      </Row>
    </Container>
  );
}
export default Accueil;
