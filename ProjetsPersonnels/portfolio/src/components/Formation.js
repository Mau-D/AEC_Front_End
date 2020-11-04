import React from "react";
import { Card } from "react-bootstrap";

function Formation(props) {
  return (
    <Card style={{ width: "24rem" }}>
      <Card.Body>
        <Card.Title>{props.nom}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.duree}</Card.Subtitle>
        <Card.Text>
          <ul>
            {props.concepts.map((value) => (
              <li>{value}</li>
            ))}
          </ul>
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Formation;
