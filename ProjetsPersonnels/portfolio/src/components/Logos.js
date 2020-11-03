import React from "react";
import { LOGOS } from "../constantes";
import { Col, Image } from "react-bootstrap";
//Afficher tous les logos des langages étudiés, placés dans une constante et affiché dans la section à propos
function Logos() {
  return LOGOS.map((key, i) => (
    <Col xs={1}>
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
