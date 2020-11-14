import React from "react";
import { Card } from "react-bootstrap";

function Formation(props) {
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Body className="p-0">
        <Card.Title className="p-3">{props.nom}</Card.Title>
        <Card.Subtitle className="m-2">{props.duree}</Card.Subtitle>
        <Card.Text className="font-small p-2">
          <ul>
            {props.concepts.map((value) => (
              <li className="mb-1">{value}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Formation;
