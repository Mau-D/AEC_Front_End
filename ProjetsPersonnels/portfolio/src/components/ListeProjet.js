import React from "react";
import { Row, Col, Image } from "react-bootstrap";

function ListeProjet(props) {
  return (
    <Row>
      <Col xs={8}>
        <h1>{props.titre}</h1>
        <h3>{props.soustitre}</h3>
        <p>{props.date}</p>
        <a href={props.lien}>{props.lien}</a>
        <p>{props.description}</p>
      </Col>
      <Col xs={4}>
        <Image fluid className="imgProjets" src={props.image} />
      </Col>
    </Row>
  );
}

export default ListeProjet;
