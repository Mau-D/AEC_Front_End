import React from "react";
import { Image, Row, Col } from "react-bootstrap";

function IntroProjet(props) {
  return Number.isInteger(props.id / 2) ? (
    <Row>
      <Col xs={6} className="pl-5">
        <a href="#">
          <h1>{props.titre}</h1>
        </a>
        <h3>{props.sousTitre}</h3>
        <p>{props.date}</p>
        <a href={props.lien}>{props.lien}</a>
        <p>{props.description}</p>
      </Col>
      <Col xs={2}></Col>
      <Col xs={4}>
        <Image fluid className="imgProjets" src={props.image} />
      </Col>
    </Row>
  ) : (
    <Row>
      <Col xs={4}>
        <Image fluid className="imgProjets" src={props.image} />
      </Col>
      <Col xs={2}></Col>
      <Col xs={6} className="pl-5">
        <a href="#">
          <h1>{props.titre}</h1>
        </a>
        <h3>{props.sousTitre}</h3>
        <p>{props.date}</p>
        <a href={props.lien}>{props.lien}</a>
        <p>{props.description}</p>
      </Col>
    </Row>
  );
}

export default IntroProjet;
