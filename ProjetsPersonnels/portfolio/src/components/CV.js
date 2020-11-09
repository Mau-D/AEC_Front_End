import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import { IMAGES } from "../constantes";

function CV() {
  return (
    <>
      <Row className="mt-5 text-center">
        <Col>
          <a
            href="../../public/files/CV_MaudHarvey.pdf"
            target="_blank"
            download="CV_MaudHarvey.pdf"
          >
            <h1>Télécharger mon C.V. !!!</h1>
          </a>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Image fluid src={IMAGES.cv} />
        </Col>
      </Row>
    </>
  );
}

export default CV;
