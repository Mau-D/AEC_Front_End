import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

import CV from "./CV";

function Contact() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(true);
  }
  return (
    <>
      <Row className="mt-5">
        <Col xs={{ span: 6, offset: 3 }} className="m-auto text-center">
          <h3>Il me fera plaisir de vous rencontrer </h3>
          <h3>Pour me joindre:</h3>
          <h1>Maud Harvey</h1>
          <h2>819-523-3737</h2>
          <h5>lien linkedIn</h5>
          <a href="mailto:harveymaud@gmail.com">
            <h3>harveymaud@gmail.com </h3>
          </a>
          ,
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 6, offset: 3 }} className="mx-auto text-center">
          <Button onClick={handleClick}></Button>
          {/* Affichage de la section des détails de la formation lors du clic*/}
          {show ? <CV /> : null}
        </Col>
      </Row>
    </>
  );
}

export default Contact;
