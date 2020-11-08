import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";

import CV from "./CV";

function Contact() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(true);
  }
  return (
    <>
      <Row>
        Il me fera plaisir de vous rencontrer Pour me joindre: Maud Harvey
        819-523-3737 lien linkedIn harveymaud@gmail.com(faire un mailto)
        <Button onClick={handleClick}>Consulter le CV</Button>
      </Row>
      <Row>
        {/* Affichage de la section des détails de la formation lors du clic*/}
        {show ? <CV /> : null}
      </Row>
    </>
  );
}

export default Contact;
