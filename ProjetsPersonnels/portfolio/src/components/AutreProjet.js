import React from "react";
import { Card, Col } from "react-bootstrap";

function AutreProjet(props) {
  return (
    <>
      <Col xs={3} className="mt-5 text-center" id="autres">
        <Card className="apropos mt-3 p-2">
          <Card.Img fluid variant="top" src={props.image} className="p-2" />
          <Card.Body className="p-0">
            <Card.Title className="m-0">
              <h5>{props.titre}</h5>
            </Card.Title>

            <Card.Text className="font-small">
              <a href={props.lien}>Lien Github</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default AutreProjet;
