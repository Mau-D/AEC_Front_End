import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import { IMAGES } from "../constantes";

function CV() {
  return (
    <>
      <Row>
        <Col className="h-50">
          <Image fluid src={IMAGES.cv} />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <a
            href="../../public/files/CV_MaudHarvey.pdf"
            target="_blank"
            download="CV_MaudHarvey.pdf"
          >
            C.V.
          </a>
        </Col>
      </Row>
    </>
  );
}

export default CV;
