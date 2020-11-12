import React from "react";
import { Container, Row } from "react-bootstrap";
import TriAutre from "./TriAutre";
import TriPrincipal from "./TriPrincipal";

function TriProjet(props) {
  return (
    <>
      <TriPrincipal techno={props.techno} />
      {/*Les autres projets sous forme de polaroid */}
      <Container>
        <Row>
          <TriAutre techno={props.techno} />
        </Row>
      </Container>
    </>
  );
}
export default TriProjet;
