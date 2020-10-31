import React from "react";
import { LOGOS } from "../constantes";
import { Col, Image } from "react-bootstrap";

function Logos() {
  return LOGOS.map((key, i) => (
    <Col xs={2}>
      <Image
        fluid
        key={key + i}
        src={LOGOS[i].src}
        alt={LOGOS[i].alt}
        title={LOGOS[i].title}
      />
    </Col>
  ));
}

export default Logos;
