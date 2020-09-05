import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//Component pour la structure du site et le lien vers manage de la bd
function ManageTrips() {
  return (
    <Container fluid>
      <Row className="text-center">
        <Col>
          <p>Hello ManageTrips</p>
        </Col>
      </Row>
    </Container>
  );
}
export default ManageTrips;
