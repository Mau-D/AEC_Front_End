import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import DetailsProjet from "./DetailsProjet";
import "../styles/projets.sass";

//Fonction qui affiche la liste des projets principaux
function ListeProjet(props) {
  return (
    <Container fluid id="projet">
      <Row className="mt-5">
        <Col xs={{ span: 6, offset: 3 }}>
          <Image fluid src={props.image} />
        </Col>
      </Row>
      <Row className="mb-5 mt-5">
        <Col xs={{ span: 6, offset: 3 }} className="pl-5 text-center">
          <h1>{props.titre}</h1>
          <h3>{props.sousTitre}</h3>
          <p>{props.date}</p>
          <a href={props.lien}>{props.lien}</a>
          <h5>{props.description}</h5>
        </Col>
      </Row>
      <DetailsProjet
        id={props.id}
        image={props.image}
        carousel1={props.carousel1}
        carousel2={props.carousel2}
        carousel3={props.carousel3}
        details={props.details}
      />
    </Container>
  );
}

export default ListeProjet;
