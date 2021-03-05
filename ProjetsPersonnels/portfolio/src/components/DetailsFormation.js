import React from "react";
import { Col } from "react-bootstrap";
import { FORMATIONS } from "../constantes";
import Formation from "./Formation";

function DetailsFormation(props) {
  return FORMATIONS.map((key, i) => (
    <Col xs={12} sm={6} lg={3} className="p-2">
      <Formation
        key={key + FORMATIONS[i].id}
        nom={FORMATIONS[i].nomCours}
        duree={FORMATIONS[i].nombreHeures}
        concepts={FORMATIONS[i].methodes}
      />
    </Col>
  ));
}

export default DetailsFormation;
