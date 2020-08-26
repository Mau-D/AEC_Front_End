import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

//Component pour l'affichage des motos dans des cards
function MotorcycleHook(props) {
  return (
    <Col sm={3} className="mt-5">
      <Card style={{ width: "28rem" }}>
        <Card.Img variant="top" src={props.photo} />
        <Card.Body>
          <Card.Title>
            <Link to={"Motorcycle/" + props.model + "?id=" + props.id}>
              <h2>{props.model}</h2>
            </Link>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.factory}
          </Card.Subtitle>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text>{props.prix}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default MotorcycleHook;
