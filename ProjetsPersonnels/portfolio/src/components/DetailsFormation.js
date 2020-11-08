import React from "react";
import { Col } from "react-bootstrap";
import { FORMATIONS } from "../constantes";
import Formation from "./Formation";

function DetailsFormation(props) {
  return FORMATIONS.map((key, i) => (
    <Col xs={4} className="p-2" id="formation">
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
