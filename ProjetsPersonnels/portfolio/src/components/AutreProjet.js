import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function AutreProjet(props) {
  return (
    <>
      <Col xs={3} className="mt-5 text-center">
        <Card className="apropos mt-3 p-2">
          <Card.Img fluid variant="top" src={props.image} className="p-2" />
          <Card.Body className="p-0">
            <Card.Title className="m-0">
              <h4>{props.titre}</h4>
            </Card.Title>

            <Card.Text className="font-small">{props.lien}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default AutreProjet;
