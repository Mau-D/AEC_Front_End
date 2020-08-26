import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Parametre1 } from "./Parametre1";

//Composant affiche le menu déroulant et retourne le composant de la recherche
export class Accueil extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Parametre1 />
          </Col>
        </Row>
      </Container>
    );
  }
}
