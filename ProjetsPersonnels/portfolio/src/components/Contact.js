import React, { useState } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";

import CV from "./CV";

function Contact() {
  const [show, setShow] = useState(false);

  function handleClick() {
    {
      show ? setShow(false) : setShow(true);
    }
  }

  return (
    <Container fluid className="mt-5 bkgPolaroid">
      <Row>
        <Col
          xs={12}
          sm={{ span: 6, offset: 3 }}
          className="m-auto text-center pt-5"
        >
          <h3>Il me fera plaisir de vous rencontrer </h3>
          <h3>Pour me joindre:</h3>
          <h1>Maud Harvey</h1>
          <h2>
            <a href="tel:+1-819-523-3737">(819) 523-3737</a>
          </h2>
          <h5>lien linkedIn</h5>
          <a href="mailto:harveymaud@gmail.com">
            <h3>harveymaud@gmail.com </h3>
          </a>
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ span: 4, offset: 4 }}
          className="mx-auto text-center buttoncontact"
        >
          {!show ? (
            <Button className="open" onClick={handleClick}></Button>
          ) : null}
        </Col>
        <Col xs={12} className="mx-auto text-center">
          {/* Affichage de la section des détails de la formation lors du clic*/}
          {show ? <CV /> : null}
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
