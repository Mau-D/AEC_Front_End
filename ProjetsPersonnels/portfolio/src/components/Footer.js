import React from "react";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Row id="footer" className="text-center">
      <Col xs={12}>
        <h1>MAU-D</h1>
        <a href="mailto:harveymaud@gmail.com">
          <h3>harveymaud@gmail.com </h3>
        </a>
      </Col>
    </Row>
  );
}

export default Footer;
