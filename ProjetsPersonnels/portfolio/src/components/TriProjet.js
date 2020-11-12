import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TriAutre from "./TriAutre";
import TriPrincipal from "./TriPrincipal";

function TriProjet(props) {
  return (
    <>
      <TriPrincipal techno={props.techno} />
      {/*Les autres projets sous forme de polaroid */}
      <Container>
        <Row>
          <Col xs={4} sm={2} className="mb-5 mt-5 titre">
            <h1 className="p-5">Autres Projets</h1>
          </Col>
        </Row>
        <Row>
          <TriAutre techno={props.techno} />
        </Row>
      </Container>
    </>
  );
}
export default TriProjet;
